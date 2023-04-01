import { Button } from "@ui/atom";
import HomeCover from "@image/home-cover.png";
import React from "react";
import IntroSection from "../../main-intro-section";
import useTranslation from "next-translate/useTranslation";

export default function HomeIntro() {
  const { t } = useTranslation("common");
  return (
    <IntroSection image={HomeCover}>
      <div className="flex flex-col absolute top-1/2 ltr:left-0 rtl:right-0 md:px-[120px] -translate-y-1/2 gap-6">
        <h1 className="text-5xl text-primary-100">{t("name")}</h1>
        <h1
          className="text-5xl font-bold leading-[55px]"
          dangerouslySetInnerHTML={{ __html: t("home_intro_text") }}
        />
        <Button className="!bg-dark-100">{t("get_in_touch")}</Button>
      </div>
    </IntroSection>
  );
}
