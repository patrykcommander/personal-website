"use client";

import React, { useTransition } from "react";
import { useParams } from "next/navigation";
import { Locale, usePathname, useRouter } from "@/i18n/routing";
import {
  Select,
  SelectContent,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Globe } from "lucide-react";
import { useTheme } from "next-themes";

interface LocaleSwitcherProps {
  children: React.ReactNode;
  defaultValue: string;
}

export default function LocaleSwitcherSelect({
  children,
  defaultValue,
}: LocaleSwitcherProps) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const pathname = usePathname();
  const params = useParams();
  const theme = useTheme();

  function onSelectChange(locale: string) {
    const nextLocale = locale as Locale;
    startTransition(() => {
      router.replace(
        // @ts-expect-error -- TypeScript will validate that only known `params`
        // are used in combination with a given `pathname`. Since the two will
        // always match for the current route, we can skip runtime checks.
        { pathname, params },
        { locale: nextLocale }
      );
    });
  }

  return (
    <div className="flex flex-row items-center gap-2">
      <Globe color={theme.resolvedTheme !== "dark" ? "black" : "white"} />
      <Select
        disabled={isPending}
        defaultValue={defaultValue}
        onValueChange={onSelectChange}
      >
        <SelectTrigger className="w-[120px] border-2 border-black text-black dark:border-white dark:text-white bg-light-background dark:bg-dark-background">
          <SelectValue placeholder="Language" />
        </SelectTrigger>
        <SelectContent>{children}</SelectContent>
      </Select>
    </div>
  );
}
