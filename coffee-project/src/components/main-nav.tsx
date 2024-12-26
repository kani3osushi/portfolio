"use client";

import CustomLink from "./custom-link";
import React from "react";
import Link from "next/link";

export function MainNav() {
  return (
    <div className="flex gap-4 items-center">
      <CustomLink href="/">HOME</CustomLink>
      <Link href="./techbeans">TechBeans</Link>
    </div>
  );
}
