import IntroSection from "@views/shared/intro-section";
import useTranslation from "next-translate/useTranslation";
import React from "react";
import FAQCover from "@image/contact-cover.png";
import { Button, Text } from "@ui/atom";
import Search from "@svg/search.svg";

export default function FAQIntro() {
  const { t } = useTranslation("common");
  return (
    <IntroSection image={FAQCover}>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[2] flex flex-col justify-center items-center w-full">
        <Text
          as="h1"
          font="bold"
          className="!text-primary-100 lg:!text-[40px] font-Lato"
        >
          {t("have_ques")}
        </Text>
        <Text
          as="p"
          font="semi"
          className="!text-white lg:!text-base font-Inter"
        >
          {t("faq_sub")}
        </Text>
        <div className="flex items-center justify-center w-1/2 lg:w-1/4 mx-auto mt-5">
          <div className="w-full flex items-center gap-4 border-[1px] border-[#ffffff33] px-4 py-2">
            <button className="cursor-pointer duration-300 hover:scale-125">
              <Search />
            </button>
            <input
              className="bg-transparent outline-none text-white [&::placeHolder]:capitalize"
              placeholder={t("search")}
            />
          </div>
          <Button style="secondary" className="!rounded-none">
            {t("search")}
          </Button>
        </div>
      </div>
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-60 z-[1]" />
    </IntroSection>
  );
}
