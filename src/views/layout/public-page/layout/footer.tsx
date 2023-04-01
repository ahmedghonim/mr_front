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
          <Link href="#" className="font-medium font-Lato">
            {t("our_services")}
          </Link>
        </li>
        <li className="my-[20px]">
          <Link href="#" className="font-medium font-Lato">
            {t("our_industries")}
          </Link>
        </li>
        <li>
          <Link href="#" className="font-medium font-Lato">
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
          010002427465
        </Text>
      </div>
      <div className="flex items-center gap-4 my-[10px]">
        <div>
          <Location />
        </div>
        <address className="font-Lato font-medium text-sm">
          4517 Washington Ave. Manchester, Kentucky 39495
        </address>
      </div>
      <div className="flex items-center gap-4">
        <Mail />
        <Text font="semi" className="font-Lato">
          mohamed@example.com
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
        <Link href="" className="duration-300 hover:scale-125">
          <Facebook />
        </Link>
        <Link href="" className="duration-300 hover:scale-125">
          <Instagram />
        </Link>
        <Link href="" className="duration-300 hover:scale-125">
          <Linkedin />
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
      <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-5 lg:gap-0">
        {/* -------- col 1 ------- */}

        <Link href="/">
          <Logo />
        </Link>

        {/* -------- col 2 ------- */}

        <Company />

        {/* -------- col 3 ------- */}

        <Contacts />

        {/* -------- col 4 ------- */}

        <SocialIcons />

        {/* -------- col 5 ------- */}

        <NewsLetter />
      </div>
      {/* -------- bottom section ------- */}
      <Text as="p" className="md:mt-[72px] mt-[42px]">{`${t(
        "copy_writes_start"
      )} ${currentYear} ,${t("copy_writes_end")}`}</Text>
    </footer>
  );
}
