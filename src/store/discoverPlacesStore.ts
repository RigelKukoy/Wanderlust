import { create } from "zustand";
import { PlaceResult, userSearchPayload } from "@/types";

type DiscoverPlacesState = {
  places: PlaceResult[];
  searchParams: userSearchPayload;
  actions: DiscoverPlacesActions;
};

type DiscoverPlacesActions = {
  updatePlaces: (places: PlaceResult[]) => void;
  updateSearchCoordinates: (userCoordinates: string) => void;
  updateSearchQuery: (userQuery: string) => void;
  updateSearchRadius: (userRadius: string) => void;
};

const useDiscoverPlacesStore = create<DiscoverPlacesState>()((set) => ({
  places: [],
  searchParams: {
    searchQuery: "cafe",
    userCoordinates: "",
    searchRadius: "5000",
  },
  actions: {
    updatePlaces: (newDiscoverPlaces: PlaceResult[]) => {
      set({ places: newDiscoverPlaces });
    },
    updateSearchCoordinates: (newUserCoordinates: string) => {
      set((state) => ({
        searchParams: {
          ...state.searchParams,
          userCoordinates: newUserCoordinates,
        },
      }));
    },

    updateSearchQuery: (newUserQuery: string) => {
      set((state) => ({
        searchParams: {
          ...state.searchParams,
          searchQuery: newUserQuery,
        },
      }));
    },
    updateSearchRadius: (newUserRadius: string) => {
      set((state) => ({
        searchParams: {
          ...state.searchParams,
          searchRadius: newUserRadius,
        },
      }));
    },
  },
}));

export const getDiscoverPlaces = () =>
  useDiscoverPlacesStore((state) => state.places);

export const getSearchParams = () =>
  useDiscoverPlacesStore((state) => state.searchParams);

export const useDiscoverPlacesActions = () =>
  useDiscoverPlacesStore((state) => state.actions);
