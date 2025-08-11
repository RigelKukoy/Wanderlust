import { NextRequest, NextResponse } from "next/server";

const FOURSQUARE_API = process.env.FOURSQUARE_API;

export async function GET(req: NextRequest) {
  if (!FOURSQUARE_API) {
    return NextResponse.json(
      { error: "FOURSQUARE_API environment variable is not set" },
      { status: 500 },
    );
  }

  const searchParams = req.nextUrl.searchParams;

  const query = searchParams.get("query") || "coffee";
  const ll = searchParams.get("ll") || "7.104102,125.619405";
  const radius = searchParams.get("radius") || "5000";

  const fourSquareURL = `https://places-api.foursquare.com/places/search?query=${encodeURIComponent(query)}&ll=${encodeURIComponent(ll)}&radius=${radius}`;

  const placesApiRequestOption = {
    method: "GET",
    headers: {
      accept: "application/json",
      "X-Places-Api-Version": "2025-06-17",
      authorization: `Bearer ${process.env.FOURSQUARE_API}`,
    },
  };

  try {
    console.log("API Key:", FOURSQUARE_API);

    const response = await fetch(fourSquareURL, placesApiRequestOption);

    const data = await response.json();

    if (!response.ok) {
      return NextResponse.json({ error: data }, { status: response.status });
    }

    return NextResponse.json(data);
  } catch (err) {
    return NextResponse.json(
      { error: "Failed to fetch places" },
      { status: 500 },
    );
  }
}
