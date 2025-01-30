"use client";
import React, { createContext, useState, useEffect, ReactNode } from "react";

interface FavoritesContextProps {
  favorites: string[]; // slugの配列に変更
  addFavorite: (slug: string) => void;
  removeFavorite: (slug: string) => void;
}

const FavoritesContext = createContext<FavoritesContextProps | undefined>(
  undefined
);

export const FavoritesProvider = ({ children }: { children: ReactNode }) => {
  const [favorites, setFavorites] = useState<string[]>([]);

  // ローカルストレージからお気に入りを読み込み
  useEffect(() => {
    const storedFavorites = localStorage.getItem("favorites");
    if (storedFavorites) {
      try {
        const parsedFavorites = JSON.parse(storedFavorites);
        if (Array.isArray(parsedFavorites)) {
          const uniqueFavorites = Array.from(
            new Set(parsedFavorites.filter((slug) => typeof slug === "string"))
          );
          setFavorites(uniqueFavorites);
        } else {
          console.error("Favorites in localStorage is not an array.");
        }
      } catch (error) {
        console.error("Failed to parse favorites from localStorage:", error);
      }
    }
  }, []);

  // お気に入りを追加
  const addFavorite = (slug: string) => {
    if (typeof slug !== "string" || slug.trim() === "") {
      console.error("Invalid slug provided:", slug);
      return;
    }

    if (!favorites.includes(slug)) {
      const updatedFavorites = [...favorites, slug];
      const uniqueFavorites = Array.from(new Set(updatedFavorites)); // 重複防止
      setFavorites(uniqueFavorites);
      localStorage.setItem("favorites", JSON.stringify(uniqueFavorites));
    }
  };

  // お気に入りを削除
  const removeFavorite = (slug: string) => {
    const updatedFavorites = favorites.filter((item) => item !== slug);
    setFavorites(updatedFavorites);
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
  };

  return (
    <FavoritesContext.Provider
      value={{ favorites, addFavorite, removeFavorite }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};

export const useFavorites = () => {
  const context = React.useContext(FavoritesContext);
  if (!context) {
    throw new Error("useFavorites must be used within a FavoritesProvider");
  }
  return context;
};
