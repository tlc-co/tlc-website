import InnerLayout from "@/components/shared/InnerLayout";
import Accordion from "@/components/ui/Accordion";
import CareerForm from "@/components/ui/forms/CareerForm";
import { useTranslations } from "next-intl";

const links = [
  { id: 1, title: "HOME", url: "/" },
  { id: 2, title: "Health And Safety" },
];

const AccordionData = [
  {
    id: 1,
    title: "Control review",
    desc: "HR Officer for Raissi",
  },
  {
    id: 2,
    title: "Sales Manager",
    desc: "Sales Manager at Raissi Company",
  },
  {
    id: 3,
    title: "Customer Receptionist",
    desc: "Customer Receptionist at Raissi Company",
  },
];

export default function Career() {

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
      <section className="w-full flex gap-4 flex-col-reverse md:flex-row">
        <div className="flex-1">
          <CareerForm data={AccordionData} />
        </div>
        <div className="flex-1 w-full flex flex-col gap-2">
          {AccordionData.map((item) => (
            <Accordion data={item} key={item.id} />
          ))}
        </div>{" "}
      </section>
    </InnerLayout>
  );
}
