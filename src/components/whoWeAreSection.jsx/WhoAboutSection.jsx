import React from "react";
import VideoPart from "./VideoPart";
import { useTranslations } from "next-intl";
import UseMediaModal from "../shared/UseMediaModal";

export default function WhoAboutSection() {
  const t = useTranslations("common");

  return (
    <section className="flex flex-col md:flex-row px-7 lg:px-0 max-w-6xl mx-auto py-10 pb-10 gap-8">
      <div className="flex-1 flex flex-col gap-6">
        <h2 className="text-4xl font-bold text-grayShades-100">
          <span className="text-blueShades-300">
            {t("AboutUs.whoWeAre.highlighted")}
          </span>{" "}
          {t("AboutUs.whoWeAre.title")}
        </h2>
        <p className="text-lg text-grayShades-100">
          {t("AboutUs.whoWeAre.description")}

          {/* TLC Trading & Contracting Co. Ltd. is a 100% Saudi-owned
          Construction Company was incorporated in 1993, operating from our main
          office along Khurais road. Since that time our manpower and facilities
          had increased to do highly sophisticated kind of engineering tasks
          that is unique for each of our clients such as Design, Supply,
          Installation and Commissioning of Power Transmission Lines;
          Installation, maintenance and modernisation of Gas Turbines. Design,
          Supply, Installation and */}
        </p>
      </div>
  <UseMediaModal type="video" link="/vids/test.mp4">
        <VideoPart />
      </UseMediaModal>    </section>
  );
}
