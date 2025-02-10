"use client";
import { useEffect, useRef } from "react";
import { SwiperSlide } from "swiper/react";
import BusinessCard from "../OurBusiness/BusinessCard"; // Updated import path
import Btn from "../ui/btns/Btn";
import { FaArrowRight } from "react-icons/fa6";
import Slider from "../Slider";
import { useTranslations } from "use-intl";
import fullData from "@/data/FullData";

export default function OurSectors({locale}) {
  const swiperRef = useRef(null);

  const t = useTranslations("common");

  const services = fullData.services;

  useEffect(() => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.autoplay.start(); // Manually start autoplay
    }
  }, []); // Only run this once on mount

  return (
    <section className="max-w-6xl mx-auto my-10 px-7 lg:px-0">
      <div className="flex flex-col md:flex-row justify-between gap-4 md:items-center">
        <h3 className="text-2xl md:text-3xl font-bold capitalize">
          <span className="text-blueShades-300">{t("ourSectors.highlighted")}</span> {t("ourSectors.title")}
        </h3>

        <Btn
          bg="bg-white text-xs md:px-6 md:py-2 md:text-lg w-fit"
          color="text-blueShades-300 border border-blueShades-300 font-bold"
          text={t("viewAll")}
          url="/ourServices"
          icon={<FaArrowRight />}
          rounded="rounded-3xl"
          hover="hover:bg-secondary hover:text-white"
        />
      </div>

      <Slider customClass="!mt-10 !pt-4">
        {services.map((service, i) => (
          <SwiperSlide key={service.id}>
            <BusinessCard locale={locale} {...service} i={i} />
          </SwiperSlide>
        ))}
      </Slider>
    </section>
  );
}
