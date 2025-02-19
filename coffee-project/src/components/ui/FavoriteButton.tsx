"use client";

import React, { useState, useEffect } from "react";
import { useSession } from "next-auth/react";

const FavoriteButton: React.FC<{ slug: string }> = ({ slug }) => {
  const { data: session } = useSession();
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    // セッションがある場合はサーバーから、ない場合はローカルストレージから
    if (session) {
      // サーバーからお気に入り情報を取得
    } else {
      const localFavorites = JSON.parse(
        localStorage.getItem("favorites") ?? "[]"
      );
      setIsFavorite(localFavorites.includes(slug));
    }
  }, [slug, session]);

  const toggleFavorite = async (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    event.stopPropagation();

    if (session) {
      // サーバーサイドの処理
    } else {
      // ローカルストレージの処理
      const localFavorites = JSON.parse(
        localStorage.getItem("favorites") ?? "[]"
      );
      const newFavorites = isFavorite
        ? localFavorites.filter((item: string) => item !== slug)
        : [...localFavorites, slug];
      
      localStorage.setItem("favorites", JSON.stringify(newFavorites));
      setIsFavorite(!isFavorite);
    }
  };

  return <button onClick={toggleFavorite}>{isFavorite ? "❤️" : "🤍"}</button>;
};

export default FavoriteButton;