// "use client";
// import { CardProps } from "@/type";
// import React, { useEffect, useState } from "react";

// const FavoriteButton: React.FC<Pick<CardProps, "slug">> = ({ slug }) => {
//   const [isFavorite, setIsFavorite] = useState<boolean>(false);

//   // ローカルストレージからお気に入り状態を取得
//   useEffect(() => {
//     const savedFavorites = localStorage.getItem("favorites");
//     if (savedFavorites) {
//       const favoritesArray = JSON.parse(savedFavorites) as string[];
//       setIsFavorite(favoritesArray.includes(slug));
//     }
//   }, [slug]);

//   // お気に入り状態を切り替える
//   const toggleFavorite = (event: React.MouseEvent<HTMLButtonElement>) => {
//     event.stopPropagation(); // 親要素へのイベント伝播を停止
//     event.preventDefault(); // Link のデフォルトのページ遷移を停止
//     setIsFavorite((prev) => !prev);

//     const savedFavorites = localStorage.getItem("favorites");
//     let favoritesArray: string[] = savedFavorites
//       ? JSON.parse(savedFavorites)
//       : [];

//     if (favoritesArray.includes(slug)) {
//       // すでにお気に入りの場合は削除
//       favoritesArray = favoritesArray.filter((item) => item !== slug);
//     } else {
//       // お気に入りに追加
//       favoritesArray.push(slug);
//     }

//     localStorage.setItem("favorites", JSON.stringify(favoritesArray));
//   };
//   return (
//     <p className="">
//       <button className="" onClick={toggleFavorite}>
//         {isFavorite ? (
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             fill="red"
//             viewBox="0 0 24 24"
//             strokeWidth={1.5}
//             stroke="#b71c1c"
//             className="w-6 h-6"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
//             />
//           </svg>
//         ) : (
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             fill="none"
//             viewBox="0 0 24 24"
//             strokeWidth={1.5}
//             stroke="#b71c1c"
//             className="w-6 h-6"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
//             />
//           </svg>
//         )}
//       </button>
//     </p>
//   );
// };

// export default FavoriteButton;
