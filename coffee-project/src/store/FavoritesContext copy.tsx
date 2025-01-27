"use client";
import { CardProps } from "@/type";
import React, { createContext, useState, useEffect, ReactNode } from "react";

interface FavoritesContextProps {
  favorites: CardProps[];
  error?: Error | null;
  loading?: boolean;
  addFavorite: (card: CardProps) => void;
  removeFavorite: (cardId: string) => void;
}

const FavoritesContext = createContext<FavoritesContextProps | undefined>(
  undefined
);

export const FavoritesProvider = ({ children }: { children: ReactNode }) => {
  const [favorites, setFavorites] = useState<CardProps[]>([]);
  const [error, setError] = useState<Error | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  // マウント時にローカルストレージからお気に入りを読み込む
  useEffect(() => {
    const fetchFavorites = async () => {
      setLoading(true);
      const storedFavorites = localStorage.getItem("favorites");
      try {
        if (storedFavorites) {
          setFavorites(JSON.parse(storedFavorites));
        }
      } catch (error) {
        setError(
          error instanceof Error
            ? error
            : new Error("An unknown error occurred")
        );
      } finally {
        setLoading(false);
      }
    };
    fetchFavorites();
  }, []);

  // お気に入りを追加する
  const addFavorite = (card: CardProps) => {
    // すでに存在しない場合だけ追加
    if (!favorites.some((item) => item.slug === card.slug)) {
      const updatedFavorites = [...favorites, card];
      setFavorites(updatedFavorites);
      localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
    }
  };

  // お気に入りを削除する
  const removeFavorite = (cardId: string) => {
    const updatedFavorites = favorites.filter((item) => item.slug !== cardId);
    setFavorites(updatedFavorites);
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
  };

  return (
    <FavoritesContext.Provider
      value={{
        favorites,
        error,
        loading,
        addFavorite,
        removeFavorite,
      }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};

export const useFavorites = () => {
  const context = React.useContext(FavoritesContext);
  if (context === undefined) {
    throw new Error("useFavorites must be used within a FavoritesProvider");
  }
  return context;
};
