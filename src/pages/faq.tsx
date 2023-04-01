import FAQIntro from "@views/public/faq/intro-sec";
import FAQS from "@views/public/faq/single-faq";
import useTranslation from "next-translate/useTranslation";
import Head from "next/head";
import React from "react";

export default function FAQ() {
  const { t } = useTranslation("common");

  const questions = [
    {
      ques: t("How much time does it take ?"),
      answer: t(
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      ),
    },
    {
      ques: t("What is your class naming convention ?"),
      answer: t(
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      ),
    },
    {
      ques: t("How do we communicate ?"),
      answer: t(
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      ),
    },
    {
      ques: t("I have a bigger project. Can you handle it ?"),
      answer: t(
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      ),
    },
    {
      ques: t("What is your class naming convention ?"),
      answer: t(
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      ),
    },
  ];

  return (
    <>
      <Head>
        <title>{t("pages-title:faq")}</title>
      </Head>
      <FAQIntro />
      <FAQS questions={questions} />
    </>
  );
}
