"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

export type WishlistItem = {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
  description: string;
};

type WishlistContextType = {
  items: WishlistItem[];
  addItem: (item: WishlistItem) => void;
  removeItem: (id: string) => void;
  isInWishlist: (id: string) => boolean;
  clearWishlist: () => void;
  itemCount: number;
};

const WishlistContext = createContext<WishlistContextType | undefined>(undefined);

export function WishlistProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<WishlistItem[]>(() => {
    if (typeof window === "undefined") {
      return [];
    }

    const savedWishlist = window.localStorage.getItem("wishlist");
    if (!savedWishlist) {
      return [];
    }

    try {
      return JSON.parse(savedWishlist) as WishlistItem[];
    } catch (e) {
      console.error("Failed to parse wishlist from local storage", e);
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem("wishlist", JSON.stringify(items));
  }, [items]);

  const addItem = (newItem: WishlistItem) => {
    setItems((prev) => {
      const existing = prev.find((item) => item.id === newItem.id);
      if (existing) {
        return prev;
      }
      return [...prev, newItem];
    });
  };

  const removeItem = (id: string) => {
    setItems((prev) => prev.filter((item) => item.id !== id));
  };

  const isInWishlist = (id: string) => {
    return items.some((item) => item.id === id);
  };

  const clearWishlist = () => {
    setItems([]);
  };

  const itemCount = items.length;

  const value = {
    items,
    addItem,
    removeItem,
    isInWishlist,
    clearWishlist,
    itemCount,
  };

  return React.createElement(
    WishlistContext.Provider,
    { value: value },
    children
  );
}

export function useWishlist() {
  const context = useContext(WishlistContext);
  if (context === undefined) {
    throw new Error("useWishlist must be used within a WishlistProvider");
  }
  return context;
}
