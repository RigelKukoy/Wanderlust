"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { PlaceResult, BookmarkedPlaces, FoursquarePhoto } from "@/types";
import {
  MapPin,
  Bookmark,
  BookmarkCheck,
  Coffee,
  UtensilsCrossed,
  Building2,
  ShoppingBag,
  Fuel,
  Hotel,
  Camera,
  TreePine,
  Dumbbell,
  GraduationCap,
  Heart,
  Car,
} from "lucide-react";
import { usePlaceImage } from "@/hooks/usePlaceImages";
import { useEffect } from "react";

let hasTriggeredImageFetch = false;

export function PlaceCard({
  place,
  isBookmarked,
  toggleBookmark,
}: {
  place: PlaceResult;
  isBookmarked: Boolean;
  toggleBookmark: () => void;
}) {
  // Destructure place properties

  const { name, location, distance, categories } = place;

  const fullAddress = location.formatted_address;

  // Get the primary category
  const primaryCategory = categories[0];
  const categoryName = primaryCategory?.name || "Unknown";
  const categoryIcon = primaryCategory?.icon;

  // Create the full icon URL
  const iconUrl = categoryIcon
    ? `${categoryIcon.prefix}64${categoryIcon.suffix}`
    : null;

  // Default image since places don't have images in the API response
  const imageUrl = "/images/placeholder.svg";

  const formatDistance = (distance: number) => {
    if (distance > 1000) {
      const formattedDistance = `${(distance / 1000).toFixed(2)} km away`;
      return formattedDistance;
    } else {
      const formattedDistance = `${distance} m away`;
      return formattedDistance;
    }
  };

  const getFirstImageUrl = (
    images: FoursquarePhoto[],
    width = 600,
  ): string | null => {
    if (!images || images.length === 0) return null;
    const firstImage = images[0];
    const ratio = width / firstImage.width;
    const height = Math.round(firstImage.height * ratio);
    return `${firstImage.prefix}${width}x${height}${firstImage.suffix}`;
  };

  const { isLoading, loadImages, images } = usePlaceImage(place.fsq_place_id);

  const firstImageUrl = getFirstImageUrl(images, 600);

  useEffect(() => {
    if (!hasTriggeredImageFetch) {
      hasTriggeredImageFetch = true;
      loadImages();
    }
  }, []);

  return (
    <Card
      className={`group overflow-hidden py-0 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg`}
    >
      <CardContent className="p-0">
        {/* Column Layout: Image on top, details below */}
        <div className="flex flex-col">
          {/* Image Section */}
          <div className="relative aspect-[4/3] overflow-hidden">
            {isLoading ? (
              <img
                src={imageUrl || "/images/placeholder.svg"}
                alt={`${name} - ${categoryName.replace(/_/g, " ")}`}
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                crossOrigin="anonymous"
              />
            ) : images && images.length > 0 ? (
              <img
                src={firstImageUrl ?? imageUrl}
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                crossOrigin="anonymous"
              />
            ) : (
              <img
                src={imageUrl || "/images/placeholder.svg"}
                alt={`${name} - ${categoryName.replace(/_/g, " ")}`}
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                crossOrigin="anonymous"
              />
            )}

            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />

            {/* Bookmark Button */}
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-3 right-3 h-9 w-9 bg-white/90 backdrop-blur-sm transition-colors hover:bg-white"
              onClick={toggleBookmark}
              aria-label={isBookmarked ? "Remove bookmark" : "Add bookmark"}
            >
              {isBookmarked ? (
                <Bookmark className="h-4 w-4 fill-current text-yellow-400" />
              ) : (
                <Bookmark className="h-4 w-4 text-gray-600" />
              )}
            </Button>
          </div>

          {/* Content Section */}
          <div className="space-y-3 p-4 sm:p-5">
            <div className="space-y-2">
              <h3 className="text-lg leading-tight font-semibold text-gray-900 sm:text-xl dark:text-gray-100">
                {name}
              </h3>

              <div className="flex flex-wrap items-center gap-3">
                <div className="flex items-center gap-2">
                  <div className="rounded-md bg-slate-700">
                    {iconUrl ? (
                      <img
                        src={iconUrl}
                        alt={categoryName}
                        className="h-7 w-7"
                      />
                    ) : (
                      <Building2 className="h-4 w-4 flex-shrink-0" />
                    )}
                  </div>
                  <span className="text-sm text-gray-600 capitalize dark:text-gray-400">
                    {categoryName.replace(/_/g, " ")}
                  </span>
                </div>
                <Badge variant="secondary" className="text-sm font-medium">
                  {formatDistance(distance)}
                </Badge>
              </div>
            </div>

            <div className="flex items-start gap-2">
              <MapPin
                className="mt-0.5 h-4 w-4 flex-shrink-0 text-gray-400"
                aria-hidden="true"
              />
              <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                {fullAddress}
              </p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
