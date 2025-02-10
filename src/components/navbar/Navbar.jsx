"use client";
import { HiMagnifyingGlass } from "react-icons/hi2";
import { GrLanguage } from "react-icons/gr";
import { MdKeyboardArrowDown } from "react-icons/md";
import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross2 } from "react-icons/rx";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import LanguageSwitcher from "../LangSwitcher";
import { useTranslations } from "next-intl";
import SearchModal from "../search/SearchModal";

export default function Navbar() {
  const [menuIsExpanded, setMenuIsExpanded] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const t = useTranslations("common.navbar");

  return (
    <header className="w-full absolute z-50 left-0 top-0 h-fit bg-white md:bg-white/25 min=h-[88px] flex lg:gap-4 items-center">
      <div className="w-[150px] relative h-fit min-h-[88px] flex-1 flex items-center md:justify-center">
        <Link href="/" className="flex items-center justify-center">
          <Image
            src="/logo-new.png"
            alt="logo"
            width={120}
            height={50}
            className="object-contain"
          />
        </Link>
      </div>
      <nav className="flex-1 text-sm lg:text-base xl:flex-[3] overflow-visible hidden md:flex items-center h-fit min-h-[88px] relative">
        <ul className="inline-flex items-center gap-2 xl:gap-6 h-fit min-h-[88px] text-white  font-semibold relative">
          <li className="border-b-2 border-transparent hover:border-white h-fit min-h-[88px] text-center flex items-center md:px-2 lg:px-4 hover:bg-white/30 cursor-pointer">
            <Link href="/">{t("home")}</Link>
          </li>
          <li className="border-b-2 border-transparent hover:border-white h-fit min-h-[88px] text-center flex items-center md:px-2 lg:px-4 hover:bg-white/30 cursor-pointer relative group">
            <div className="w-full relative flex items-center gap-1">
              <Link href="/about-us">{t("about_us")}</Link>
              <MdKeyboardArrowDown size={20} />

              {/* Dropdown */}
              <div className="dropdown w-[230px] absolute top-[220%] -left-5 bg-white text-black text-base font-semibold p-4 rounded shadow-lg">
                <ul>
                  {/* <li className="border-b border-gray-300 hover:border-gray-800 px-2 py-3 cursor-pointer">
                    <Link href="/certificates">{t("certificates")}</Link>
                  </li> */}
                  <li className="border-b border-gray-300 hover:border-gray-800 px-2 py-3 cursor-pointer">
                    <Link href="/health">{t("health")}</Link>
                  </li>
                  <li className="border-b border-gray-300 hover:border-gray-800 px-2 py-3 cursor-pointer">
                    <Link href="/policies">{t("policy")}</Link>
                  </li>
                  {/* <li className="border-b border-gray-300 hover:border-gray-800 px-2 py-3 cursor-pointer">
                    <Link href="/vendors">{t("vendor")}</Link>
                  </li> */}
                  <li className="border-b border-gray-300 hover:border-gray-800 px-2 py-3 cursor-pointer">
                    <Link href="/works">{t("gallery")}</Link>
                  </li>
                  <li className="border-b border-gray-300 hover:border-gray-800 px-2 py-3 cursor-pointer">
                    <Link href="/about-us">{t("about_us")}</Link>
                  </li>
                  {/* <li className="px-2 py-3 cursor-pointer">الميزانية</li> */}
                </ul>
              </div>
            </div>
          </li>

          <li className="border-b-2 border-transparent hover:border-white h-fit min-h-[88px] text-center flex items-center md:px-2 lg:px-4 hover:bg-white/30 cursor-pointer">
            <Link href="/ourServices">{t("services")}</Link>
          </li>
          <li className="border-b-2 border-transparent hover:border-white h-fit min-h-[88px] text-center flex items-center md:px-2 lg:px-4 hover:bg-white/30 cursor-pointer">
            <Link href="/projects">{t("projects")}</Link>
          </li>
          {/* <li className="border-b-2 border-transparent hover:border-white h-fit min-h-[88px] text-center flex items-center md:px-2 lg:px-4 hover:bg-white/30 cursor-pointer">
            <Link href="/career">{t("career")}</Link>
          </li> */}
          <li className="border-b-2 border-transparent hover:border-white h-fit min-h-[88px] text-center flex items-center md:px-2 lg:px-4 hover:bg-white/30 cursor-pointer">
            <Link href="/contact">{t("contact")}</Link>
          </li>
        </ul>
      </nav>

      <div className="flex px-2 justify-end md:justify-start items-center flex-[1] text-secondary md:text-white gap-2 lg:gap-4">
        <HiMagnifyingGlass size={25} className="cursor-pointer" onClick={() => setIsSearchOpen(true)} />

        <div className="flex flex-col lg:flex-row items-center gap-1 lg:gap-2 cursor-pointer">
          <LanguageSwitcher />
          <GrLanguage size={20} className="md:block hidden" />
        </div>

        <a
          href="/file.pdf"
          download="file.pdf"
          className="h-full btn rounded-3xl py-[11px] hover:bg-secondary hover:text-white text-nowrap transition duration-300 bg-white md:block hidden !px-2 lg:!px-6 text-black text-xs lg:text-sm font-bold 
  
  "
        >
          Download profile
        </a>

        {/* mob nav */}
        <div className="md:hidden block">
          <div
            className="bg-secondary p-[5px] rounded text-white cursor-pointer"
            onClick={() => setMenuIsExpanded(true)}
          >
            <RxHamburgerMenu size={25} />
          </div>

          <div
            className={`${
              menuIsExpanded ? "" : "hidden"
            } w-screen h-screen bg-secondary/35 absolute top-0 left-0 z-40`}
            onClick={() => setMenuIsExpanded(false)}
          />

          <aside
            className={`${
              menuIsExpanded ? "translate-x-0" : "-translate-x-full"
            } transition duration-300 w-[70%] sm:w-[45%] h-screen fixed top-0 left-0 bg-secondary z-50 text-white`}
          >
            <div
              className="w-fit cursor-pointer p-8"
              onClick={() => setMenuIsExpanded(false)}
            >
              <RxCross2 size={30} />
            </div>

            <div className="w-full">
              <ul>
                {/* Other Menu Items */}
                <li className="border-b border-white hover:bg-white transition duration-300 hover:text-black px-2 py-3 text-center cursor-pointer">
                  <Link href="/">{t("home")}</Link>
                </li>
                <li
                  onClick={() => setIsExpanded(!isExpanded)}
                  className="border-b border-white hover:bg-white transition duration-300 hover:text-black px-2 py-3 text-center cursor-pointer relative"
                >
                  <Link href="/about-us">{t("about_us")}</Link>
                  {/* Expandable Dropdown */}
                  <div
                    className={`w-full overflow-hidden transition-all duration-300 ease-in-out ${
                      isExpanded ? "max-h-[500px]" : "max-h-0"
                    }`}
                  >
                    <ul className="mt-2 mx-auto text-center rounded shadow-lg">
                      {/* <li className="px-2 py-3 cursor-pointer">
                        <Link href="/certificates">{t("certificates")}</Link>
                      </li> */}
                      <li className="px-2 py-3 cursor-pointer">
                        <Link href="/policies">{t("policy")}</Link>
                      </li>
                      {/* <li className="px-2 py-3 cursor-pointer">
                        <Link href="/vendors">{t("vendor")}</Link>
                      </li> */}
                      <li className="px-2 py-3 cursor-pointer">
                        <Link href="/works">{t("gallery")}</Link>
                      </li>
                      <li className="px-2 py-3 cursor-pointer">
                        <Link href="/about-us">{t("about_us")}</Link>
                      </li>
                      <li className="px-2 py-3 cursor-pointer"></li>
                    </ul>
                  </div>
                </li>
                <li className="border-b border-white hover:bg-white transition duration-300 hover:text-black px-2 py-3 text-center cursor-pointer">
                  <Link href="/ourServices">{t("services")}</Link>
                </li>
                <li className="border-b border-white hover:bg-white transition duration-300 hover:text-black px-2 py-3 text-center cursor-pointer">
                  <Link href="/projects">{t("projects")}</Link>
                </li>
                {/* <li className="border-b border-white hover:bg-white transition duration-300 hover:text-black px-2 py-3 text-center cursor-pointer">
                  <Link href="/career">{t("career")}</Link>
                </li> */}
                <li className="border-b border-white hover:bg-white transition duration-300 hover:text-black px-2 py-3 text-center cursor-pointer">
                  <Link href="/contact">{t("contact")}</Link>
                </li>
              </ul>
            </div>
          </aside>
        </div>
      </div>
      <SearchModal isOpen={isSearchOpen} setIsOpen={setIsSearchOpen} />
    </header>
  );
}
