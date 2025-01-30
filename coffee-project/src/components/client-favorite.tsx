"use client";
import React from "react";
import { useFavorites } from "@/store/FavoritesContext";

function FavoritesClient() {
  const { favorites } = useFavorites();

  return (
    <ul>
      {favorites.length === 0 ? (
        <li>お気に入りがありません。</li>
      ) : (
        favorites.map((id) => (
          <li key={id}>{id}</li>
          // <CardItem key={id} />
        ))
      )}
    </ul>
  );
}

export default FavoritesClient;
