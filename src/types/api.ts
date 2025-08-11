export type userSearchPayload = {
  searchQuery: string;
  userCoordinates: string;
  searchRadius: string;
};

export type BookmarkedPlaces = {
  bookmarked_places_id: string[];
};

export type PlaceSearchResponse = {
  results: PlaceResult[];
  context: {
    geo_bounds: {
      circle: {
        center: {
          latitude: number;
          longitude: number;
        };
        radius: number;
      };
    };
  };
};

export type PlaceResult = {
  fsq_place_id: string;
  name: string;
  categories: Category[];
  distance: number;
  latitude: number;
  longitude: number;
  location: Location;
  date_created?: string;
  date_refreshed?: string;
  extended_location?: Record<string, any>;
  link?: string;
  placemaker_url?: string;
  related_places?: RelatedPlaces;
  social_media?: SocialMedia;
};

export type Category = {
  fsq_category_id: string;
  name: string;
  short_name: string;
  plural_name: string;
  icon: CategoryIcon;
};

export type CategoryIcon = {
  prefix: string;
  suffix: string;
};

export type Location = {
  address?: string;
  country?: string;
  formatted_address?: string;
  locality?: string;
  postcode?: string;
  region?: string;
};

export type RelatedPlaces = {
  parent?: RelatedPlace;
  children?: RelatedPlace[];
};

export type RelatedPlace = {
  fsq_place_id: string;
  name: string;
  categories: Category[];
};

export type SocialMedia = {
  facebook_id?: string;
  twitter?: string;
  instagram?: string;
};

// fetch images type
export type FoursquarePhotoTip = {
  id: string;
  created_at: string; // ISO string
  text: string;
  url: string;
  lang: string;
  agree_count: number;
  disagree_count: number;
};

export type FoursquarePhoto = {
  id: string;
  created_at: string; // ISO string
  prefix: string;
  suffix: string;
  width: number;
  height: number;
  classifications: string[];
  tip?: FoursquarePhotoTip;
};
