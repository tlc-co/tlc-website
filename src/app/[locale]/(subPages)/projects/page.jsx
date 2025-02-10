"use client";

import InnerLayout from "@/components/shared/InnerLayout";
import React, { use, useState } from "react";
import Aos from "aos";
import { useEffect } from "react";
import "aos/dist/aos.css";
import fullData from "@/data/FullData.json";
import ProjectCard from "@/components/shared/ProjectCard";
import { useTranslations } from "next-intl";

export default function Projects({ params }) {

  const t = useTranslations("common");

  const [projects, setProjects] = useState([]);

  const links = [
    { id: 1, title: "HOME", url: "/" },
    { id: 2, title: "Projects" },
  ];

  const counterData = {
    mainTitle: t("achievements.mainTitle"),
    data: [
      { id: 1, title: t("achievements.achievement-1"), count: 200 },
      { id: 2, title: t("achievements.achievement-2"), count: 140 },
      { id: 3, title: t("achievements.achievement-3"), count: 50 },
      { id: 4, title: t("achievements.achievement-4"), count: 5 },
    ],
  };

  const locale = use(params).locale;

  useEffect(() => {
    Aos.init({
      duration: 700,
      once: false,
      mirror: false,
    });

    // Adjust project data based on the current language
    const localizedProjects = fullData.projects.map((project) => ({
      ...project,
      description: project.description[locale] || project.description["en"], // Fallback to English if no translation is available
    }));

    setProjects(localizedProjects); // Set the translated project data
  }, [locale]);

  return (
    <InnerLayout
      links={links}
      counterData={counterData}
      grid="grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
    >
      {projects.map((project) => (
        <div data-aos="fade-up" key={project.id}>
          <ProjectCard data={project} type="projects"/>
        </div>
      ))}
    </InnerLayout>
  );
}
