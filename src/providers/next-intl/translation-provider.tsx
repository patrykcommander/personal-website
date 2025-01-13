import React, { ReactNode } from "react";
import { NextIntlClientProvider, useMessages } from "next-intl";
import { pick } from "lodash";

const TranslationProvider: React.FC<{
  children: ReactNode;
  section: string;
}> = ({ children, section }) => {
  const messages = useMessages();

  return (
    <NextIntlClientProvider messages={pick(messages, section)}>
      {children}
    </NextIntlClientProvider>
  );
};

export default TranslationProvider;
