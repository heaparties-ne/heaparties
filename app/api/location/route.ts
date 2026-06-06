import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const northEastPlaces = new Map([
  ["alnwick", "Alnwick"],
  ["barnard castle", "Barnard Castle"],
  ["billingham", "Billingham"],
  ["bishop auckland", "Bishop Auckland"],
  ["blyth", "Blyth"],
  ["consett", "Consett"],
  ["cramlington", "Cramlington"],
  ["darlington", "Darlington"],
  ["durham", "Durham"],
  ["gateshead", "Gateshead"],
  ["guisborough", "Guisborough"],
  ["hartlepool", "Hartlepool"],
  ["hexham", "Hexham"],
  ["middlesbrough", "Middlesbrough"],
  ["morpeth", "Morpeth"],
  ["newcastle upon tyne", "Newcastle"],
  ["newcastle", "Newcastle"],
  ["north shields", "North Shields"],
  ["peterlee", "Peterlee"],
  ["redcar", "Redcar"],
  ["saltburn-by-the-sea", "Saltburn"],
  ["saltburn", "Saltburn"],
  ["seaham", "Seaham"],
  ["south shields", "South Shields"],
  ["stockton-on-tees", "Stockton-on-Tees"],
  ["stockton on tees", "Stockton-on-Tees"],
  ["stockton", "Stockton-on-Tees"],
  ["sunderland", "Sunderland"],
  ["tynemouth", "Tynemouth"],
  ["washington", "Washington"],
  ["whitley bay", "Whitley Bay"],
  ["yarm", "Yarm"],
]);

export async function GET(req: NextRequest) {
  const country = req.headers.get("x-vercel-ip-country");
  const encodedCity = req.headers.get("x-vercel-ip-city");
  const city = encodedCity ? decodeURIComponent(encodedCity).trim().toLowerCase() : "";

  return NextResponse.json(
    { city: country === "GB" ? northEastPlaces.get(city) || null : null },
    {
      headers: {
        "Cache-Control": "private, no-store",
      },
    },
  );
}
