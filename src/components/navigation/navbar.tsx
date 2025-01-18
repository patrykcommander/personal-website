import React from "react";
import { useTranslations } from "next-intl";
import { Quantico } from "next/font/google";
import Navlink from "@/components/navigation/navlink";
import ThemeSwitcher from "@/components/theme-switcher";
import LocaleSwitcher from "@/components/locale-switcher";
import MobileNav from "./mobile-nav";
import { NAV_OPTIONS } from "@/config/nav-options";
import Switches from "./switches";

const quantico = Quantico({ weight: "700", subsets: ["latin"] });

const Navbar = ({ locale }: { locale: string }) => {
  const t = useTranslations("navigation");

  return (
    <div className="flex justify-center w-full bg-light-primary dark:bg-dark-background border-b-2 border-black dark:border-white p-4">
      <MobileNav>
        <div className="flex flex-row justify-around w-full">
          <div className="flex flex-col gap-2">
            {NAV_OPTIONS.map((option, index) => (
              <Navlink
                key={index}
                href={option.href}
                locale={locale}
                customClass="text-lg uppercase text"
              >
                {t(option.label)}
              </Navlink>
            ))}
          </div>
          <div className="flex flex-col justify-around items-end h-auto">
            <ThemeSwitcher />
            <LocaleSwitcher locale={locale} />
          </div>
        </div>
      </MobileNav>
      <div className="items-center justify-around text-lg w-full max-w-[1920px] hidden lg:flex px-8">
        <div className={quantico.className}>
          <p className="uppercase text-2xl">
            <i>Orkisz</i>
          </p>
        </div>
        <div className="flex flex-row justify-evenly w-[640px]">
          {NAV_OPTIONS.map((option, index) => (
            <Navlink key={index} locale={locale} href={option.href}>
              {t(`${option.label}`)}
            </Navlink>
          ))}
        </div>
        <Switches>
          <ThemeSwitcher />
          <LocaleSwitcher locale={locale} />
        </Switches>
      </div>
    </div>
  );
};

export default Navbar;
