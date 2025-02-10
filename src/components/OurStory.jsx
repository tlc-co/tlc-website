import { useTranslations } from "next-intl";
import Image from "next/image";

export default function OurStory() {
  const t = useTranslations("common");

  return (
    <section className="flex flex-col md:flex-row-reverse px-7 lg:px-0 max-w-6xl mx-auto py-10 gap-8">
      <div className="flex-1 flex flex-col gap-6">
        <div className="flex flex-col gap-6">
          <h2 className="text-2xl font-bold text-grayShades-100">
            {t("AboutUs.ourLegacy.title")}
          </h2>
          <p className="text-lg text-grayShades-100">
            {t("AboutUs.ourLegacy.description")}
          </p>
        </div>
        <div className="flex flex-col gap-6">
          <h2 className="text-2xl font-bold text-grayShades-100">
            {t("AboutUs.ourMission.title")}
          </h2>
          <p className="text-lg text-grayShades-100">
            {t("AboutUs.ourMission.description")}
          </p>
        </div>
      </div>
      <div className="rounded-lg flex-1 relative after:content-[''] after:absolute after:bg-center after:w-1/2 after:top-3/4 after:h-1/2 after:left-1/2 after:-translate-x-1/2 after:bg-[url('/shape-2.png')] after:z-[-1] z-20 after:bg-no-repeat">
        <div className="rounded-lg overflow-hidden">
          <Image
            width={500}
            height={500}
            src="/our-story.png"
            className="w-full h-fulla object-cover"
            alt="image"
          />
        </div>
      </div>
    </section>
  );
}
