"use client";

import InnerLayout from "@/components/shared/InnerLayout";
import Aos from "aos";
import { use, useEffect } from "react";
import "aos/dist/aos.css";
import BusinessCard from "@/components/OurBusiness/BusinessCard";
import { useTranslations } from "next-intl";
import fullData from "@/data/FullData.json";

export default function OurServices({ params }) {

  const locale = use(params).locale

  const t = useTranslations("common");

  const links = [
    { id: 1, title: "HOME", url: "/" },
    { id: 2, title: "Our Services" },
  ];

  const services = fullData.services

  const counterData = {
    mainTitle: t("achievements.mainTitle"),
    data: [
      { id: 1, title: t("achievements.achievement-1"), count: 200 },
      { id: 2, title: t("achievements.achievement-2"), count: 140 },
      { id: 3, title: t("achievements.achievement-3"), count: 50 },
      { id: 4, title: t("achievements.achievement-4"), count: 5 },
    ],
  };

  

  useEffect(() => {
    Aos.init({
      duration: 700, // Animation duration in milliseconds
      once: false, // Whether animation should happen only once
      mirror: false, // Whether elements should animate out while scrolling past them
    });
  }, []);
  return (
    <InnerLayout
      links={links}
      counterData={counterData}
      grid="grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
    >
      {services.map((service) => (
        <div data-aos="fade-up" key={service.id}>
          <BusinessCard locale={locale} {...service} />
        </div>
      ))}
    </InnerLayout>
  );
}
