import { Text } from "@ui/atom";
import useTranslation from "next-translate/useTranslation";
import Image from "next/image";
import React from "react";
import HomeCover from "@image/home-cover.png";

interface ServicesCardProps {
  image: string | any;
  service_name: string;
}

const ServicesCard = ({ image, service_name: name }: ServicesCardProps) => {
  return (
    <div className="relative h-[400px] overflow-hidden">
      <Image
        src={HomeCover}
        width={1000}
        height={1000}
        alt="image"
        className="h-full w-full"
      />
      <div className="absolute bottom-0  left-0 w-full bg-primary-100 bg-opacity-60 py-3 duration-300 name">
        <Text
          font="bold"
          as="h3"
          className="font-Lato !text-[28px] !text-white"
        >
          {name}
        </Text>
      </div>
    </div>
  );
};

interface ServicesProps {
  data: ServicesCardProps[];
  children: React.ReactNode;
  headStyle?: string;
  className?: string;
}

export default function Services({
  data,
  className,
  headStyle,
  children,
}: ServicesProps) {
  const { t } = useTranslation("common");

  return (
    <div className="md:pt-[124px]">
      <Text as="h2" font="bold" className={`mb-10 !text-[48px] ${headStyle}`}>
        {t("our_services")}
      </Text>

      {/* -------- our services ------- */}
      <div className={`md:px-[120px] ${className}`}>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-14">
          {data?.map((service) => (
            <ServicesCard key={service.service_name} {...service} />
          ))}
        </div>
        {children}
      </div>
    </div>
  );
}
