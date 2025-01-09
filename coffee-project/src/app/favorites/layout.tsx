import { FavoritesProvider } from "@/store/FavoritesContext";

export default function FavoriteLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <FavoritesProvider>{children}</FavoritesProvider>;
}
