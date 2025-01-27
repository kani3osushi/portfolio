"use client";
import { useFavorites } from "@/store/FavoritesContext";
import React from "react";

function FavoritesClient() {
  const { favorites } = useFavorites();

  return (
    <ul>
      {favorites.length === 0 ? (
        <li>お気に入りがありません。</li>
      ) : (
        favorites.map((card) => <li key={card.slug}>{card.slug}</li>)
      )}
    </ul>
  );
}

export default FavoritesClient;
