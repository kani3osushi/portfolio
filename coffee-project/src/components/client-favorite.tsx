"use client";
import React from "react";

function FavoritesClient() {
  return (
    <ul>
      <li>お気に入りがありません。</li>
      {/* {favorites.length === 0 ? (
        <li>お気に入りがありません。</li>
      ) : (
        favorites.map((id) => (
          <li key={id}>{id}</li>
          // <CardItem key={id} />
        ))
      )} */}
    </ul>
  );
}

export default FavoritesClient;
