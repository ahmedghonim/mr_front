import "@styles/globals.css";
import NavBar from "@pages-components/public/layout/nav-bar";
import { Locale, i18n } from "@i18n";
import { getDictionary } from "../../../get-dictionary";

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}

export default async function PublicLayout({
  children,
  params: { lang },
}: {
  children: React.ReactNode;
  params: { lang: Locale };
}) {
  const t = await getDictionary(lang);
  return (
    <html>
      <head />
      <body>
        <NavBar t={t} />
        <main>{children}</main>
      </body>
    </html>
  );
}
