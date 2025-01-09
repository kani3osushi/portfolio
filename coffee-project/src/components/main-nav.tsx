import CustomLink from "./custom-link";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { notoJP } from "@/app/layout";

export function MainNav({ className }: { className?: string }) {
  return (
    <nav
      className={`flex gap-16 items-center ${notoJP.className} ${className}`}
    >
      <CustomLink
        href="/"
        className={`font-bold flex items-center gap-2 text-xl leading-none ${notoJP.className}`}
      >
        <Image src="/logo.png" alt="DevBeans" width={50} height={50} />
        DevBeans
      </CustomLink>
      <Link
        href="/techbeans"
        className={`font-bold leading-relaxed ${notoJP.className}`}
      >
        TechBeans
      </Link>
      <Link href="/favorites" className={`font-bold ${notoJP.className}`}>
        Favorites
      </Link>
    </nav>
  );
}
