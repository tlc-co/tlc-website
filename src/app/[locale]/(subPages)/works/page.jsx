import InnerLayout from "@/components/shared/InnerLayout";
import WorkSection from "@/components/work/WorkSection";
import { useTranslations } from "next-intl";

const links = [
  { id: 1, title: "HOME", url: "/" },
  { id: 2, title: "Gallery" },
];


export default function Works() {

  const t = useTranslations("common")

  const counterData = {
    mainTitle: t("achievements.mainTitle"),
    data: [
      { id: 1, title: t("achievements.achievement-1"), count: 200 },
      { id: 2, title: t("achievements.achievement-2"), count: 140 },
      { id: 3, title: t("achievements.achievement-3"), count: 50 },
      { id: 4, title: t("achievements.achievement-4"), count: 5 },
    ],
  };
  
  return (
    <InnerLayout links={links} counterData={counterData}>
      <WorkSection />
    </InnerLayout>
  );
}
