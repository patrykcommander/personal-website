"use client";

import React from "react";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { clsx } from "clsx";

export default function ThemeSwitcher() {
  const { setTheme, resolvedTheme } = useTheme();

  const outlineColor = resolvedTheme === "light" ? "black" : "white";

  return (
    <div
      className={clsx(
        "relative flex items-center gap-8 px-4 py-2 border-2 w-[120px]",
        resolvedTheme === "light" ? "border-light-foreground" : "border-white"
      )}
      style={{
        borderRadius: "24px",
      }}
    >
      <div
        className={`absolute top-0 left-0 w-1/2 h-full bg-light-secondary transition-transform duration-300 border-2 border-light-primary dark:border-dark-background ${
          resolvedTheme === "dark" ? "translate-x-full" : "translate-x-0"
        }`}
        style={{
          borderRadius: "24px",
        }}
      ></div>
      <div
        className="flex w-full h-full hover:cursor-pointer items-center justify-center z-10"
        onClick={() => setTheme("light")}
      >
        <Sun color={outlineColor} height={24} />
      </div>
      <div
        className="flex w-full h-full hover:cursor-pointer items-center justify-center z-10"
        onClick={() => setTheme("dark")}
      >
        <Moon color={outlineColor} height={24} />
      </div>
    </div>
  );
}
