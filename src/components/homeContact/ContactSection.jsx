import React from "react";
import Btn from "../ui/btns/Btn";
import { FaArrowRight } from "react-icons/fa6";
import { useTranslations } from "next-intl";

export default function ContactSection() {

  const t = useTranslations("common");

  return (
    <div className='bg-[url("/bg-contact.jpg")] bg-cover  bg-fixed py-20 relative'>
      <div className="absolute w-full h-full bg-blueShades-600/50 top-0 left-0"/>
      <div className="flex relative border border-borderColor/25 py-10 px-6 z-10 flex-col gap-10 items-center text-white w-11/12 lg:w-[60%] md:w-4/5 mx-auto text-center font-bold">
        <h3 className="text-lg md:text-xl lg:text-2xl">{t("contactUs.title")}</h3>

        <p className="text-sm md:text-base">
          {t("contactUs.desc")}
        </p>

        <Btn
          bg="bg-transparent border border-white px-6 w-fit"
          color="text-white font-bold"
          text={t("contact")}
          icon={<FaArrowRight />}
          rounded="rounded-3xl"
          hover="hover:bg-secondary hover:border-transparent"
          url="/contact"
        />
      </div>
    </div>
  );
}
