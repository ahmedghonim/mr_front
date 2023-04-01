import Link from "next/link";
import React, { useState } from "react";
import TextLogo from "@svg/text-logo.svg";
import clsx from "clsx";
import useTranslation from "next-translate/useTranslation";
import { Button } from "@ui/atom";
import { useRouter } from "next/router";
import MenuIcon from "@svg/menu.svg";
import AboutIcon from "@svg/about-us.svg";
import OurServesIcon from "@svg/our-serves.svg";
import FQAIcon from "@svg/fqa.svg";

import LogoIcon from "@svg/logo.svg";
import ChangeLang from "@views/layout/shared/change-lang";
import VerticalBar from "@views/layout/shared/vertical-bar";
function NavBar() {
  const { t } = useTranslation("pages-title");
  const { asPath } = useRouter();
  const [openMenu, setOpenMenu] = useState(false);
  const navBar = [
    { name: "home", link: "/", icon: LogoIcon },
    { name: "our-services", link: "/our-services", icon: OurServesIcon },
    { name: "about-us", link: "/about-us", icon: AboutIcon },
    { name: "contact-us", link: "/contact-us", icon: AboutIcon },
    { name: "faq", link: "/faq", icon: FQAIcon },
  ];

  const isActiveTab = (_link: string) => asPath === _link;

  return (
    <nav className="flex justify-between md:my-14 md:mx-[120px] mx-7 my-7 items-center relative z-[6]">
      <div className="flex flex-col justify-start items-center gap-2">
        <Link href="/">
          <TextLogo />
        </Link>
      </div>

      {/* ------ Hidden In Mobile ----- */}
      <div className="md:flex gap-20 hidden ">
        {navBar.map(({ link, name }) => (
          <Link
            key={link}
            href={link}
            className={clsx(
              "relative text-dark-100 text-lg h-fit [&:hover>.line]:w-full",
              {
                "font-bold [&>.line]:w-full": isActiveTab(link),
              }
            )}
          >
            {t(name)}

            <div className="absolute -bottom-3 left-0 h-1 w-0 bg-primary-100 rounded-full duration-300 line" />
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

      {openMenu && <VerticalBar setOpenMenu={setOpenMenu} navBar={navBar} />}
    </nav>
  );
}

export default NavBar;
