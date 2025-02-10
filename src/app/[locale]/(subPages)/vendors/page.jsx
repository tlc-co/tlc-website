import InnerLayout from "@/components/shared/InnerLayout";
import VendorCard from "@/components/shared/VendorCard";
import { useTranslations } from "next-intl";

export default function Vendors() {

  const t = useTranslations("common");

  const links = [
    { id: 1, title: "HOME", url: "/" },
    { id: 2, title: "Vendor Registration List" },
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

  const vendorsData = [
    {
      id: 1,
      title: "Dun & Brad Street South Asia Middle East L t d.",
      registrationNum: "1000809",
      image: "/vendor.jpg",
    },
    {
      id: 2,
      title: "Dun & Brad Street South Asia Middle East L t d.",
      registrationNum: "1000809",
      image: "/vendor.jpg",
    },
    {
      id: 3,
      title: "Dun & Brad Street South Asia Middle East L t d.",
      registrationNum: "1000809",
      image: "/vendor.jpg",
    },
    {
      id: 4,
      title: "Dun & Brad Street South Asia Middle East L t d.",
      registrationNum: "1000809",
      image: "/vendor.jpg",
    },
    {
      id: 5,
      title: "Dun & Brad Street South Asia Middle East L t d.",
      registrationNum: "1000809",
      image: "/vendor.jpg",
    },
    {
      id: 6,
      title: "Dun & Brad Street South Asia Middle East L t d.",
      registrationNum: "1000809",
      image: "/vendor.jpg",
    },
    {
      id: 7,
      title: "Dun & Brad Street South Asia Middle East L t d.",
      registrationNum: "1000809",
      image: "/vendor.jpg",
    },
    {
      id: 8,
      title: "Dun & Brad Street South Asia Middle East L t d.",
      registrationNum: "1000809",
      image: "/vendor.jpg",
    },
    {
      id: 9,
      title: "Dun & Brad Street South Asia Middle East L t d.",
      registrationNum: "1000809",
      image: "/vendor.jpg",
    },
    {
      id: 10,
      title: "Dun & Brad Street South Asia Middle East L t d.",
      registrationNum: "1000809",
      image: "/vendor.jpg",
    },
    {
      id: 11,
      title: "Dun & Brad Street South Asia Middle East L t d.",
      registrationNum: "1000809",
      image: "/vendor.jpg",
    },
    {
      id: 12,
      title: "Dun & Brad Street South Asia Middle East L t d.",
      registrationNum: "1000809",
      image: "/vendor.jpg",
    },
    {
      id: 13,
      title: "Dun & Brad Street South Asia Middle East L t d.",
      registrationNum: "1000809",
      image: "/vendor.jpg",
    },
    {
      id: 14,
      title: "Dun & Brad Street South Asia Middle East L t d.",
      registrationNum: "1000809",
      image: "/vendor.jpg",
    },
    {
      id: 15,
      title: "Dun & Brad Street South Asia Middle East L t d.",
      registrationNum: "1000809",
      image: "/vendor.jpg",
    },
    {
      id: 16,
      title: "Dun & Brad Street South Asia Middle East L t d.",
      registrationNum: "1000809",
      image: "/vendor.jpg",
    },
    {
      id: 17,
      title: "Dun & Brad Street South Asia Middle East L t d.",
      registrationNum: "1000809",
      image: "/vendor.jpg",
    },
    {
      id: 18,
      title: "Dun & Brad Street South Asia Middle East L t d.",
      registrationNum: "1000809",
      image: "/vendor.jpg",
    },
    {
      id: 19,
      title: "Dun & Brad Street South Asia Middle East L t d.",
      registrationNum: "1000809",
      image: "/vendor.jpg",
    },
    {
      id: 20,
      title: "Dun & Brad Street South Asia Middle East L t d.",
      registrationNum: "1000809",
      image: "/vendor.jpg",
    },
  ];

  return (
    <InnerLayout
      links={links}
      counterData={counterData}
      grid="grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-y-3 gap-x-7"
    >
      {vendorsData.map((vendor) => (
        <VendorCard key={vendor.id} data={vendor} />
      ))}
    </InnerLayout>
  );
}
