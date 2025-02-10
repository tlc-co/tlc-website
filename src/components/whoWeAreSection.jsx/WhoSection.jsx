import React from "react";
import VideoPart from "./VideoPart";
import Btn from "../ui/btns/Btn";
import { FaArrowRight } from "react-icons/fa6";
import { useTranslations } from "next-intl";
import UseMediaModal from "../shared/UseMediaModal";

export default function WhoSection() {
  const t = useTranslations("common");

  return (
    <section className="flex flex-col md:flex-row px-7 xl:px-0 max-w-6xl mx-auto py-28 gap-8">
      <div className="flex-1 flex flex-col gap-6">
        <h2 className="text-4xl font-bold text-grayShades-100">
          <span className="text-blueShades-300">
            {t("whoWeAre.highlighted")}
          </span>{" "}
          {t("whoWeAre.title")}
        </h2>
        <p className="text-lg text-grayShades-100">
          {t("whoWeAre.description")}
        </p>
        <p className="text-lg  text-grayShades-100 font-semibold leading-relaxed pl-4 relative before:content-[''] before:absolute before:top-2 before:left-0 before:w-0.5 before:h-4/5 before:bg-mainOrange">
          {t("whoWeAre.subDescription")}
        </p>

        <div>
          <Btn
            bg="bg-blueShades-300 px-6 w-fit"
            color="text-white font-bold"
            text={t("more")}
            icon={<FaArrowRight />}
            rounded="rounded-3xl"
            hover="hover:bg-black "
            url="/about-us"
          />
        </div>
      </div>
      <UseMediaModal type="video" link="/vids/test.mp4">
        <VideoPart />
      </UseMediaModal>
    </section>
  );
}
