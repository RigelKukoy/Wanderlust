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

  const foursquareID = searchParams.get("foursquare_place_id");

  const foursquareImageURL = `https://places-api.foursquare.com/places/${foursquareID}/photos?limit=10&sort=POPULAR`;

  const imagesApiRequestOption = {
    method: "GET",
    headers: {
      accept: "application/json",
      "X-Places-Api-Version": "2025-06-17",
      authorization: `Bearer ${process.env.FOURSQUARE_API}`,
    },
  };

  try {
    console.log(`API KEY: ${FOURSQUARE_API}`);

    const response = await fetch(foursquareImageURL, imagesApiRequestOption);

    const data = await response.json();

    if (!response.ok) {
      return NextResponse.json({ error: data }, { status: response.status });
    }

    return NextResponse.json(data);
  } catch (err) {
    return NextResponse.json(
      {
        error: "Failed to fetch photo URLs",
      },
      { status: 500 },
    );
  }
}
