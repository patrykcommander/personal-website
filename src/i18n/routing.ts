import { defineRouting } from "next-intl/routing";
import { createNavigation } from "next-intl/navigation";
import { LOCALES } from "@/config/locales";

export const routing = defineRouting({
  // A list of all locales that are supported
  locales: LOCALES,

  // Used when no locale matches
  defaultLocale: "pl",
});

export type Locale = (typeof routing.locales)[number];

// Lightweight wrappers around Next.js' navigation APIs
// that will consider the routing configuration
export const { Link, redirect, usePathname, useRouter, getPathname } =
  createNavigation(routing);
