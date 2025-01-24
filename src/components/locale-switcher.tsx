import { useTranslations } from "next-intl";
import { routing } from "@/i18n/routing";
import LocaleSwitcherSelect from "./locale-switcher-select";
import { SelectItem } from "@/components/ui/select";

export default function LocaleSwitcher({ locale }: { locale: string }) {
  const t = useTranslations("localeSwitcher");

  return (
    <LocaleSwitcherSelect defaultValue={locale}>
      {routing.locales.map((cur) => (
        <SelectItem key={cur} value={cur}>
          {t(`${cur}`)}
        </SelectItem>
      ))}
    </LocaleSwitcherSelect>
  );
}
