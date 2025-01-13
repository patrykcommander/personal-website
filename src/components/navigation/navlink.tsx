"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

interface NavlinkProps {
  children: React.ReactNode;
  locale: string;
  href: string;
}

export default function Navlink({ children, locale, href }: NavlinkProps) {
  const pathname = usePathname();

  let isActive = false;
  if (pathname.includes(href)) {
    isActive = true;
  }

  if (href === "/" && pathname.length === 3) {
    isActive = true;
  } else if (href === "/" && pathname.length !== 3) {
    isActive = false;
  }

  return (
    <div>
      <Link
        className={clsx(
          "font-semibold py-1 w-full",
          isActive
            ? "border-b-2 dark:border-dark-secondary dark:text-dark-secondary border-light-foreground text-light-foreground"
            : "border-b-0 text-dark-foreground"
        )}
        href={`/${locale}/${href}`}
      >
        {children}
      </Link>
    </div>
  );
}
