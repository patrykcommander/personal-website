import React from "react";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { setRequestLocale } from "next-intl/server";
import Navbar from "@/components/navigation/navbar";
import Footer from "@/components/footer/footer";
import { CustomThemeProvider } from "@/providers/theme/theme-provider";

interface Props {
  children: React.ReactNode;
  params: {
    locale: string;
  };
}

export default async function layout({ children, params }: Props) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as string)) {
    notFound();
  }

  setRequestLocale(locale);

  return (
    <html suppressHydrationWarning lang={locale}>
      <CustomThemeProvider>
        <body className="flex flex-col w-full bg-light-background dark:bg-dark-background">
          <div className="flex flex-col w-full bg-light-background dark:bg-dark-background min-h-screen">
            <Navbar locale={locale} />
            <main className="flex flex-col w-full h-full items-center justify-center py-4 sm:py-0 flex-1">
              {children}
            </main>
          </div>
          <Footer />
        </body>
      </CustomThemeProvider>
    </html>
  );
}
