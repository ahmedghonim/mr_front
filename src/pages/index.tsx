import HomeCover from "@image/home-cover.png";
import clsx from "clsx";
import Image from "next/image";
import useTranslation from "next-translate/useTranslation";
import { Button } from "@ui/atom";

export default function IndexPage() {
  const { t } = useTranslation("common");
  const numbers = [
    {
      count: "100%",
      name: t("usefully"),
    },
    {
      count: "40+",
      name: t("services"),
    },
    {
      count: "4K+",
      name: t("client"),
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
          <Button style="primary">Get in touch with us</Button>
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
