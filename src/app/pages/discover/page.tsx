"use client";

import { useEffect } from "react";
import { handleGetUserCoordinates } from "@/lib/geolocation";
import searchPlaces from "@/lib/foursquare/fetchPlace";
import { userSearchPayload } from "@/types";
import {
  getDiscoverPlaces,
  getSearchParams,
  useDiscoverPlacesActions,
} from "@/store/discoverPlacesStore";
import { getBookmarks, useBookmarkActions } from "@/store/bookmarkStore";
import { PlaceCard } from "@/components/place-card";

export default function DiscoverPage() {
  const discoverPlaces = getDiscoverPlaces();
  const bookmarks = getBookmarks();
  const SearchParams = getSearchParams();

  const { updateSearchCoordinates, updatePlaces } = useDiscoverPlacesActions();
  const { addBookmark, removeBookmark } = useBookmarkActions();

  function isValidCoords(coords?: { latitude?: number; longitude?: number }) {
    return !!coords?.latitude && !!coords?.longitude;
  }

  async function fetchUserCoordinate(): Promise<void> {
    try {
      const Coordinates = await handleGetUserCoordinates();
      if (isValidCoords(Coordinates)) {
        const formattedUserCoords = `${Coordinates?.latitude},${Coordinates?.longitude}`;
        updateSearchCoordinates(formattedUserCoords);
      } else {
        throw new Error("Failed to obtain User Coordinates");
      }
    } catch (err) {
      return console.error("An error occurred while getting coordinates:", err);
    }
  }

  useEffect(() => {
    fetchUserCoordinate();

    const fetchPlaces = async () => {
      if (SearchParams.userCoordinates) {
        const discoverPlacesData = await searchPlaces(SearchParams);

        if (discoverPlacesData.results) {
          updatePlaces(discoverPlacesData.results);
        }
      }
    };

    fetchPlaces();
  }, [SearchParams.userCoordinates]);

  return (
    <div className="grid grid-cols-1 gap-4 p-2 md:grid-cols-2 lg:grid-cols-3 lg:px-48">
      {discoverPlaces.map((place) => {
        const isBookmarked = bookmarks.some(
          (bookmark) => bookmark.placeId === place.fsq_place_id,
        );
        const handleToggleBookmark = () => {
          if (isBookmarked) {
            const bookmarkToRemove = bookmarks.find(
              (bookmarks) => bookmarks.placeId === place.fsq_place_id,
            );
            if (bookmarkToRemove) {
              removeBookmark(bookmarkToRemove);
            }
          } else {
            addBookmark({ placeId: place.fsq_place_id });
          }
        };

        return (
          <PlaceCard
            key={place.fsq_place_id}
            place={place}
            isBookmarked={isBookmarked}
            toggleBookmark={handleToggleBookmark}
          />
        );
      })}
    </div>
  );
}
