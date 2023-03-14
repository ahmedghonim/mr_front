import { i18n } from "../i18n-config";
import "@styles/globals.css";
import { ParentPage } from "@util/page-type";

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}

export default function Root({ children, params }: ParentPage) {
  return (
    <html lang={params.lang}>
      <body>{children}</body>
    </html>
  );
}
