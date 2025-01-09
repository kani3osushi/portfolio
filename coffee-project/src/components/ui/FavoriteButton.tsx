"use client";
import { useFavorites } from "@/store/FavoritesContext";
import React from "react";
// ↑ ここのパスは実際の配置に合わせて修正してください

interface CardProps {
  className: string;
  slug: string;
}

const FavoriteButton: React.FC<CardProps> = ({ className, slug }) => {
  const { favorites, addFavorite, removeFavorite } = useFavorites();

  // いまのお気に入り一覧に slug（＝id）が含まれているかどうか
  const isFavorite = favorites.some((item) => item.id === slug);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation(); // 親要素へのイベント伝播を停止
    event.preventDefault(); // Link のデフォルトの遷移を停止

    if (isFavorite) {
      removeFavorite(slug);
    } else {
      // name や他の情報を本来は持たせる
      addFavorite({ id: slug, name: slug });
    }
  };

  return (
    <p className={className}>
      <button onClick={handleClick}>
        {isFavorite ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="red"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="#b71c1c"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 
                 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 
                 4.5 2.09C13.09 3.81 14.76 3 16.5 3 
                 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 
                 11.54L12 21.35z"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="#b71c1c"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 
                 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 
                 4.5 2.09C13.09 3.81 14.76 3 16.5 3 
                 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 
                 11.54L12 21.35z"
            />
          </svg>
        )}
      </button>
    </p>
  );
};

export default FavoriteButton;
