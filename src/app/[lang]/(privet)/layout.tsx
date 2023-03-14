import { getDictionary } from "../../../get-dictionary";
import { Locale } from "@i18n";
import AdminHeader from "@pages-components/privet/layout/admin-header";
import SideBar from "@pages-components/privet/layout/side-bar";
import Providers from "app/redux/provider";

export default async function DashboardLayout({
  children,
  params: { lang },
}: {
  children: React.ReactNode;
  params: { lang: Locale };
}) {
  const t = await getDictionary(lang);

  return (
    <html lang={lang} dir={lang === "ar" ? "rtl" : "ltr"}>
      <body dir={lang === "ar" ? "rtl" : "ltr"} className="flex flex-row gap-8">
        <SideBar t={t} />
        <main className=" flex flex-col gap-6 py-12 pe-9 overflow-y-auto">
          <AdminHeader t={t} />
          <Providers>{children}</Providers>
        </main>
      </body>
    </html>
  );
}
