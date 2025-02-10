import Image from "next/image";
import React from "react";
import { CiSearch } from "react-icons/ci";

export default function CertificateCard({ certificate }) {
  return (
    <div className="h-[350px] relative group">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-0 h-0 transition-all duration-700 ease-in-out group-hover:w-full group-hover:h-full bg-secondary opacity-0 group-hover:opacity-50 group-hover:cursor-pointer ">
        <CiSearch
          size={40}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white"
        />
      </div>
      <Image
        width={500}
        height={500}
        src={certificate.url}
        alt=""
        className="w-full h-full"
      />
    </div>
  );
}
