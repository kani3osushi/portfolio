import { MainNav } from "./main-nav";
import UserButton from "./user-button";
import { merriweather } from "@/app/layout"; // Import the merriweather font configuration

export default function Header() {
  return (
    <header className="sticky flex justify-center">
      <div className="flex items-center justify-between w-full h-16 px-4 mx-auto sm:px-6">
        <MainNav className={merriweather.className} />
        <UserButton />
      </div>
    </header>
  );
}
