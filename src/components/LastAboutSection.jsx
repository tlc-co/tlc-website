import { useTranslations } from "next-intl";
import Image from "next/image";

export default function LastAboutSection() {

  const t = useTranslations("common.AboutUs");

  const data = [
    {
      id: 1,
      description: t("features.feature-1"),
      icon: "/aboutIcons/icon-1.png",
    },
    {
      id: 2,
      description: t("features.feature-2"),
      icon: "/aboutIcons/icon-2.png",
    },
    {
      id: 3,
      description: t("features.feature-3"),
      icon: "/aboutIcons/icon-3.png",
    },
  ];

  return (
    <div className="flex gap-10 justify-center flex-wrap">
      {data.map((item) => (
        <div key={item.id} className="flex max-w-80 hover:-translate-y-4 transition-transform group p-6 shadow min-h-full items-center flex-col gap-4">
          <Image
            width={500}
            height={500}
            src={item.icon}
            alt="icon"
            className="size-16 group-hover:animate-icon-animation"
          />
          <p className="text-center text-lg text-blueShades-500">{item.description}</p>
        </div>
      ))}
    </div>
  );
}
