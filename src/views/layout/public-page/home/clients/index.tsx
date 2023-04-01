import { Text } from "@ui/atom";
import useTranslation from "next-translate/useTranslation";
import React, { useRef } from "react";
import LinkedIn from "@svg/linkedin-logo.svg";
import SwiperArrow from "@svg/swiper-arrow.svg";

/* ------- Swiper Imports ------ */
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";

export default function Clients() {
  const { t } = useTranslation("common");

  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);

  return (
    <div className="lg:px-[120px] px-6 md:pt-[100px] pt-8 md:pb-[126px] pb-[60px]">
      <Text
        as="h3"
        font="bold"
        className="!text-[28px] md:!text-[48px] md:mb-[30px]"
      >
        {t("our_clients")}
      </Text>

      {/* -------- our clients -------- */}
      <div className="relative">
        <Swiper
          modules={[Navigation]}
          spaceBetween={50}
          slidesPerView={1.5}
          navigation={{
            prevEl: navigationPrevRef.current,
            nextEl: navigationNextRef.current,
          }}
          onBeforeInit={(swiper: any) => {
            swiper.params.navigation.prevEl = navigationPrevRef.current;
            swiper.params.navigation.nextEl = navigationNextRef.current;
          }}
          breakpoints={{
            768: { slidesPerView: 2.5 },
            992: { slidesPerView: 3.5 },
            1200: { slidesPerView: 5 },
          }}
        >
          <SwiperSlide>
            <LinkedIn />
          </SwiperSlide>
          <SwiperSlide>
            <LinkedIn />
          </SwiperSlide>
          <SwiperSlide>
            <LinkedIn />
          </SwiperSlide>
          <SwiperSlide>
            <LinkedIn />
          </SwiperSlide>
          <SwiperSlide>
            <LinkedIn />
          </SwiperSlide>
          <SwiperSlide>
            <LinkedIn />
          </SwiperSlide>
          <SwiperSlide>
            <LinkedIn />
          </SwiperSlide>
        </Swiper>
        <button
          className="absolute top-1/2 -translate-y-1/2 -left-6 rotate-180 hidden lg:block"
          ref={navigationPrevRef}
        >
          <SwiperArrow />
        </button>
        <button
          className="absolute top-1/2 -translate-y-1/2 -right-6 hidden lg:block"
          ref={navigationNextRef}
        >
          <SwiperArrow />
        </button>
      </div>
    </div>
  );
}
