import { Text } from "@ui/atom";
import clsx from "clsx";
import useTranslation from "next-translate/useTranslation";
import Image from "next/image";
import React from "react";

export interface ServesViewProps {
  src: string;
  title: string;
  desc: string;
  revers?: boolean;
}

function ServesView({ revers, src, title, desc }: ServesViewProps) {
  const { lang } = useTranslation();
  return (
    <div
      className={clsx("flex gap-9 md:flex-row flex-col", {
        "md:flex-row-reverse": revers,
      })}
    >
      <Image
        src={src}
        width={479}
        height={383}
        alt="name"
        className={clsx(
          "md:max-w-[479px] md:max-h-[383px] w-full h-full",
          {
            "rounded-tr-[45px] rounded-bl-[60%]": lang === "en",
          },
          {
            "rounded-tl-[45px] rounded-br-[60%]": lang === "ar",
          }
        )}
      />

      <div className="flex flex-col md:items-start gap-4  w-full">
        <Text
          as="h2"
          size="heading"
          font="bold"
          className="text-3xl font-bold w-full"
        >
          {title}
        </Text>
        <Text as="p" size="md" className="text-start w-full">
          {desc}
        </Text>
      </div>
    </div>
  );
}

export default ServesView;
