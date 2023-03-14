import { getDictionary } from "@get-dictionary";
import { Locale } from "@i18n-config";
import Modal from "@ui/modal";
import FormData from "./form";

export default async function IndexPage({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const t = await getDictionary(lang);
  return (
    <div>
      <div className="flex justify-end w-full">
        <Modal
          label={`${t.add} ${t["our-industries"]}`}
          children={<FormData t={t} />}
        />
      </div>
    </div>
  );
}
