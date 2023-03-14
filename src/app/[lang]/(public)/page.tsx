import { getDictionary } from "../../../get-dictionary";
import { Locale } from "@i18n-config";
import HomeCover from "@images/home-cover.png";
import Button from "@ui/button";
import clsx from "clsx";
import Image from "next/image";

export default async function IndexPage({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const t = await getDictionary(lang);
  const numbers = [
    {
      count: "100%",
      name: t.usefully,
    },
    {
      count: "40+",
      name: t.services,
    },
    {
      count: "4K+",
      name: t.client,
    },
  ];
  return (
    <section>
      <section className="relative h-[557px] ]">
        <Image src={HomeCover} alt="cover" className="h-[557px] w-full" />
        <div className="absolute -translate-y-1/2 top-1/2 rtl:right-[120] ltr:left-[120px] flex flex-col gap-4">
          <h1 className="text-5xl text-primary-100">Mohamed Rezk</h1>
          <h1 className="text-5xl font-bold">Chartered Accountant in</h1>
          <h1 className="text-5xl font-bold">Egypt & Dubai</h1>
          <Button primary rounded={false}>
            Get in touch with us
          </Button>
        </div>
      </section>

      <section className="flex w-full justify-center pt-14 ">
        {numbers.map(({ name, count }, index) => (
          <div
            key={name}
            className={clsx(
              "ltr:border-l rtl:border-r border-[#EAECF0] px-14 text-center",
              {
                "border-none": index === 0,
              }
            )}
          >
            <h2 className="text-primary-100 text-6xl font-semibold">{count}</h2>
            <span className="text-lg">{name}</span>
          </div>
        ))}
      </section>
    </section>
  );
}
