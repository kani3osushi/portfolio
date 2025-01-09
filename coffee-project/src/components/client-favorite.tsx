"use client";
import { useFavorites } from "@/store/FavoritesContext";
import React from "react";

function FavoritesClient() {
  const { favorites } = useFavorites();

  return (
    <ul>
      {favorites.map((card) => (
        <li key={card.id}>{card.name}</li>
      ))}
    </ul>
  );
}

export default FavoritesClient;
