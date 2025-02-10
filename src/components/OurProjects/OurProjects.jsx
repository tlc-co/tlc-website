import { FaArrowRight } from "react-icons/fa6";
import Btn from "../ui/btns/Btn";
import Image from "next/image";
import Link from "next/link";
import fullData from "@/data/FullData.json";
import { useTranslations } from "next-intl";

export default function OurProjects({ locale }) {

  const t = useTranslations("common")

  // const projects = [
  //   {
  //     id: 1,
  //     title:
  //       " Bisha Cement Plant Awarded to TLC Trading & Contracting Co. a prestigious ",
  //     description:
  //       " Bisha Cement Plant Awarded to TLC Trading & Contracting Co. a prestigious project for Fabrication and Installation of vent duct...",
  //     image: "/projects/proj-1.webp",
  //   },
  //   {
  //     id: 2,
  //     title: "  Construction of 132kV Double Circuit ",
  //     description:
  //       "Overhead Line from S/S 8068(Huraimala) to S/S 8502 (Hawat Sudayr) Location : Riyadh Client: Saudi Electricity Company Year of Completion:...",
  //     image: "/projects/proj-2.jpg",
  //   },
  //   {
  //     id: 3,
  //     title: "  Construction of a 115 kV double overhead circular line ",
  //     description:
  //       " from existing 115kV line of GOSP 1, 4, 5, 7 & 8 Location : Dammam Client: Saudi Aramco(MRK) Year of...",
  //     image: "/projects/proj-3.jpg",
  //   },
  //   {
  //     id: 4,
  //     title: " Construction of 132kV Double Circuit ",
  //     description:
  //       " Overhead Line from S/S 9009(PP#9) to S/S 8505(Rumah) Location : Riyadh Client: Saudi Electricity Company Year of Completion: 2005",
  //     image: "/projects/proj-4.jpg",
  //   },
  // ];

  const projects = fullData.projects.slice(0, 4);

  return (
    <section className="max-w-6xl mx-auto my-10 px-7 lg:px-0">
      <div className="flex flex-col md:flex-row justify-between gap-4 md:items-center">
        <h3 className="text-2xl md:text-3xl  font-bold capitalize">
          <span className="text-blueShades-300">{t("ourProjects.highlighted")}</span> {locale === "en" ? t("ourProjects.title") : ""}
        </h3>

        <Btn
          bg="bg-white text-xs md:px-6 md:py-2 md:text-lg w-fit"
          color="text-blueShades-300 border border-blueShades-300 font-bold"
          text={t("viewAll")}
          url="/projects"
          icon={<FaArrowRight />}
          rounded="rounded-3xl"
          hover="hover:bg-secondary hover:text-white"
        />
      </div>

      <div className="mt-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className="flex flex-col md:flex-row gap-6 border rounded-xl p-4"
            >
              <div className="min-w-[200px] h-[200px] overflow-clip rounded-3xl ">
                <Image
                  src={project.image}
                  alt={project.title[locale]}
                  width={500}
                  height={500}
                  className="object-cover h-full w-full object-center"
                />
              </div>
              <div className="flex flex-col min-h-full gap-3">
                <h4 className="font-bold">{project.title[locale]}</h4>
                <p className="text-sm md:text-base text-grayShades-200 overflow-hidden line-clamp-4">
                  {project.description[locale]}
                </p>
                <Link
                  href={`/show/projects?id=${project.id}`}
                  className="text-blueShades-300 flex items-center gap-2 hover:text-mainOrange transition-colors font-bold"
                >
                  {t("more")} <FaArrowRight />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
