import React from "react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { NAV_OPTIONS } from "@/config/nav-options";

export default function FooterNav() {
  const t = useTranslations("navigation");

  return (
    <div className="flex flex-row flex-wrap items-center gap-2">
      {NAV_OPTIONS.map((option, index) => (
        <>
          <Link
            className="group relative hover:cursor-pointer"
            href={option.href}
          >
            <p
              className="text-lg font-semibold text-black dark:text-white relative after:absolute after:content-[''] after:-bottom-1 after:left-1/2 after:transform after:-translate-x-1/2 after:scale-x-0 after:origin-center after:w-full after:h-0.5 after:dark:bg-white after:bg-black after:transition-transform after:duration-300 group-hover:after:scale-x-100"
              key={index}
            >
              {t(option.label)}
            </p>
          </Link>
          {index !== NAV_OPTIONS.length - 1 && <p className="text-lg">|</p>}
        </>
      ))}
    </div>
  );
}
