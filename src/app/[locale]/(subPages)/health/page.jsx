import AnimatedSection from "@/components/shared/AnimatedSection";
import InnerLayout from "@/components/shared/InnerLayout";
import { useTranslations } from "next-intl";
import fullData from "@/data/FullData.json";
import { use } from "react";

export default function HealthAndSafety({ params }) {

  const locale = use(params).locale;


  const t = useTranslations("common");

  const links = [
    { id: 1, title: "HOME", url: "/" },
    { id: 2, title: "Health And Safety" },
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

  const standards = fullData.healthAndSafety

  return (
    <InnerLayout links={links} counterData={counterData}>
      <AnimatedSection imageUrl="/health.jpg">
        <h3 className="text-xl font-semibold">{t("healthAndSafety.title")}</h3>

        <p className="mt-1 text-lg">{t("healthAndSafety.subTitle")}</p>


        {standards.map((standard) => (
              <div key={standard.id} className="mb-5">
                <h4 className="text-lg font-medium">{standard.title[locale]}</h4>
                <ul className="list-disc pl-5">
                  {standard?.standards[locale].map((standard, index) => (
                    <li key={index} className="mt-2">
                      {standard}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
      </AnimatedSection>
    </InnerLayout>
  );
}
