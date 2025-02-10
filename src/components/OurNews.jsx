"use client";

import React from "react";
import TwitterFeed from "./TwitterFeed";
import Btn from "./ui/btns/Btn";
import { FaArrowRight } from "react-icons/fa6";
import Slider from "./Slider";
import { SwiperSlide } from "swiper/react";
import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";
import fullData from '@/data/FullData';

export default function OurNews({ locale }) {

  const t = useTranslations("common")

  const news = fullData.news;

  const localizedNews = news.map((project) => ({
    ...project,
    description: project.description[locale] || project.description["en"],
  }));

  return (
    <section className="max-w-6xl mx-auto my-10 px-7 lg:px-0">
      <div className="flex flex-col md:flex-row justify-between gap-4 mb-10 md:items-center">
        <h3 className="text-2xl md:text-3xl  font-bold capitalize">
          <span className="text-blueShades-300">{t("ourNews.highlighted")}</span> {locale === "en"? t("ourNews.title") : "" }
        </h3>

        <Btn
          bg="bg-white text-xs md:px-6 md:py-2 md:text-lg w-fit"
          color="text-blueShades-300 border border-blueShades-300 font-bold"
          text={t("viewAll")}
          icon={<FaArrowRight />}
          rounded="rounded-3xl"
          hover="hover:bg-secondary hover:text-white"
        />
      </div>

      <div className="flex flex-col lg:flex-row gap-5 ">
        <div className="w-full flex overflow-x-auto gap-5 scrollbar-hide">
          <Slider
            slidesPerViewInDesktop={2}
            slidesPerViewInMobile={1}
            spaceBetweenInDesktop={20}
            spaceBetweenInMobile={10}
            customClass="w-full"
          >
            {localizedNews.map((project) => (
              <SwiperSlide key={project.id}>
                <div className="flex flex-col h-full ">
                  <div className="w-full bg-black relative min-h-[250px] max-h-[250px] overflow-clip rounded-t-xl group">
                    <Image
                      width={500}
                      height={500}
                      src={project.image}
                      alt="certificate"
                      className="w-full h-full object-cover group-hover:scale-125 transition-all duration-[2000ms] ease-in-out"
                    />
                  </div>
                  <div className="h-full flex flex-col justify-between p-5">
                    <p className=" font-semibold text-grayShades-100 overflow-hidden line-clamp-4">
                      {project.description}
                    </p>
                    <Link
                      href={`/show/news?id=${project.id}`}
                      className="text-mainOrange flex items-center gap-2 hover:text-blueShades-300 capitalize transition-colors font-bold"
                    >
                      {t("more")} <FaArrowRight />
                    </Link>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Slider>
        </div>
        <TwitterFeed />
      </div>
    </section>

    // <div></div>
  );
}
