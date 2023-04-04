import React from "react";
import TextLogo from "@svg/text-logo.svg";
import Link from "next/link";
import clsx from "clsx";
import { useRouter } from "next/router";
import useTranslation from "next-translate/useTranslation";
import ChangeLang from "./change-lang";

type Props = {
  navBar: {
    link: string;
    name: string;
    icon: React.FC<React.SVGProps<SVGSVGElement>>;
  }[];
  setOpenMenu?: React.Dispatch<React.SetStateAction<boolean>>;
  className?: string;
};

function VerticalBar({ setOpenMenu, navBar, className }: Props) {
  const { asPath } = useRouter();
  const { t } = useTranslation("pages-title");

  const isActiveTab = (_link: string) => asPath === _link;

  return (
    <div
      className={clsx(
        "top-0 left-0 h-screen w-full bg-[#FDFAE7] fixed",
        className
      )}
    >
      <div className="flex justify-center mt-14">
        <TextLogo />
      </div>
      <div className="mt-14 mx-9 flex flex-col gap-6">
        {navBar.map(({ link, name, icon: Icon }) => (
          <Link key={link} href={link}>
            <span
              onClick={() => {
                setOpenMenu?.(false);
              }}
              className={clsx(
                "flex gap-2 text-[#A7A7A7] items-center text-lg h-fit",
                {
                  "!text-primary-100": isActiveTab(link),
                }
              )}
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
  );
}

export default VerticalBar;
