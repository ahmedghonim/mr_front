import Link from "next/link";
import React from "react";
import TextLogo from "@svg/text-logo.svg";
import clsx from "clsx";
import useTranslation from "next-translate/useTranslation";
import { Button } from "@ui/atom";
import { useRouter } from "next/router";

function NavBar() {
  const { t, lang } = useTranslation("pages-title");
  const { asPath, pathname } = useRouter();

  const navBar = [
    { name: "home", link: "/" },
    { name: "our-serves", link: "/our-serves" },
    { name: "industries", link: "/industries" },
    { name: "fqa", link: "/fqa" },
  ];

  const isActiveTab = (_link: string) => asPath === _link;

  return (
    <nav className="flex justify-between mt-14 mx-[120px] items-center">
      <div className="flex flex-col justify-start items-center gap-2">
        <Link href="/">
          <TextLogo />
        </Link>
      </div>
      <div className="flex gap-20">
        {navBar.map(({ link, name }) => (
          <Link
            key={link}
            href={link}
            className={clsx(
              "text-dark-100 text-lg h-fit hover:duration-200 hover:font-bold duration-75 border-primary-100",

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
      <div className="flex items-center gap-3">
        <Button
          style="secondary"
          rounded="full"
          size="sm"
          font="bold"
          className="!h-fit"
        >
          {t("contact")}
        </Button>
        <Link href={pathname} locale={lang === "ar" ? "en" : "ar"}>
          {lang === "ar" ? "EN" : "AR"}
        </Link>
      </div>
    </nav>
  );
}

export default NavBar;
