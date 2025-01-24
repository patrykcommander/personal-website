"use client";

import React, { useState } from "react";
import { ChevronUp, Ellipsis } from "lucide-react";
import { Quantico } from "next/font/google";

const quantico = Quantico({ weight: "700", subsets: ["latin"] });

interface MobileNavProps {
  children: React.ReactNode;
}

export default function MobileNav({ children }: MobileNavProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div className="flex w-full items-center justify-around lg:hidden z-10 bg-light-primary dark:bg-dark-background border-black">
      <div className={quantico.className}>
        <p className="uppercase text-2xl">
          <i>Orkisz</i>
        </p>
      </div>
      <Ellipsis
        className="border-2 border-black p-2 w-10 h-10 rounded-lg dark:border-white"
        width={24}
        height={24}
        onClick={() => setIsOpen(!isOpen)}
      />
      <div
        className={`fixed flex w-full items-center justify-center transition-transform duration-500 ease-in-out top-0 pt-4 pb-2 border-black border-b-2 bg-light-primary bg-gradient-to-b dark:from-dark-background dark:to-dark-accent dark:border-b-white ${
          isOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="flex flex-col items-center gap-2 w-full">
          {children}
          <ChevronUp
            width={36}
            height={36}
            onClick={() => {
              setIsOpen(false);
            }}
          />
        </div>
      </div>
    </div>
  );
}
