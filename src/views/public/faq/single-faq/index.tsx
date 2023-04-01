import React, { useState } from "react";
import useTranslation from "next-translate/useTranslation";
import { Text } from "@ui/atom";
import Plus from "@svg/plus.svg";
import clsx from "clsx";

interface SingleQuestionProps {
  number?: number;
  ques: string;
  answer: string;
}

const SingleQuestion = ({ ques, answer }: SingleQuestionProps) => {
  const [clicked, setClicked] = useState<boolean>(false);

  return (
    <div
      className={`collapse py-3 md:py-5 ${
        clicked
          ? "border-primary-100 border-b-[2px]"
          : "border-[#C2BBFF] border-b-[1px]"
      }`}
      onClick={() => setClicked(!clicked)}
    >
      <input type="checkbox" />
      <div className="collapse-title relative flex items-center">
        <Text font="mid" className="font-Inter  !text-[16px] md:!text-[24px]">
          {ques}
        </Text>
        <span
          className={clsx("absolute right-2 top-1/2 duration-300 ", {
            "-translate-y-1/2 rotate-[135deg]": clicked,
            "-translate-y-1/2": !clicked,
          })}
        >
          <Plus className="scale-[1.2] fill-black" />
        </span>
      </div>
      <div className="collapse-content">
        <Text as="p" className=" md:pb-10 pb-2 !text-start leading-8">
          {answer}
        </Text>
      </div>
    </div>
  );
};

function FAQS({ questions }: { questions: SingleQuestionProps[] }) {
  const { t } = useTranslation("common");
  return (
    <div className="my-14 px-6 md:px-[120px]">
      <Text
        as="h2"
        font="semi"
        className="!text-primary-100 font-Inter !text-3xl lg:!text-[48px] mb-4 md:!leading-[65px]"
      >
        {t("frequently_head")}
      </Text>
      <div className="flex flex-col mx-auto lg:px-4">
        {questions.map((question, index) => {
          return (
            <SingleQuestion
              key={question.ques}
              {...question}
              number={index + 1}
            />
          );
        })}
      </div>
    </div>
  );
}

export default FAQS;
