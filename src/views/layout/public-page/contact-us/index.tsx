import React from "react";

import ContactForm from "./form";
import ContactInfo from "./contact-infos";
import clsx from "clsx";

function ContactUs({
  className,
  onSubmit,
}: {
  className?: string;
  onSubmit: () => void;
}) {
  return (
    <section
      className={clsx(
        "p-0 bg-white md:!rounded-[10px] !rounded contact-shadow mt-[80px] pb-[100px] md:pb-0",
        className
      )}
    >
      <div className="flex flex-col sm:flex-row justify-between items-start w-full">
        <ContactInfo />
        <div className="sm:w-[55%] w-full lg:pt-12 pt-4 sm:pt-0">
          <ContactForm onSubmit={onSubmit} />
        </div>
      </div>
    </section>
  );
}

export default ContactUs;
