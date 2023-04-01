import React from "react";
import Vision from "@svg/vision-icon.svg";
import Mission from "@svg/mission.svg";
import Objective from "@svg/objective.svg";
import { Text } from "@ui/atom";
import useTranslation from "next-translate/useTranslation";

interface SingleCardType {
  title: string;
  Icon: React.ElementType;
  desc: string;
}

const SingleCard = ({ title, Icon, desc }: SingleCardType) => {
  const { t } = useTranslation("common");
  return (
    <div className="flex flex-col items-center gap-3 w-[25%]">
      <Icon />
      <Text font="bold" as="h2" className="text-[28px] font-Lato">
        {t(title)}
      </Text>
      <p
        dangerouslySetInnerHTML={{ __html: t(desc) }}
        className="text-center text-sm font-Lato font-bold"
      />
    </div>
  );
};

export default function WhyUs() {
  return (
    <div className="md:mx-[120px] md:mt-[175px] flex justify-between">
      <SingleCard title="vision" Icon={Vision} desc="vision_desc" />
      <SingleCard title="mission" Icon={Mission} desc="mission_desc" />
      <SingleCard title="objective" Icon={Objective} desc="objective_desc" />
    </div>
  );
}
