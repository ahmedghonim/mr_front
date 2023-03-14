import { getDictionary } from "../../../get-dictionary";
import { ParamsProps } from "@util/page-type";
import React from "react";

async function Head({ params: { lang } }: ParamsProps) {
  const t = await getDictionary(lang);

  return (
    <>
      <title>{t.mr}</title>
    </>
  );
}

export default Head;
