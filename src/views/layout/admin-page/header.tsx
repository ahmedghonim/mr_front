import useTranslation from "next-translate/useTranslation";
import { useSelectedLayoutSegments } from "next/navigation";
import React from "react";

function AdminHeader() {
  const { t } = useTranslation("pages-title");
  return <h1 className="text-[28px] font-bold">t</h1>;
}

export default AdminHeader;
