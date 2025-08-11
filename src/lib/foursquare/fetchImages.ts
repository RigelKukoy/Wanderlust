import { FoursquarePhoto } from "@/types";

export default async function fetchImages(
  foursquare_place_id: string,
): Promise<FoursquarePhoto[]> {
  try {
    const requestUrl = `/api/places/images?foursquare_place_id=${foursquare_place_id}&limit=5&sort=POPULAR`;
    console.log(requestUrl);

    const response = await fetch(requestUrl);

    if (!response.ok) {
      throw new Error(
        `Failed to fetch images: ${response.status} ${response.statusText}`,
      );
    }

    const data = await response.json();
    console.log(data);
    return data;
  } catch (err) {
    throw err;
  }
}
