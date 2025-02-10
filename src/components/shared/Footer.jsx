import { useTranslations } from "next-intl";
import Link from "next/link";
import { CiLocationOn } from "react-icons/ci";
import { FaPhone } from "react-icons/fa";
import { FaFax } from "react-icons/fa";
import { FaGlobe } from "react-icons/fa";
import { FaHeart } from "react-icons/fa6";

export default function Footer() {
  const t = useTranslations("common");

  const contactInfo = [
    {
      icon: <CiLocationOn />,
      title: "Riyadh 14328-8196, Riyadh, Saudi Arabia",
      link: "https://maps.app.goo.gl/x21FvkFKz2Lx8gKZ9",
    },
    {
      icon: <FaPhone />,
      title: "+966 55 613 6600",
      link: "tel:+966556136600",
    },
    {
      icon: <FaPhone />,
      title: "+966 57 049 3675",
      link: "tel:+966570493675",
    },
    {
      icon: <FaFax />,
      title: "+966500194017",
      link: "tel:+966500194017",
    },
    {
      icon: <FaGlobe />,
      title: "info@saTLC.com",
      link: "mailto:info@saTLC.com",
    },
  ];

  return (
    <footer className="bg-[url('/footer-bg.png')] bg-contain bg-bottom pt-10 bg-no-repeat">
      <div className="max-w-6xl relative flex flex-col gap-14 lg:flex-row z-10 mx-auto mt-10 px-7 lg:px-0">
        <div className="flex flex-col gap-4 flex-1">
          <div className="flex flex-col md:flex-row justify-between gap-4 md:items-center ">
            <h3 className="text-2xl md:text-3xl  font-bold capitalize text-black  ">
              <span className="text-blueShades-300">
                {t("footer.highlighted")}
              </span>{" "}
              {t("footer.title")}:
            </h3>
          </div>

          <div className="flex flex-col gap-5 mt-10">
            {contactInfo.map((info, i) => (
              <div
                key={i}
                className="flex items-center gap-6 hover:text-mainOrange transition-colors text-black text-xl"
              >
                <span className="p-2 text-mainOrange rounded-lg shadow-md">
                  {info.icon}
                </span>
                <a
                  href={info.link}
                  className="text-lg font-semibold"
                  target="_blank"
                >
                  {info.title}
                </a>
              </div>
            ))}
          </div>
        </div>
        <div className="flex-1">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14510.42360232172!2d46.894046405587716!3d24.602793595995717!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2fa6861762ac27%3A0xcff90316973560ec!2z2KfZhNmF2LTYp9i52YTYjCDYp9mE2LHZitin2LYgMTQzMjjYjCDYp9mE2LPYudmI2K_Zitip!5e0!3m2!1sar!2seg!4v1735398687007!5m2!1sar!2seg"
            width="100%"
            height="100%"
            style={{ border: "0" }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
      <div className="w-full flex justify-center items-center py-3 mt-10 gap-1 bg-grayShades-300">
        <p className="text-center">{t("developed.title")}</p>
        <FaHeart className="text-blueShades-300" />
        <span>{t("developed.subTitle")}</span>
        <Link
          href="https://arg-tr.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blueShades-300 cursor-pointer font-bold"
        >
          ARG
        </Link>
      </div>
    </footer>
  );
}
