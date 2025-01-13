import { redirect } from "@/i18n/routing";

export default function Home() {
  return redirect({
    href: "/home",
    locale: "pl",
  });
}
