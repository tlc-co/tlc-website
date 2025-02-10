"use client";

import { useRouter } from "next/navigation";
import Btn from "../ui/btns/Btn";
import { useState } from "react";

export default function SearchModal({ isOpen, setIsOpen }) {
  const [searchQuery, setSearchQuery] = useState("");
  const router = useRouter();

  if(!isOpen) return null;

  const handleSearch = () => {
    if (searchQuery.trim()) {
      router.push(`/search?query=${encodeURIComponent(searchQuery)}`);

      setIsOpen(false);
    }
  };

  return (
    <div className="flex w-screen h-screen fixed inset-0 z-10 items-center space-x-2">

      <div className="absolute top-0 left-0 w-full h-full bg-white" onClick={() => setIsOpen(false)}/>

      <div className="w-full flex flex-col justify-center items-center z-50 gap-5 py-4 px-4 md:px-32">
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search..."
          className="border-b-2 outline-none border-gray-900 p-2 w-full"
        />
        <Btn
          type="button"
          disabled={!searchQuery}
          bg="bg-secondary hover:bg-secondary/75 !h-fit"
          color="text-white font-bold"
          text="Search"
          rounded="rounded-md"
          onClick={handleSearch}
        />
      </div>
    </div>
  );
}
