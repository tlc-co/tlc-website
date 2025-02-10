"use client";
import { Swiper } from "swiper/react"; // Import SwiperSlide
import { Pagination, Autoplay } from "swiper/modules"; // Corrected Swiper imports
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { useEffect, useRef } from "react";

export default function Slider({
  defaultSlidesPerView = 3,
  defaultSpaceBetween = 20,
  defaultAutoplayDelay = 5000,
  slidesPerViewInMobile = 1,
  spaceBetweenInMobile = 10,
  slidesPerViewInDesktop = 3,
  spaceBetweenInDesktop = 20,
  slidesPerViewInTablet = 2,
  spaceBetweenInTablet = 15,
  disableOnInteraction = false,
  paginationClickable = true,
  paginationBgColor = "#122EBF",
  customClass = "",
  children,
}) {
  const swiperRef = useRef(null);

  useEffect(() => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.autoplay.start(); // Manually start autoplay
    }
  }, []);

  return (
    <Swiper
      modules={[Pagination, Autoplay]}
      spaceBetween={defaultSpaceBetween}
      slidesPerView={defaultSlidesPerView}
      breakpoints={{
        0: {
          slidesPerView: slidesPerViewInMobile,
          spaceBetween: spaceBetweenInMobile,
        },
        640: {
          slidesPerView: slidesPerViewInTablet,
          spaceBetween: spaceBetweenInTablet,
        },
        1024: {
          slidesPerView: slidesPerViewInDesktop,
          spaceBetween: spaceBetweenInDesktop,
        },
      }}
      autoplay={{
        delay: defaultAutoplayDelay,
        disableOnInteraction: disableOnInteraction,
      }}
      pagination={{
        clickable: paginationClickable,
        renderBullet: (index, className) =>
          `<span class="${className}" style="background-color: ${paginationBgColor};"></span>`,
      }}
      ref={swiperRef}
      className={`swiper-container ${customClass}`}
    >
      {children}
    </Swiper>
  );
}
