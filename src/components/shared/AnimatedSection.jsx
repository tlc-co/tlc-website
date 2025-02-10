"use client";

import Image from "next/image";
import Aos from "aos";
import { useEffect } from "react";
import "aos/dist/aos.css";

export default function AnimatedSection({ imageUrl, children }) {
  useEffect(() => {
    Aos.init({
      duration: 700, // Animation duration in milliseconds
      once: false, // Whether animation should happen only once
      mirror: false, // Whether elements should animate out while scrolling past them
    });
  }, []);
  //edit by jaber
  return (
    <section className="w-full flex relative flex-col md:flex-row gap-10 ">
      <div className="md:w-2/5 h-fit relative after:content-[''] after:absolute after:bg-center after:w-1/2 after:top-3/4 after:h-1/2 after:left-1/2 after:-translate-x-1/2 after:bg-[url('/shape-2.png')] after:z-[-1] z-20 after:bg-no-repeat">
        <div
          data-aos="fade-right"
          className="max-h-80 rounded-xl overflow-clip relative "
        >
          <Image
            width={500}
            height={500}
            src={imageUrl}
            alt="image"
            className="h-full w-full object-cover"
          />
        </div>
      </div>

      <div className=" absolute h-full w-full md:w-2/5 top-0 left-0 z-[-1]">
        <Image
          width={500}
          height={500}
          src={"/shape-1.png"}
          alt="image"
          className="w-8 animate-move-1 absolute top-[40%] right-20 md:top-[90%] md:right-0"
        />
        <Image
          width={500}
          height={500}
          src={"/shape-1.png"}
          alt="image"
          className="w-8 animate-move-2 absolute md:left-0 xl:top-20 xl:-left-1/2"
        />
      </div>
      <div
        data-aos="fade-left"
        className="md:w-3/5 flex flex-col gap-8 rtl:pr-3"
      >
        {children}
      </div>
    </section>
  );
}
