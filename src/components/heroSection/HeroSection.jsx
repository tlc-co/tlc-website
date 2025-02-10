import Image from "next/image";
import React from "react";
import Btn from "../ui/btns/Btn";
import { FaArrowRight } from "react-icons/fa6";
import { useTranslations } from "next-intl";

export default function HeroSection() {

  const t = useTranslations("common");

  return (
    <section className="h-[60vh] md:min-h-screen relative before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-blueShades-200/25 before:z-10">
      <Image
        src="/heroPic.webp"
        alt="hero"
        fill
        className="object-cover object-center md:object-top"
      />

      <div className="absolute top-0 left-0 flex justify-center md:items-center w-full h-full z-20 pt-32 md:pt-0">
        <div className="w-full px-6 md:w-4/5 flex flex-col md:gap-10 gap-6 md:pt-16">
          <h2 data-aos="fade-up" className="text-xl md:text-[54px] md:leading-[60px] md:w-3/5 font-bold md:tracking-wide text-white">

          {t("hero.welcome")}
            {/* {" "} */}
          </h2>
          <p data-aos="fade-up" data-aos-delay="100" className="text-white w-full md:w-2/3 md:text-xl">
            {t("hero.slogan")}
          </p>
          <div className="flex gap-6 items-center">
            <Btn
              bg="bg-white px-6 w-fit"
              color="text-blueShades-200 font-bold"
              text={t("more")}
              url={"/projects"}
              icon={<FaArrowRight />}
              rounded="rounded-3xl"
              hover="hover:bg-secondary hover:text-white"
            />
            <Btn
              bg="bg-transparent border border-white px-6 w-fit"
              color="text-white font-bold"
              text={t("hero.services")}
              url={"/ourServices"}
              icon={<FaArrowRight />}
              rounded="rounded-3xl"
              hover="hover:bg-secondary hover:border-transparent"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
