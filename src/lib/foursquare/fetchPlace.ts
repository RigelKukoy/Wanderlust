import { userSearchPayload } from "@/types";
import { PlaceSearchResponse } from "@/types";

export default async function searchPlaces(
  params: userSearchPayload,
): Promise<PlaceSearchResponse> {
  const { searchQuery, userCoordinates, searchRadius } = params;
  try {
    const requestUrl = `/api/places/search?query=${searchQuery}&ll=${userCoordinates}&radius=${searchRadius}`;
    console.log(requestUrl);
    const response = await fetch(requestUrl);

    if (!response.ok) {
      throw new Error(
        `Failed to fetch place: ${response.status} ${response.statusText}`,
      );
    }

    const data = await response.json();
    console.log(data);
    return data;
  } catch (err) {
    throw err;
  }
}
