"use client";
import React, { createContext, useContext, useEffect, useState } from "react";

// card 型は ID と名前だけでもよいし、必要に応じてプロパティを増やせる
type Card = {
  id: string;
  name: string;
  // 他に必要なプロパティがあれば追加
};

type FavoritesContextType = {
  favorites: Card[]; // 現在のお気に入り一覧
  addFavorite: (card: Card) => void; // お気に入り追加
  removeFavorite: (cardId: string) => void; // お気に入り削除
};

const FavoritesContext = createContext<FavoritesContextType | undefined>(
  undefined
);

export const FavoritesProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [favorites, setFavorites] = useState<Card[]>([]);

  // マウント時にローカルストレージからお気に入りを読み込む
  useEffect(() => {
    const storedFavorites = localStorage.getItem("favorites");
    if (storedFavorites) {
      setFavorites(JSON.parse(storedFavorites));
    }
  }, []);

  // お気に入りを追加する
  const addFavorite = (card: Card) => {
    // すでに存在しない場合だけ追加
    if (!favorites.some((item) => item.id === card.id)) {
      const updatedFavorites = [...favorites, card];
      setFavorites(updatedFavorites);
      localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
    }
  };

  // お気に入りを削除する
  const removeFavorite = (cardId: string) => {
    const updatedFavorites = favorites.filter((item) => item.id !== cardId);
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

// カスタムフックで Context を扱いやすく
export const useFavorites = () => {
  const context = useContext(FavoritesContext);
  if (!context) {
    throw new Error("useFavorites must be used within a FavoritesProvider");
  }
  return context;
};
