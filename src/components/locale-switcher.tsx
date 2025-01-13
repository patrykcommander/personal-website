"use client";

import React from "react";
import { usePathname, useRouter } from "next/navigation";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Globe } from "lucide-react";
import { LocaleDict } from "@/types";

interface LocaleSwitcherProps {
  locales: string[];
  currentLocale: string;
  localeDict: LocaleDict;
}

export default function LocaleSwitcher({
  locales,
  currentLocale,
  localeDict,
}: LocaleSwitcherProps) {
  const pathname = usePathname();
  const router = useRouter();

  const strippedPathname =
    pathname
      .split("/")
      .filter((segment, index) => {
        if (index === 1) {
          return !locales.includes(segment);
        }
        return true;
      })
      .join("/") || "/";

  return (
    <div className="flex flex-row gap-2 items-center">
      <Globe />
      <Select
        defaultValue={currentLocale}
        onValueChange={(locale) =>
          router.push(`/${locale}/${strippedPathname}`)
        }
      >
        <SelectTrigger className="w-[120px] border-2">
          <SelectValue placeholder="Language" />
        </SelectTrigger>
        <SelectContent>
          {locales.map((locale, index) => (
            <SelectItem value={locale} key={index}>
              {localeDict[locale]}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}
