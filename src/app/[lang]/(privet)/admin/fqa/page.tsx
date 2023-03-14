import { getDictionary } from "@get-dictionary";
import { Locale } from "@i18n-config";
import AboutForm from "./form";

export default async function IndexPage({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const t = await getDictionary(lang);

  return (
    <div>
      <AboutForm t={t} />
    </div>
  );
}
