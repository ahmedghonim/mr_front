import IntroSection from "@views/layout/public-page/main-intro-section";
import useTranslation from "next-translate/useTranslation";
import Head from "next/head";
import React from "react";
import ServicesComponent from "@views/layout/public-page/services";
import ServicesCover from "@image/services-cover.png";
import { Button, Text } from "@ui/atom";

const services = [
  {
    image: "",
    service_name: "Service Name",
  },
  {
    image: "",
    service_name: "Service Name",
  },
  {
    image: "",
    service_name: "Service Name",
  },
  {
    image: "",
    service_name: "Service Name",
  },
  {
    image: "",
    service_name: "Service Name",
  },
  {
    image: "",
    service_name: "Service Name",
  },
];

export default function Services() {
  const { t } = useTranslation("pages-title");

  return (
    <>
      <Head>
        <title>{t("")}</title>
      </Head>

      <section>
        {/* ------- INTRO SECTION ------- */}

        <IntroSection image={ServicesCover}>
          <div className="w-[80%] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[2]">
            <Text
              as="h1"
              font="bold"
              className="!text-[40px] !text-primary-100 font-Lato"
            >
              {t("common:our_services")}
            </Text>
            <Text
              as="p"
              font="semi"
              className="!text-[18px] !text-white font-Inter"
            >
              {t("common:our_services_sub")}
            </Text>
          </div>
          <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-60 z-[1]" />
        </IntroSection>

        {/* ------- SERVICES SECTION ------- */}

        <ServicesComponent
          className="pt-[70px] pb-[108px]"
          headStyle="px-[124px] !text-start"
          data={services}
        >
          {/* ---- PAGINATION COMPONENT --- */}
          <div></div>
        </ServicesComponent>
      </section>
    </>
  );
}
