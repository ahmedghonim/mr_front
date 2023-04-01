import { LinkButton, Text } from "@ui/atom";
import ServesView, { ServesViewProps } from "@views/public/our-serves";
import useTranslation from "next-translate/useTranslation";
import React from "react";

function OurService() {
  const { t } = useTranslation("common");
  const data: ServesViewProps[] = [
    {
      src: "/our-serves_1.png",
      title: "Lorem ipsum dolor sit amet",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sed semper nisl. Sed auctor, nisl eget ultricies lacinia, nisl nisl aliquam nisl, eget aliquam nunc nisl eget nisl. Sed auctor, nisl eget ultricies lacinia, nisl nisl aliquam nisl, eget aliquam nunc nisl eget nisl.",
    },
    {
      src: "/our-serves_1.png",
      title: "Lorem ipsum dolor sit amet",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sed semper nisl. Sed auctor, nisl eget ultricies lacinia, nisl nisl aliquam nisl, eget aliquam nunc nisl eget nisl. Sed auctor, nisl eget ultricies lacinia, nisl nisl aliquam nisl, eget aliquam nunc nisl eget nisl.",
    },
  ];
  return (
    <div className="md:px-[120px] md:space-y-[105px] px-6 space-y-6 text-center">
      {data.map(({ src, title, desc }: ServesViewProps, index) => (
        <ServesView
          src={src}
          title={title}
          desc={desc}
          revers={index % 2 !== 0}
        />
      ))}
      <div className="rounded-3xl bg-[#F2E4BF] h-[282px] flex flex-col justify-center items-center gap-7">
        <Text as="p" size="md" className="text-black md:w-3/5">
          Our team of experienced and dedicated professionals are committed to
          delivering expert guidance tailored to your individual needs.{" "}
        </Text>
        <LinkButton href="/contact-us" rounded="full">
          {t("contact")}
        </LinkButton>
      </div>
    </div>
  );
}

export default OurService;
