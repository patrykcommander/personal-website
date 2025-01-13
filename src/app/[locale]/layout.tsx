import React from "react";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import Navbar from "@/components/navigation/navbar";
import { CustomThemeProvider } from "@/providers/theme/theme-provider";

interface Props {
  children: React.ReactNode;
  params: {
    locale: string;
  };
}

export default async function layout({ children, params }: Props) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  return (
    <html suppressHydrationWarning lang={locale} className="overflow-scroll">
      <CustomThemeProvider>
        <body className="flex flex-col w-full bg-light-background dark:bg-dark-background">
          <Navbar locale={locale} />
          <main className="flex flex-col w-full h-full items-center justify-center">
            {children}
          </main>
        </body>
      </CustomThemeProvider>
    </html>
  );
}
