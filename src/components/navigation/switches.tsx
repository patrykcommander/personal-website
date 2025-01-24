"use client";

import React, { useState } from "react";
import { Settings } from "lucide-react";
import clsx from "clsx";

interface SwitchesProps {
  children: React.ReactNode;
}

export default function Switches({ children }: SwitchesProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative"> 
      <div
        className="flex flex-row justify-center items-center w-[64px] h-[48px] border-2 border-black dark:border-white hover:cursor-pointer transition-colors ease-linear hover:bg-light-background dark:hover:bg-dark-secondary"
        style={{ borderRadius: "36px" }}
        onClick={() => setIsOpen(!isOpen)}
      >
        <Settings />
      </div>
      <div
        className={clsx(
          "absolute flex flex-col min-w-[64px] items-end gap-4 top-14 -left-[64px] bg-light-background dark:bg-black text-white p-4 rounded-md shadow-lg transition-opacity duration-300 border-2 dark:border-white",
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        )}
      >
        {children}
      </div>
    </div>
  );
}
