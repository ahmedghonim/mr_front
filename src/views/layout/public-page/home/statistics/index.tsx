import clsx from "clsx";
import useTranslation from "next-translate/useTranslation";
import React from "react";

export default function Statistics() {
  const { t } = useTranslation("common");

  const numbers = [
    {
      count: "40+",
      name: t("services"),
    },
    {
      count: "100%",
      name: t("usefully"),
    },

    {
      count: "4K+",
      name: t("client"),
    },
  ];

  return (
    <div className="flex justify-between items-center md:w-[35%] mx-auto mt-[35px]">
      {numbers.map(({ name, count }, index) => (
        <div
          key={name}
          className={clsx(
            "ltr:border-l rtl:border-r border-[#EAECF0]  text-center",
            {
              "border-none": index === 0,
            }
          )}
        >
          <h2 className="text-primary-100 text-6xl font-semibold">{count}</h2>
          <span className="text-lg">{name}</span>
        </div>
      ))}
    </div>
  );
}
