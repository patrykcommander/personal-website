import React from "react";
import Image from "next/image";
import clsx from "clsx";
import { useTranslations } from "next-intl";
import { Quantico } from "next/font/google";
import SocialLink from "@/components/ui/social-link";
import FooterNav from "./footer-nav";

const quantico = Quantico({ weight: "700", subsets: ["latin"] });

export default function Footer() {
  const t = useTranslations("footer");

  return (
    <div className="flex flex-col items-center justify-center w-full border-t-2 border-black dark:border-white bg-light-primary dark:bg-gradient-to-t dark:from-dark-accent dark:to-dark-background">
      <div className="flex flex-col items-center justify-center max-w-[1400px] w-full lg:w-8/12 h-full gap-4 p-8">
        <div className="flex md:flex-row flex-col items-center justify-center gap-2 md:gap-8">
          <div className={clsx(quantico.className)}>
            <p className="text-4xl uppercase font-semibold text-nowrap">
              <i>{t("reachOut")}</i>
            </p>
          </div>
          <div className="flex flex-row justify-between gap-2">
            <SocialLink href="https://www.linkedin.com/in/patryk-orkisz-99786b1a2/">
              <Image
                className="dark:invert"
                src="/linkedin.svg"
                alt="linkedin_logo"
                width={24}
                height={24}
              />
            </SocialLink>
            <SocialLink href="https://github.com/patrykcommander">
              <Image
                className="dark:invert"
                src="/github.svg"
                alt="github_logo"
                width={24}
                height={24}
              />
            </SocialLink>
            <SocialLink href="https://www.instagram.com/patrykorkisz00/">
              <Image
                className="dark:invert"
                src="/instagram.svg"
                alt="instagram_logo"
                width={24}
                height={24}
              />
            </SocialLink>
          </div>
        </div>
        <FooterNav />
      </div>
    </div>
  );
}
