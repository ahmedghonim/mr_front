import Link from "next/link";
import React, { useState } from "react";
import TextLogo from "@svg/text-logo.svg";
import clsx from "clsx";
import useTranslation from "next-translate/useTranslation";
import { Button } from "@ui/atom";
import { useRouter } from "next/router";
import LangIcon from "@svg/lang.svg";
import ClosIcon from "@svg/x.svg";
import MenuIcon from "@svg/menu.svg";
import AboutIcon from "@svg/about-us.svg";
import OurServesIcon from "@svg/our-serves.svg";
import FQAIcon from "@svg/fqa.svg";

function ChangeLang() {
  const { pathname } = useRouter();
  const { lang } = useTranslation("pages-title");
  return (
    <div className="flex items-center gap-2">
      <LangIcon />
      <Link
        href={pathname}
        locale="en"
        className={clsx("text-black", {
          "text-opacity-50": lang !== "en",
        })}
      >
        {"EN"}
      </Link>
      <Link
        href={pathname}
        locale="ar"
        className={clsx("text-black", {
          "text-opacity-50": lang !== "ar",
        })}
      >
        {"AR"}
      </Link>
    </div>
  );
}

function NavBar() {
  const { t, lang } = useTranslation("pages-title");
  const { asPath, pathname } = useRouter();
  const [openMenu, setOpenMenu] = useState(false);
  const navBar = [
    { name: "home", link: "/", icon: AboutIcon },
    { name: "our-services", link: "/our-services", icon: OurServesIcon },
    { name: "about-us", link: "/about-us", icon: AboutIcon },
    { name: "fqa", link: "/fqa", icon: FQAIcon },
  ];

  const isActiveTab = (_link: string) => asPath === _link;

  return (
    <nav className="flex justify-between md:my-14 md:mx-[120px] mx-7 my-7 items-center">
      <div className="flex flex-col justify-start items-center gap-2">
        <TextLogo />
      </div>

      {/* ------ Hidden In Mobile ----- */}
      <div className="md:flex gap-20 hidden ">
        {navBar.map(({ link, name }) => (
          <Link
            key={link}
            href={link}
            className={clsx(
              "text-dark-100 text-lg h-fit   hover:duration-100 hover:font-bold duration-75 border-primary-100",
              {
                "font-bold": isActiveTab(link),
              }
            )}
          >
            {t(name)}
            {isActiveTab(link) && (
              <div className="h-1 w-full bg-primary-100 rounded-full mt-1" />
            )}
          </Link>
        ))}
      </div>
      <div className="md:flex items-center gap-3 hidden">
        <Button
          style="secondary"
          rounded="full"
          size="sm"
          font="bold"
          className="!h-fit"
        >
          {t("contact")}
        </Button>
        <ChangeLang />
      </div>
      {/* ------ Hidden In Mobile ----- */}

      {/* ------ Show In Mobile ----- */}

      <span className="md:hidden" onClick={() => setOpenMenu(true)}>
        <MenuIcon />
      </span>

      {openMenu && (
        <div className="top-0 left-0 h-screen w-full bg-[#FDFAE7] fixed">
          <div className="flex justify-center mt-14">
            <TextLogo />
          </div>
          <div className="mt-14 mx-9 flex flex-col gap-6">
            {navBar.map(({ link, name, icon: Icon }) => (
              <Link key={link} href={link}>
                <span
                  onClick={() => setOpenMenu(false)}
                  className={clsx("flex gap-2 text-[#A7A7A7] text-lg h-fit", {
                    "!text-primary-100": isActiveTab(link),
                  })}
                >
                  <Icon className="fill-current" />
                  {t(name)}
                </span>
              </Link>
            ))}
          </div>
          <div className="mt-14 mx-9">
            <ChangeLang />
          </div>
        </div>
      )}
    </nav>
  );
}

export default NavBar;
