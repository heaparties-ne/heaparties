import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const enquiryToEmail = process.env.ENQUIRY_TO_EMAIL || "enquiries@heaparties-ne.co.uk";
const enquiryFromEmail = process.env.ENQUIRY_FROM_EMAIL;
const resendApiKey = process.env.RESEND_API_KEY;

type EnquiryBody = {
  contactName?: string;
  date?: string;
  location?: string;
  phoneNumber?: string;
  requirements?: string;
};

function formatUkDate(dateValue: string) {
  const match = /^(\d{4})-(\d{2})-(\d{2})$/.exec(dateValue);
  if (!match) return dateValue || "Not provided";

  const [, year, month, day] = match;

  return `${day}/${month}/${year}`;
}

function getClientIp(req: NextRequest) {
  const forwardedFor = req.headers.get("x-forwarded-for");
  if (forwardedFor) {
    return forwardedFor.split(",")[0]?.trim() || "Not available";
  }

  return (
    req.headers.get("x-real-ip") ||
    req.headers.get("x-vercel-forwarded-for") ||
    req.headers.get("cf-connecting-ip") ||
    "Not available"
  );
}

function getIpLocation(req: NextRequest) {
  const city = req.headers.get("x-vercel-ip-city");
  const region = req.headers.get("x-vercel-ip-country-region");
  const country = req.headers.get("x-vercel-ip-country");
  const latitude = req.headers.get("x-vercel-ip-latitude");
  const longitude = req.headers.get("x-vercel-ip-longitude");
  const place = [city, region, country].filter(Boolean).join(", ");
  const coordinates = latitude && longitude ? ` (${latitude}, ${longitude})` : "";

  return place ? `${decodeURIComponent(place)}${coordinates}` : "Not available";
}

export async function POST(req: NextRequest) {
  const body = (await req.json()) as EnquiryBody;
  const contactName = body.contactName?.trim() || "Not provided";
  const date = formatUkDate(body.date?.trim() || "");
  const location = body.location?.trim() || "Not provided";
  const phoneNumber = body.phoneNumber?.trim() || "Not provided";
  const requirements = body.requirements?.trim() || "Not provided";
  const clientIp = getClientIp(req);
  const ipLocation = getIpLocation(req);

  if (!resendApiKey || !enquiryFromEmail) {
    return NextResponse.json(
      {
        success: false,
        message: "Email sending is not configured yet.",
      },
      { status: 503 },
    );
  }

  const emailText = [
    "Website Enquiry",
    "",
    `Contact Name: ${contactName}`,
    "",
    `Date: ${date}`,
    "",
    `Location: ${location}`,
    "",
    `Phone Number: ${phoneNumber}`,
    "",
    "Requirements:",
    requirements,
    "",
    "Submission details:",
    `IP Address: ${clientIp}`,
    `IP Location: ${ipLocation}`,
  ].join("\n");

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${resendApiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: enquiryFromEmail,
      to: [enquiryToEmail],
      subject: "Website Enquiry",
      text: emailText,
    }),
  });

  if (!response.ok) {
    return NextResponse.json(
      {
        success: false,
        message: "The enquiry could not be sent. Please try again.",
      },
      { status: 502 },
    );
  }

  return NextResponse.json({ success: true });
}
