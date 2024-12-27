"use client";

import CustomLink from "./custom-link";
import React from "react";
import Link from "next/link";

export function MainNav({ className }: { className?: string }) {
  return (
    <nav className={`flex gap-4 items-center ${className}`}>
      <CustomLink href="/">HOME</CustomLink>
      <Link href="./techbeans">TechBeans</Link>
      <Link href="./favorites">Favorites</Link>
    </nav>
  );
}
