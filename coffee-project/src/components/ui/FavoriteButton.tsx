"use client";
import React from "react";
import { useFavorites } from "@/store/FavoritesContext";

const FavoriteButton: React.FC<{ slug: string }> = ({ slug }) => {
  const { favorites, addFavorite, removeFavorite } = useFavorites();
  const isFavorite = favorites.includes(slug);

  const toggleFavorite = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    event.stopPropagation();
    if (isFavorite) {
      removeFavorite(slug);
    } else {
      addFavorite(slug);
    }
  };

  return <button onClick={toggleFavorite}>{isFavorite ? "❤️" : "🤍"}</button>;
};

export default FavoriteButton;
