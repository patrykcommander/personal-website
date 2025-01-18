import React from "react";
import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { Quantico } from "next/font/google";

const quantico = Quantico({
  weight: "700",
  subsets: ["latin"],
  style: ["normal", "italic"],
});

export default async function page() {
  const t = await getTranslations("about");

  return (
    <div className="flex items-center justify-center h-full gap-12 w-full lg:w-8/12 py-4 px-8 text-light-foreground dark:text-dark-foreground">
      <div className="flex flex-col lg:flex-row justify-center lg:gap-12 gap-4 max-w-[1400px]">
        <div className="flex flex-col text-2xl font-semibold gap-8 w-full lg:w-1/2 order-2 lg:order-none">
          <div className="flex flex-row flex-wrap gap-2">
            <i>
              {t("hi")} {t("myNameIs")}
            </i>
            <i
              className={`${quantico.className} border-b-2 border-dark-secondary text-dark-secondary italic`}
            >
              Patryk Orkisz
            </i>
          </div>
          <div className="flex flex-col gap-2">
            <i>{t("shortDescription")}</i>
          </div>
          <div className="text-base dark:text-dark-white text-justify">
            <p>{t("overview")}</p>
          </div>
        </div>
        <div className="relative flex items-center justify-center w-full lg:w-[350px] h-[350px] order-1 lg:order-none">
          <Image
            src="/profile_photo.png"
            alt="profile_picture"
            unoptimized
            style={{
              objectFit: "contain",
              objectPosition: "center",
              borderRadius: "100%",
            }}
            fill
          />
        </div>
      </div>
    </div>
  );
}
