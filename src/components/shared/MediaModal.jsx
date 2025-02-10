"use client";
import Image from "next/image";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import { IoIosArrowDropleftCircle } from "react-icons/io";
import { ImCross } from "react-icons/im";
import { useState } from "react";

export default function MediaModal({ isOpen, setIsOpen, type, link, imgs }) {
  const [current, setCurrent] = useState(1);
  const imgsLength = imgs ? Object.keys(imgs).length : null;

  if (!isOpen) return null;

  const handleClick = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <div className="fixed top-0 left-0 z-50 w-screen h-screen ">
        <div
          className="absolute top-0 left-0 w-full h-full bg-secondary bg-opacity-50"
          onClick={handleClick}
        />

        {type === "image" ? (
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full md:w-[70%] md:h-[70%]">
            <div className="relative w-full h-full">
              <Image
                width={500}
                height={500}
                src={link}
                alt="whoWeAre"
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        ) : type === "video" ? (
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] h-fit md:w-[70%] md:h-[70%]">
            <iframe
              width="100%"
              height="100%"
              src={link}
              title="video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
        ) : imgs ? (
          <div className="absolute flex justify-center items-center gap-2 md:gap-32 w-full h-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <div
              className="absolute right-8 top-8 text-rose-100 cursor-pointer z-50"
              onClick={() => setIsOpen(false)}
            >
              <ImCross size={25} />
            </div>

            <div
              className="absolute left-4 top-1/2 -translate-y-1/2 text-secondary cursor-pointer z-50"
              onClick={() => setCurrent(current !== 1 ? current - 1 : 1)}
            >
              <IoIosArrowDropleftCircle size={40} />
            </div>
            <div className="w-full h-full md:w-[70%] md:h-[70%]">
              <div className="relative w-full h-full">
                <Image
                  width={500}
                  height={500}
                  src={imgs[current]}
                  alt={`img-${imgs[current]}`}
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
            <div
              className="absolute right-4 top-1/2 -translate-y-1/2 text-secondary cursor-pointer"
              onClick={() =>
                setCurrent(
                  current >= 1 && current < imgsLength ? current + 1 : 1
                )
              }
            >
              <IoIosArrowDroprightCircle size={40} />
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
}
