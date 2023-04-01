import { Button, Text } from "@ui/atom";
import HomeCover from "@image/home-cover.png";
import React from "react";
import IntroSection from "../../main-intro-section";
import useTranslation from "next-translate/useTranslation";
import { Typewriter } from "react-simple-typewriter";

export default function HomeIntro() {
  const { t } = useTranslation("common");
  return (
    <IntroSection image={HomeCover}>
      <div className="flex flex-col absolute top-1/2 ltr:left-0 rtl:right-0 lg:px-[120px] px-6 -translate-y-1/2 md:gap-6">
        <h1 style={{ color: "#E7BB4C", fontWeight: "bold", fontSize: "48px" }}>
          {/* Style will be inherited from the parent element */}
          <Typewriter
            words={[t("name")]}
            loop
            cursor
            cursorStyle="."
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </h1>
        <h1
          className="md:text-5xl text-2xl font-bold md:leading-[55px]"
          dangerouslySetInnerHTML={{ __html: t("home_intro_text") }}
        />
        <Button className="!bg-dark-100 mt-3 !rounded">
          {t("get_in_touch")}
        </Button>
      </div>
    </IntroSection>
  );
}
