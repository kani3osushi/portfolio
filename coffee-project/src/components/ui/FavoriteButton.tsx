"use client";
import React, { useState, useEffect } from "react";

function isLoggedIn() {
  // クッキーやセッションストレージからトークンチェック
  // or フロント側でユーザーIDを保持しているか判定 etc.
  return Boolean(localStorage.getItem("accessToken"));
}

const FavoriteButton: React.FC<{ slug: string }> = ({ slug }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    // 初期化(ログインしてるかどうかで読み込み先を分岐)
    if (isLoggedIn()) {
      // サーバーからお気に入り情報をfetchしてセットする
    } else {
      // ローカルストレージからお気に入りを読み込み
      const localFavorites = JSON.parse(
        localStorage.getItem("favorites") ?? "[]"
      );
      setIsFavorite(localFavorites.includes(slug));
    }
  }, [slug]);

  const toggleFavorite = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    event.stopPropagation();

    if (isLoggedIn()) {
      // サーバーに POST or DELETE
      if (isFavorite) {
        fetch("/api/favorite/remove", {
          method: "POST",
          body: JSON.stringify({ slug }),
        });
      } else {
        fetch("/api/favorite/add", {
          method: "POST",
          body: JSON.stringify({ slug }),
        });
      }
    } else {
      // ローカルストレージに書き込み
      let localFavorites = JSON.parse(
        localStorage.getItem("favorites") ?? "[]"
      );
      if (isFavorite) {
        localFavorites = localFavorites.filter((item: string) => item !== slug);
      } else {
        localFavorites.push(slug);
      }
      localStorage.setItem("favorites", JSON.stringify(localFavorites));
    }

    setIsFavorite(!isFavorite);
  };

  return <button onClick={toggleFavorite}>{isFavorite ? "❤️" : "🤍"}</button>;
};

export default FavoriteButton;
