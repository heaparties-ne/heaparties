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
  const [year, month, day] = dateValue.split("-");
  if (!year || !month || !day) return dateValue || "Not provided";

  return `${day}/${month}/${year}`;
}

export async function POST(req: NextRequest) {
  const body = (await req.json()) as EnquiryBody;
  const contactName = body.contactName?.trim() || "Not provided";
  const date = formatUkDate(body.date?.trim() || "");
  const location = body.location?.trim() || "Not provided";
  const phoneNumber = body.phoneNumber?.trim() || "Not provided";
  const requirements = body.requirements?.trim() || "Not provided";

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
