import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";

export default function BusinessCard({
  id,
  title,
  description,
  moreBtn,
  icon,
  i,
  locale
}) {
  return (
    <Link
      href={`/show/services?id=${id}`}
      className={`flex flex-col gap-10 ${
        moreBtn ? "border" : "shadow-lg"
      } rounded-xl p-4 min-h-96 snap-start transition-transform hover:-translate-y-4 group`}
    >
      <div className="flex justify-between items-center">
        <div className="w-16 group-hover:animate-icon-animation">
          <Image
            src={icon}
            alt={title}
            width={500}
            height={500}
            className="object-cover h-full object-center"
          />
        </div>
        {typeof i === "number" && (
          <span className="text-transparent text-border text-5xl">
            {i + 1 < 10 ? `0${i + 1}` : i + 1}
          </span>
        )}
      </div>
      <div className="flex flex-col gap-10">
        <h4 className="font-bold text-lg text-blueShades-500">{title[locale]}</h4>
        <p className="text-sm md:text-lg text-grayShades-200 overflow-hidden line-clamp-4">{description[locale]}</p>
        {moreBtn && (
          <div className="text-mainOrange flex items-center gap-2 hover:text-blueShades-300 capitalize transition-colors font-bold">
            more <FaArrowRight />
          </div>
        )}
      </div>
    </Link>
  );
}
