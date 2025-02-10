

import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function VendorCard({ data }) {
  return (
    <div className="h-[350px] flex flex-col justify-center items-center gap-3 p-4 border rounded-lg">
      <div className="flex-1 w-full flex justify-center items-center">
        <Image
          width={500}
          height={500}
          src={data.image}
          alt="certificate"
          className="size-40"
        />
      </div>
      <div className="flex-1 w-full flex flex-col gap-3">
        <Link href={"/#"} className="text-center text-blueShades-100 inline-block">
          {data.title}
        </Link>
        <p className="text-center text-grayShades-100">
          Registration Number: <span>{data.registrationNum}</span>
        </p>
      </div>
    </div>
  );
}
