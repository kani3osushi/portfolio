import { MainNav } from "./main-nav";
import UserButton from "./user-button";
import { merriweather } from "@/app/layout"; // Import the merriweather font configuration

export default function Header() {
  return (
    <header className="sticky flex justify-center w-full max-w-7xl mx-auto z-10">
      <div className="flex items-center justify-between w-full h-24 mx-auto">
        <MainNav className={merriweather.className} />
        <UserButton />
      </div>
    </header>
  );
}
