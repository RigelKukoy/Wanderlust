import fetchImages from "@/lib/foursquare/fetchImages";
import { usePlaceImagesActions } from "@/store/imagesStore";
import { getPlaceImages } from "@/store/imagesStore";
import { FoursquarePhoto } from "@/types";
import { useState } from "react";

export function usePlaceImage(place_id: string) {
  const { addPlaceImage } = usePlaceImagesActions();
  const [fetchedImages, setFetchImages] = useState<FoursquarePhoto[] | null>(
    null,
  );
  const [isLoading, setIsLoading] = useState(false);

  const placeImages = getPlaceImages();

  const existingImages = placeImages[place_id];

  const loadImages = async () => {
    if (existingImages || fetchedImages) return;

    try {
      setIsLoading(true);
      const fetchedImages = await fetchImages(place_id);

      if (fetchedImages) {
        addPlaceImage(place_id, fetchedImages);
        setFetchImages(fetchedImages);
      } else {
        throw new Error("Failed to fetch Images");
      }
    } catch (err) {
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  return {
    images: existingImages ?? fetchedImages,
    loadImages,
    isLoading,
  };
}
