import React from "react";
import useTranslation from "next-translate/useTranslation";
import Address from "./location";
import ContactDetails from "./details";
import Commercial from "@svg/commercial.svg";
import ContactCircles from "@svg/contact-circles.svg";
import Instgram from "@svg/contact-instagrm.svg";
import Twitter from "@svg/twitter.svg";
import { Text } from "@ui/atom";

function ContactInfo() {
  const { t } = useTranslation("common");

  // Contact Info Head
  const InfoHead = ({ text }: { text: string }) => {
    return (
      <Text
        as="h3"
        className="capitalize !text-start !text-[16px] sm:!text-[10px] lg:!text-[16px] !text-white opacity-75 font-inter"
      >
        {text}
      </Text>
    );
  };

  // contact social icons
  const SocialIcon = ({
    icon: Icon,
    href,
  }: {
    icon: React.ElementType;
    href: string;
  }) => {
    return (
      <div className="lg:w-[35px] lg:h-[35px] w-[25px] h-[25px] rounded-full bg-white grid place-items-center duration-150 hover:bg-secondary-100 hover:scale-125">
        <a href={href}>
          <Icon className="fill-primary-100 lg:scale-90 duration-150 icon" />
        </a>
      </div>
    );
  };

  return (
    <div className="sm:w-[41%] w-full lg:h-[647px] sm:h-[480px] flex flex-col bg-[#DEBB5F] gap-8 lg:p-10 p-4 rounded-[10px] relative overflow-hidden">
      <div className="text-center sm:text-start">
        <Text
          as="h2"
          font="mid"
          className="!text-start !text-white lg:!text-[28px] sm:!text-sm !text-[20px] font-Lato"
        >
          {t("contact_info")}
        </Text>
        <Text
          as="p"
          className="!text-start lg:text-[18px] text-[11px] !text-white !mt-3 font-Lato"
        >
          {t("say_something")}
        </Text>
      </div>
      <Address>
        <InfoHead text={t("address")} />
      </Address>
      <ContactDetails>
        <InfoHead text={t("contact_details")} />
      </ContactDetails>

      <div className="flex gap-1 ">
        <Commercial className="scale-75" />
        <div className="flex flex-col gap-1">
          <InfoHead text={t("commercial_register")} />
          <Text
            font="bold"
            className="!text-start lg:!text-[20px] sm:!text-[12px] !text-[18px] !text-white"
          >
            1010672966
          </Text>
        </div>
      </div>
      <div className="w-full mt-auto flex flex-col gap-6">
        <div className="flex gap-3 ">
          <SocialIcon
            href="https://mobile.twitter.com/blthanih"
            icon={Twitter}
          />
          <SocialIcon
            href="https://www.instagram.com/blthanih"
            icon={Instgram}
          />
        </div>
      </div>
      <div className="absolute lg:-bottom-8 lg:-right-8 sm:-bottom-10 sm:-right-10 -bottom-16 -right-16">
        <ContactCircles className="scale-75" />
      </div>
    </div>
  );
}
export default ContactInfo;
