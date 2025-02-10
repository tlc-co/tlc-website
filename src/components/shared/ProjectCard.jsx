import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function ProjectCard({ data, type }) {
  return (
    //edit by jaber
    <div className="relative h-[400px] overflow-clip rounded-xl after:content-[''] after:absolute after:top-0 after:right-0  after:w-full after:rounded-xl after:h-full after:bg-gradient-to-t after:from-secondary after:to-transparent ">
      <Image
        width={500}
        height={500}
        src={data.image}
        alt="certificate"
        className="h-full w-full object-cover"
      />

      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 text-blueShades-500 z-20 bg-white/90 w-[90%] h-40 px-2 py-6 rounded-xl flex items-center justify-center">
        <Link href={`/show/${type}?id=${data.id}`}>
        <p className="text-center text-sm md:text-base font-bold max-h-40 overflow-hidden line-clamp-3">

          {data.description}
        </p>
        </Link>
      </div>
    </div>
  );
}
