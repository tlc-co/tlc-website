import AnimatedSection from "@/components/shared/AnimatedSection";
import InnerLayout from "@/components/shared/InnerLayout";
import { useTranslations } from "next-intl";
import fullData from "@/data/FullData.json";
import { use } from "react";

export default function Policies({ params }) {
  const locale = use(params).locale;

  const t = useTranslations("common");

  const links = [
    { id: 1, title: "HOME", url: "/" },
    { id: 2, title: "Policies" },
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

  const policies = fullData.policies;
  const auditingPhases = fullData.auditingPhases;

  return (
    <InnerLayout links={links} counterData={counterData}>
      <AnimatedSection imageUrl="/policy.jpg">
        <div>
          <div>
            <h3 className="text-xl font-semibold mb-3">{t("policies.title")}</h3>

            {policies.map((policy) => (
              <div key={policy.id} className="mb-5">
                <h4 className="text-lg font-medium">{policy.title[locale]}</h4>
                <ul className="list-disc pl-5">
                  {policy?.policies[locale].map((policy, index) => (
                    <li key={index} className="mt-2">
                      {policy}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-3">{t("auditing.title")}</h3>

            {auditingPhases.map((phase) => (
              <div key={phase.id} className="mb-5">
                <h4 className="text-lg font-medium">{phase.title[locale]}</h4>
                <p>{phase.description[locale]}</p>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>
    </InnerLayout>
  );
}
