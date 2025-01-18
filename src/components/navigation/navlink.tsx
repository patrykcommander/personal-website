"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

interface NavlinkProps {
  children: React.ReactNode;
  locale: string;
  href: string;
  customClass?: string;
}

export default function Navlink({
  children,
  locale,
  href,
  customClass,
}: NavlinkProps) {
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

  const classString = clsx(
    "font-semibold py-1 w-full",
    isActive
      ? "border-b-2 dark:border-dark-secondary dark:text-dark-secondary border-black text-black"
      : "border-b-0 text-white",
    customClass
  );

  return (
    <div>
      <Link className={classString} href={`/${locale}/${href}`}>
        {children}
      </Link>
    </div>
  );
}
