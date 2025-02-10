import LastAboutSection from "@/components/LastAboutSection";
import OurStory from "@/components/OurStory";
import InnerLayout from "@/components/shared/InnerLayout";
import AdvantagesSection from "@/components/whoWeAreSection.jsx/AdvantagesSection";
import WhoAboutSection from "@/components/whoWeAreSection.jsx/WhoAboutSection";
import { useTranslations } from "next-intl";

export default function AboutUs() {

  const t = useTranslations("common");

  const links = [
    { id: 1, title: "home", url: "/" },
    { id: 2, title: "About us" },
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
  return (
    <InnerLayout links={links} counterData={counterData}>
      <WhoAboutSection />
      <OurStory />
      <AdvantagesSection />
      <LastAboutSection />
    </InnerLayout>
  );
}
