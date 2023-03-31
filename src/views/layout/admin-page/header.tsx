 
import { DictionaryType } from "../../../../../get-dictionary";
import { useSelectedLayoutSegments } from "next/navigation";
import React from "react";

function AdminHeader( ) {
  const [admin, subRoute] = useSelectedLayoutSegments();

  return (
    <h1 className="text-[28px] font-bold">
      {subRoute
        ? t["header-title"][subRoute as "admin"]
        : t["header-title"][admin as "admin"]}
    </h1>
  );
}

export default AdminHeader;
