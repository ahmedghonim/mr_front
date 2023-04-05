import React from "react";
import Logo from "@svg/logo.svg";
import { Button, Text } from "@ui/atom";
import useTranslation from "next-translate/useTranslation";
import Link from "next/link";
import Phone from "@svg/phone-icon.svg";
import Location from "@svg/location.svg";
import Mail from "@svg/mail.svg";
import Facebook from "@svg/facebook.svg";
import Linkedin from "@svg/linkedin.svg";
import Instagram from "@svg/instagram.svg";
import Twitter from "@svg/twitter_2.svg";
import Snap from "@svg/snap.svg";

const Company = () => {
  const { t } = useTranslation("common");

  return (
    <div>
      <Text
        as="h4"
        font="semi"
        className="!text-start !text-[13px] uppercase !text-[#454545] !font-Lato md:mb-10 mb-4"
      >
        {t("company")}
      </Text>
      <ul>
        <li>
          <Link href="/our-services" className="font-medium font-Lato">
            {t("our_services")}
          </Link>
        </li>
        <li className="my-[20px]">
          <Link href="#" className="font-medium font-Lato">
            {t("our_industries")}
          </Link>
        </li>
        <li>
          <Link href="/about-us" className="font-medium font-Lato">
            {t("about_us")}
          </Link>
        </li>
      </ul>
    </div>
  );
};

const Contacts = () => {
  const { t } = useTranslation("common");

  return (
    <div>
      <Text
        as="h4"
        font="semi"
        className="!text-start !text-[13px] uppercase !text-[#454545] !font-Lato md:mb-10 mb-4"
      >
        {t("contacts")}
      </Text>
      <div className="flex items-center gap-4 ">
        <Phone />
        <Text font="semi" className="font-Lato">
          01093000010
        </Text>
      </div>
      <div className="flex items-center gap-4 my-[10px]">
        <div>
          <Location />
        </div>
        <address className="font-Lato font-semibold text-sm">
          - {t("address_eg")}
          <br />- {t("address_du")}
        </address>
      </div>
      <div className="flex items-center gap-4">
        <Mail />
        <Text font="semi" className="font-Lato">
          smart77acc@gmail.com
        </Text>
      </div>
    </div>
  );
};

const SocialIcons = () => {
  const { t } = useTranslation("common");

  return (
    <div>
      <Text
        as="h4"
        font="semi"
        className="!text-start !text-[13px] uppercase !text-[#454545] !font-Lato md:mb-10 mb-4"
      >
        {t("get_in_touch")}
      </Text>

      <div className="flex items-center gap-5">
        <Link
          href="https://www.facebook.com/MRizkEgy1"
          className="duration-300 hover:scale-125"
          target="_blank"
        >
          <Facebook />
        </Link>
        <Link
          href="https://www.instagram.com/mohamed.rezkbdah/"
          className="duration-300 hover:scale-125"
          target="_blank"
        >
          <Instagram />
        </Link>
        <Link
          href="http://linkedin.com/in/mohamed-rezk-group-7a4876269"
          target="_blank"
          className="duration-300 hover:scale-125"
        >
          <Linkedin />
        </Link>
        <Link
          href="https://twitter.com/M1_GROUP"
          target="_blank"
          className="duration-300 hover:scale-125"
        >
          <Twitter />
        </Link>
        <Link
          href="http://linkedin.com/in/mohamed-rezk-group-7a4876269"
          target="_blank"
          className="duration-300 hover:scale-125"
        >
          <Snap />
        </Link>
      </div>
    </div>
  );
};

const NewsLetter = () => {
  const { t } = useTranslation("common");
  return (
    <div>
      <Text
        as="h4"
        font="semi"
        className="!text-start !text-[13px] uppercase !text-[#454545] !font-Lato md:mb-10 mb-4"
      >
        {t("news_litter")}
      </Text>

      <input
        type="email"
        placeholder={t("mail_placeholder")}
        className="bg-white rounded-[10px] py-[14px] w-full px-4 outline-none border-[1px] border-[#E4E4E7]"
      />
      <Button style="secondary" className="w-full !mt-4 py-3">
        {t("subscribe_now")}
      </Button>
    </div>
  );
};

export default function Footer() {
  const { t } = useTranslation("common");

  const currentYear = new Date().getFullYear();

  return (
    <footer className="lg:px-[124px] px-6 pb-[30px] pt-10 !bg-[#FCF8DB]">
      {/* -------- top section ------- */}
      <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-5 lg:gap-6">
        {/* -------- col 1 ------- */}
        <div className="md:col-span-1">
          <Link href="/">
            <Logo />
          </Link>
        </div>

        {/* -------- col 2 ------- */}
        <div className="md:col-span-1">
          <Company />
        </div>

        {/* -------- col 3 ------- */}
        <div className="md:col-span-2">
          <Contacts />
        </div>

        {/* -------- col 4 ------- */}
        <div className="md:col-span-1">
          <SocialIcons />
        </div>

        {/* -------- col 5 ------- */}
        <div className="md:col-span-1">
          <NewsLetter />
        </div>
      </div>
      {/* -------- bottom section ------- */}
      <Text as="p" className="md:mt-[72px] mt-[42px]">{`${t(
        "copy_writes_start"
      )} ${currentYear} ,${t("copy_writes_end")}`}</Text>
    </footer>
  );
}
