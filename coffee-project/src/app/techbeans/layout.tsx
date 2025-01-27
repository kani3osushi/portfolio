import { FavoritesProvider } from "@/store/FavoritesContext";

export default function TechbeansLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <FavoritesProvider>{children}</FavoritesProvider>;
}
