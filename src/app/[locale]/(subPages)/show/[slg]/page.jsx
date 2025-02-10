import AnimatedSection from "@/components/shared/AnimatedSection";
import InnerLayout from "@/components/shared/InnerLayout";
import FullData from "@/data/FullData.json";
import { useTranslations } from "next-intl";
import { use } from 'react';

export default function Page({ params, searchParams }) {

  const t = useTranslations("common");

  const counterData = {
    mainTitle: t("achievements.mainTitle"),
    data: [
      { id: 1, title: t("achievements.achievement-1"), count: 200 },
      { id: 2, title: t("achievements.achievement-2"), count: 140 },
      { id: 3, title: t("achievements.achievement-3"), count: 50 },
      { id: 4, title: t("achievements.achievement-4"), count: 5 },
    ],
  };

  const { locale, slg } = use(params); // Destructure `locale` and `slg` from params
  const { id } = use(searchParams); // Get `id` from searchParams
  
  // Fetch the relevant data
  const allData = FullData[slg];
  const currentData = allData.find((project) => project.id == id);

  if (!currentData) {
    return <div>Project not found</div>; // Handle missing data gracefully
  }

  const links = [
    { id: 1, title: "HOME", url: "/" },
    { id: 2, title: `${slg} / ${currentData.title[locale]}` },
  ];

  return (
    <InnerLayout links={links} counterData={counterData}>
      <AnimatedSection imageUrl={currentData.image}>
        <div className="w-full h-full space-y-2">
          {
              currentData?.description ? (
                <>
                  <span className="block text-xl font-bold">{locale === "en" ? "Description:" : "الوصف:"}</span>
                  <h3 className="text-lg font-semibold">
                    {currentData.description[locale] || "No description available"}
                  </h3>
                </>
              ) : ""
          }

          {
              currentData?.features ? (
                <>
                  <span className="block text-xl font-bold">{locale === "en" ? "Features:" : "المميزات:"}</span>
                  <ul className="text-lg font-semibold list-disc list-inside">
                    {currentData.features[locale].map((item) => {
                      return <li className="list-item" key={item}>{item}</li>;
                    })}
                  </ul>
                </>
              ) : ""
          }

          {
              currentData?.impact ? ( 
                <>
                  <span className="block text-xl font-bold">{locale === "en" ? "Impact:" : "التأثير:"}</span>
                  <p className="text-lg font-semibold">
                    {currentData.impact[locale]}
                  </p>
                </>
              ) : ""
          }
        </div>

      </AnimatedSection>
    </InnerLayout>
  );
}
