import InnerLayout from "@/components/shared/InnerLayout";
import { TiLocationOutline } from "react-icons/ti";
import { BsTelephone } from "react-icons/bs";
import { IoLogoWhatsapp } from "react-icons/io5";
import { MdAlternateEmail } from "react-icons/md";
import Link from "next/link";
import { useTranslations } from "next-intl";

const links = [
  { id: 1, title: "HOME", url: "/" },
  { id: 2, title: "Contact Us" },
];

export default function Contact() {
  const t = useTranslations("common");

  const contactData = [
    {
      id: 1,
      title: t("contactUs.officeAddress"),
      link: "https://maps.app.goo.gl/x21FvkFKz2Lx8gKZ9",
      desc: "Riyadh 14328-8196, Riyadh, Saudi Arabia",
      icon: <TiLocationOutline size={50} />,
    },
    {
      id: 2,
      title: t("contactUs.unifiedNumber"),
      desc: "+966 55 613 6600",
      link: "tel:+966556136600",
      icon: <BsTelephone size={50} />,
    },
    {
      id: 3,
      title: t("contactUs.unifiedNumber"),
      desc: "+966 57 049 3675",
      link: "tel:+966570493675",
      icon: <BsTelephone size={50} />,
    },
    {
      id: 4,
      title: t("contactUs.whatsApp"),
      desc: "+966 57 049 3675",
      link: "https://wa.me/+966570493675",
      icon: <IoLogoWhatsapp size={50} />,
    },
    {
      id: 5,
      title: t("contactUs.fax"),
      desc: "+966500194017",
      link: "tel:+966500194017",
      icon: <BsTelephone size={50} />,
    },
    {
      id: 6,
      title: t("contactUs.unifiedEmail"),
      desc: "info@saTLC.com",
      link: "mailto:info@saTLC.com",
      icon: <MdAlternateEmail size={50} />,
    },
  ];

  return (
    <InnerLayout links={links}>
      <section className="w-full flex justify-center flex-wrap gap-4">
        {contactData.map((item) => (
          <Link
            href={item.link}
            className="w-full max-w-96 md:w-72 block"
            target="_blank"
            rel="noopener noreferrer"
            key={item.id}
          >
            <div className="bg-contactBg flex h-full flex-col gap-4 justify-center items-center px-5 py-8 rounded-lg shadow-lg">
              <div className="size-20 bg-white flex items-center justify-center rounded-full text-iconColor font-bold">
                {item.icon}
              </div>

              <span className="block font-bold text-center text-lg">
                {item.title}
              </span>
              <p className="text-center">{item.desc}</p>
            </div>
          </Link>
        ))}
      </section>
    </InnerLayout>
  );
}
