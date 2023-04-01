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

  console.log(navigationPrevRef.current);

  return (
    <div className="md:px-[120px] md:pt-[100px] md:pb-[126px]">
      <Text as="h3" size="heading" className="mb-[50px]">
        {t("our_clients")}
      </Text>

      {/* -------- our clients -------- */}
      <div className="relative">
        <Swiper
          modules={[Navigation]}
          spaceBetween={50}
          slidesPerView={5}
          navigation={{
            prevEl: navigationPrevRef.current,
            nextEl: navigationNextRef.current,
          }}
          onBeforeInit={(swiper: any) => {
            swiper.params.navigation.prevEl = navigationPrevRef.current;
            swiper.params.navigation.nextEl = navigationNextRef.current;
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
          className="absolute top-1/2 -translate-y-1/2 -left-6 rotate-180"
          ref={navigationPrevRef}
        >
          <SwiperArrow />
        </button>
        <button
          className="absolute top-1/2 -translate-y-1/2 -right-6"
          ref={navigationNextRef}
        >
          <SwiperArrow />
        </button>
      </div>
    </div>
  );
}
