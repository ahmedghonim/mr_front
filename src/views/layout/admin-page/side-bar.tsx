import Image from "next/image";
import Link from "next/link";
import React from "react";
import Logo from "@svg/admin-logo.svg";
import AboutUs from "@svg/about-us.svg";
import OurIndustries from "@svg/our-industries.svg";
import OurServes from "@svg/our-services.svg";
import OurClient from "@svg/our-client.svg";
import Faq from "@svg/fqa.svg";
import Messages from "@svg/messages.svg";
import clsx from "clsx";
import { useSelectedLayoutSegments } from "next/navigation";
import useTranslation from "next-translate/useTranslation";

function SideBar() {
  const { t } = useTranslation("common");
  const [admin, subRoute] = useSelectedLayoutSegments();

  const sideBar = [
    { name: "about-us", link: "/admin", icon: AboutUs },
    {
      name: "our-industries",
      link: "admin/our-industries",
      icon: OurIndustries,
    },
    { name: "our-services", link: "/admin/our-services", icon: OurServes },
    { name: "our-client", link: "/admin/our-client", icon: OurClient },
    { name: "fqa", link: "/admin/fqa", icon: Faq },
    { name: "messages", link: "/admin/messages", icon: Messages },
  ];

  return (
    <nav className="flex flex-col gap-16 w-[299px] h-full rounded-s-none rounded-[30px] shadow-2xl">
      <div className="mt-14 mx-auto">
        <Image src={Logo} width={90} height={50} alt="logo" />
      </div>
      <div className="flex flex-col gap-1 px-8">
        {sideBar.map(({ link, name, icon }) => (
          <Link
            key={link}
            href={link}
            className={clsx(
              "text-dark-100 text-lg flex gap-2 items-center py-3 hover:duration-100 duration-75 hover:border-b-2 border-primary-100",
              {
                "font-bold border-b-2":
                  link === "/admin" && subRoute === undefined,
              },
              {
                "font-bold border-b-2": link === `${admin}/${subRoute}`,
              }
            )}
          >
            <Image src={icon} width={24} height={18} alt={name} />
            {t(name)}
          </Link>
        ))}
      </div>
    </nav>
  );
}

export default SideBar;
