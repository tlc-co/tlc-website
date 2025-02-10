import { useTranslations } from "next-intl";
import Image from "next/image";
import { FaCheck } from "react-icons/fa6";

export default function AdvantagesSection() {
  const t = useTranslations("common.AboutUs");

  const advantages = [
    {
      id: 1,
      title: t("ourVision.title"),
      description: t("ourVision.description"),
    },
    {
      id: 2,
      title: t("Integrity.title"),
      description: t("Integrity.description"),
    },
    {
      id: 3,
      title: t("Innovation.title"),
      description: t("Innovation.description"),
    },
    {
      id: 4,
      title: t("Reliability.title"),
      description: t("Reliability.description"),
    },
    {
      id: 5,
      title: t("Local-Manufacturing.title"),
      description: t("Local-Manufacturing.description"),
    },
  ];

  return (
    <section className="w- relative lg:px-0 max-w-6xl mx-auto py-10 grid grid-cols-1 md:grid-cols-2 gap-3 ">
      {advantages.map((advantage) => (
        <div
          key={advantage.id}
          className="p-5 rounded-lg flex gap-3 text-blueShades-500"
        >
          <div className="flex items-center justify-center h-fit text-blueShades-700 bg-grayShades-500 p-2 rounded-full">
            <FaCheck className="text-3xl" />
          </div>
          <div>
            <h2 className="text-xl font-bold">{advantage.title}</h2>
            <p className="mt-2 text-grayShades-600">{advantage.description}</p>
          </div>
        </div>
      ))}
      <div className=" absolute h-full w-full md:w-2/5 top-0 left-0 z-[-1]">
        <Image
          width={500}
          height={500}
          src={"/shape-1.png"}
          alt="image"
          className="w-8 animate-move-1 absolute top-12 right-32"
        />
        <Image
          width={500}
          height={500}
          src={"/shape-1.png"}
          alt="image"
          className="w-8 animate-move-2 absolute bottom-48 left-0"
        />
      </div>
    </section>
  );
}
