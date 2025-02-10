import Image from "next/image";
import { FaPlay } from "react-icons/fa";

export default function VideoPart() {
  //edit by jaber
  return (
    <div className="flex-1 flex justify-end relative after:content-[''] after:absolute after:-bottom-4 after:right-0 after:md:-right-4 after:w-4/5 after:md:w-3/5 after:-z-10 after:rounded-xl after:h-4/5 after:md:h-3/5 after:bg-blueShades-300 pr-5 md:pr-0">
      <div className="w-full h-80 md:h-full rounded-3xl overflow-clip relative cursor-pointer">
        <Image
          width={500}
          height={500}
          src="/vidPic.webp"
          alt="whoWeAre"
          className="w-full h-full object-cover"
        />
        <button className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 bg-white rounded-full flex items-center justify-center">
          <FaPlay className="text-2xl text-mainOrange" />
        </button>
      </div>
    </div>
  );
}
