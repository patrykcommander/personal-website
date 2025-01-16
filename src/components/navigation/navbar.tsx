import React from "react";
import { getTranslations } from "next-intl/server";
import Navlink from "@/components/navigation/navlink";
import ThemeSwitcher from "@/components/theme-switcher";
import LocaleSwitcher from "@/components/locale-switcher";
import { Quantico } from "next/font/google";
import { NAV_OPTIONS } from "@/config/nav-options";
import { LOCALE_TO_LANGUAGE, LOCALES } from "@/config/locales";

const quantico = Quantico({ weight: "700", subsets: ["latin"] });

interface NavbarProps {
  locale: string;
}

export default async function Navbar({ locale }: NavbarProps) {
  const t = await getTranslations("navigation");

  return (
    <div className="flex justify-center w-full bg-light-primary dark:bg-dark-background dark:border-b-2 px-4">
      <div className="flex items-center justify-around py-4 text-lg w-full max-w-[1920px]">
        <div className={quantico.className}>
          <p className="uppercase text-2xl">
            <i>Orkisz</i>
          </p>
        </div>
        <div className="flex flex-row justify-evenly w-[480px]">
          {NAV_OPTIONS.map((option, index) => (
            <Navlink key={index} locale={locale} href={option.href}>
              {t(`${option.label}`)}
            </Navlink>
          ))}
        </div>
        <div className="flex flex-row gap-4 items-center justify-center">
          <ThemeSwitcher />
          <LocaleSwitcher
            locales={LOCALES}
            currentLocale={locale}
            localeDict={LOCALE_TO_LANGUAGE}
          />
        </div>
      </div>
    </div>
  );
}
