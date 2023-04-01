import { Button, Text } from "@ui/atom";
import useTranslation from "next-translate/useTranslation";
import React from "react";
import Logo from "@svg/larg-text-logo.svg";

export default function AboutUS() {
  const { t } = useTranslation("common");
  return (
    <div className="flex justify-between items-center md:px-[120px] md:pt-[68px]">
      <div className="w-[60%]">
        <div className="mb-3 flex flex-col gap-2">
          <Text as="p" className="!text-start leading-8 font-Lato text-[21px]">
            - {t("about_us_1")}
          </Text>
          <Text as="p" className="!text-start leading-8 font-Lato text-[21px]">
            - {t("about_us_2")}
          </Text>
          <Text as="p" className="!text-start leading-8 font-Lato text-[21px]">
            - {t("about_us_3")}
          </Text>
          <Text as="p" className="!text-start leading-8 font-Lato text-[21px]">
            - {t("about_us_4")}
          </Text>
        </div>
        <Button className="!bg-dark-100">{t("read_more")}</Button>
      </div>
      <div className="w-fit">
        <Logo />
      </div>
    </div>
  );
}
