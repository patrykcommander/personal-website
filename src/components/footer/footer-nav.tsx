import React from "react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { NAV_OPTIONS } from "@/config/nav-options";

export default function FooterNav() {
  const t = useTranslations("navigation");

  return (
    <div className="flex flex-row flex-wrap items-center gap-2">
      {NAV_OPTIONS.map((option, index) => (
        <React.Fragment key={index}>
          <Link
            className="group relative hover:cursor-pointer"
            href={option.href}
          >
            <p
              className="text-lg font-semibold text-black dark:text-white relative after:content-[''] after:block after:mx-auto after:h-[2px] after:w-0 after:bg-transparent after:transition-all after:duration-300 hover:after:w-full dark:hover:after:bg-white hover:after:bg-black"
              key={index}
            >
              {t(option.label)}
            </p>
          </Link>
          {index !== NAV_OPTIONS.length - 1 && <p className="text-lg">|</p>}
        </React.Fragment>
      ))}
    </div>
  );
}
