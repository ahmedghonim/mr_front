"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import Logo from "@svg/logo.svg";
import Buttons from "../../../ui/button";
import clsx from "clsx";
import { useSelectedLayoutSegments } from "next/navigation";
import useNavigate from "@hooks/useNavigate";
import { DictionaryType } from "../../../../../get-dictionary";

function NavBar({ t }: { t: DictionaryType }) {
  const [selectedLayoutSegments] = useSelectedLayoutSegments();
  const navigate = useNavigate();

  const navBar = [
    { name: "home", link: "/" },
    { name: "our-serves", link: "/our-serves" },
    { name: "industries", link: "/industries" },
    { name: "fqa", link: "/fqa" },
  ];

  return (
    <nav className="flex justify-between my-14 mx-[120px]">
      <div>
        <Image src={Logo} width={50} height={50} alt="logo" />
      </div>
      <div className="flex gap-20">
        {navBar.map(({ link, name }) => (
          <Link
            key={link}
            href={navigate(link)}
            className={clsx(
              "text-dark-100 text-lg  hover:duration-100 duration-75 hover:border-b-2 border-primary-100",
              {
                "font-bold border-b-2": link === "/",
              },
              {
                "font-bold border-b-2": link === selectedLayoutSegments,
              }
            )}
          >
            {t[name as "home"]}
          </Link>
        ))}
      </div>
      <Buttons primary>contact</Buttons>
    </nav>
  );
}

export default NavBar;
