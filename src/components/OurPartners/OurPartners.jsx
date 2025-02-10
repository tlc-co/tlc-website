"use client";

import Image from "next/image";
import Slider from "../Slider";
import { SwiperSlide } from "swiper/react";
import { useTranslations } from "next-intl";

export default function OurPartners({ locale }) {
  const t = useTranslations("common");

  const partners = [
    {
      id: 1,
      images: [
        "/partners/1.jpg",
        "/partners/2.png",
        "/partners/3.jpg",
        "/partners/4.png",
      ],
    },
    {
      id: 2,
      images: [
        "/partners/5.png",
        "/partners/6.jpg",
        "/partners/7.png",
        "/partners/8.png",
      ],
    },
    {
      id: 3,
      images: [
        "/partners/9.jpg",
        "/partners/10.png",
        "/partners/11.png",
        "/partners/12.webp",
      ],
    },
    {
      id: 4,
      images: [
        "/partners/13.png",
        "/partners/14.png",
        "/partners/15.png",
        "/partners/16.png",
      ],
    },
    {
      id: 5,
      images: [
        "/partners/17.png",
        "/partners/18.png",
        "/partners/19.png",
        "/partners/20.jpg",
      ],
    },
    {
      id: 6,
      images: [
        "/partners/21.png",
        "/partners/22.png",
        "/partners/23.jpg",
        "/partners/24.png",
      ],
    },
    {
      id: 7,
      images: ["/partners/25.webp"],
    },
  ];

  return (
    <section className="bg-[url('/partner-bg.jpg')] bg-cover relative">
      <div className="absolute w-full h-full bg-blueShades-600/70 top-0 left-0" />
      <div className="max-w-6xl relative z-10 mx-auto my-10 px-7 lg:px-0 py-24">
        <div className="flex flex-col md:flex-row justify-between gap-4 md:items-center ">
          <h3 className="text-2xl md:text-3xl  font-bold capitalize text-white">
            <span className="text-blueShades-300">
              {t("ourPartners.highlighted")}
            </span>{" "}
            {locale === "en" ? t("ourPartners.title") : ""}
          </h3>
        </div>

        <div className="mt-10 flex flex-col gap-10 lg:flex-row">
          <div className="w-full lg:w-1/2">
            <Slider slidesPerViewInDesktop={1} slidesPerViewInTablet={1}>
              {partners.map((partner) => (
                <SwiperSlide key={partner.id}>
                  <div className="grid grid-cols-2 grid-rows-2 gap-3">
                    {partner.images.map((image, i) => (
                      <div
                        key={i}
                        className="relative h-[200px] rounded-xl bg-white p-4"
                      >
                        <Image
                          src={image}
                          alt="partner"
                          width={500}
                          height={500}
                          className="w-full h-full object-contain"
                        />
                      </div>
                    ))}
                  </div>
                </SwiperSlide>
              ))}
            </Slider>
          </div>

          <div className="flex-1 w-full min-h-96"></div>
        </div>
      </div>
    </section>
  );
}
