import { LinkButton, Text } from "@ui/atom";
import ServesView, { ServesViewProps } from "@views/public/our-serves";
import servesData from "@views/public/our-serves/mockdata";
import useTranslation from "next-translate/useTranslation";
import React from "react";

function OurService() {
  const { t } = useTranslation("common");

  return (
    <div className="md:px-[120px] md:space-y-[105px] px-6 space-y-6 text-center">
      {servesData.map(
        (
          { src, desc_ar, desc_en, title_ar, title_en }: ServesViewProps,
          index
        ) => (
          <ServesView
            src={src}
            desc_ar={desc_ar}
            desc_en={desc_en}
            title_ar={title_ar}
            title_en={title_en}
            revers={index % 2 !== 0}
          />
        )
      )}
      <div className="rounded-3xl bg-[#F2E4BF] h-[282px] flex flex-col justify-center items-center gap-7 px-2">
        <Text as="p" size="md" className="text-black md:w-3/5 ">
          Our team of experienced and dedicated professionals are committed to
          delivering expert guidance tailored to your individual needs.{" "}
        </Text>
        <LinkButton href="/contact-us" rounded="full">
          {t("contact")}
        </LinkButton>
      </div>
    </div>
  );
}

export default OurService;
