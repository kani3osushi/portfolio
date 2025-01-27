"use client";
import React from "react";
import { useFavorites } from "@/store/FavoritesContext";
// import Card from "./ui/Card";

function FavoritesClient() {
  const { favorites } = useFavorites();

  return (
    <ul>
      {favorites.length === 0 ? (
        <li>お気に入りがありません。</li>
      ) : (
        favorites.map((id) => (
          <li key={id}>
            {id}
            {/* <Card /> */}
          </li>
        ))
      )}
    </ul>
  );
}

export default FavoritesClient;
