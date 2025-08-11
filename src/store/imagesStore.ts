import { create } from "zustand";
import { FoursquarePhoto } from "@/types";

type placeImageState = {
  place_images: Record<string, FoursquarePhoto[]>;
  actions: placeImageStateActions;
};

type placeImageStateActions = {
  addPlaceImage: (foursquare_ID: string, images: FoursquarePhoto[]) => void;
};

const usePlaceImageState = create<placeImageState>()((set) => ({
  place_images: {},
  actions: {
    addPlaceImage: (place_id: string, images: FoursquarePhoto[]) =>
      set((state) => ({
        place_images: { ...state.place_images, [place_id]: images },
      })),
  },
}));

export const getPlaceImages = () =>
  usePlaceImageState((state) => state.place_images);

export const usePlaceImagesActions = () =>
  usePlaceImageState((state) => state.actions);
