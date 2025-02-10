"use client";

import HeroSection from "../../../components/heroSection/HeroSection";
import OurProjects from "../../../components/OurProjects/OurProjects";
import WhoSection from "../../../components/whoWeAreSection.jsx/WhoSection";
import OurSectors from "@/components/ourSectors/OurSectors";
import ContactSection from "@/components/homeContact/ContactSection";
import OurNews from "@/components/OurNews";
import OurPartners from "@/components/OurPartners/OurPartners";
import Aos from "aos";
import { use, useEffect } from "react";
import "aos/dist/aos.css";

export default function Home({ params }) {
  const locale = use(params).locale;

  useEffect(() => {
    Aos.init({
      duration: 700, // Animation duration in milliseconds
      once: false, // Whether animation should happen only once
      mirror: false, // Whether elements should animate out while scrolling past them
    });
  }, []);

  return (
    <div className="w-full h-full">
      <HeroSection />
      <WhoSection />
      <OurSectors locale={locale} />
      <ContactSection />
      <OurProjects locale={locale} />
      <OurNews locale={locale} />
      <OurPartners locale={locale} />
    </div>
  );
}
