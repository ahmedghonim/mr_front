import React from "react";
import AddressIcon from "@svg/address.svg";

function Address({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex gap-1">
      <AddressIcon className="scale-75" />
      <div className="flex flex-col">
        {children}
        <address>
          <span className="text-white lg:text-[20px] sm:text-[12px] text-[18px] font-bold">
            Saudi Arabia , Riyadh Riyadh
          </span>
        </address>
      </div>
    </div>
  );
}

export default Address;
