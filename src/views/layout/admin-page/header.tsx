import useTranslation from "next-translate/useTranslation";
import { useSelectedLayoutSegments } from "next/navigation";
import React from "react";

function AdminHeader() {
  const [admin, subRoute] = useSelectedLayoutSegments();
  const { t } = useTranslation("pages-title");
  return (
    <h1 className="text-[28px] font-bold">
      {subRoute ? t(subRoute) : t(admin)}
    </h1>
  );
}

export default AdminHeader;
