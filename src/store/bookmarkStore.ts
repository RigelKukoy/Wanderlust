import { create } from "zustand";

type bookmarkedPlace = {
  placeId: string;
};

type BookmarkState = {
  bookmarks: bookmarkedPlace[];
  actions: BookmarkStateActions;
};

type BookmarkStateActions = {
  addBookmark: (newBookmark: bookmarkedPlace) => void;
  removeBookmark: (removedBookmark: bookmarkedPlace) => void;
};

const useBookmarkState = create<BookmarkState>()((set) => ({
  bookmarks: [],
  actions: {
    addBookmark: (newBookmark) =>
      set((state) => ({
        bookmarks: [...state.bookmarks, newBookmark],
      })),

    removeBookmark: (removedBookmark) =>
      set((state) => ({
        bookmarks: state.bookmarks.filter(
          (bookmark) => bookmark !== removedBookmark,
        ),
      })),
  },
}));

export const getBookmarks = () => useBookmarkState((state) => state.bookmarks);

export const useBookmarkActions = () =>
  useBookmarkState((state) => state.actions);
