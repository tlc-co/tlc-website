"use client";
import { useEffect, useState } from "react";
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";

export default function Accordion({ data }) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (data.id === 1) {
      setIsOpen(true);
    }
  }, [data.id]);

  return (
    <div
    className={`w-full rounded-md cursor-pointer transition duration-150 ${isOpen ? "p-4 border" : ""}`}
    onClick={() => setIsOpen(!isOpen)}
  >
    <div className={`flex justify-between items-center p-4 rounded-md ${isOpen ? "bg-white text-black" : "bg-secondary text-white"}`}>
      <span className={`text-lg ${isOpen ? "font-bold" : ""}`}>{data.title}</span>
      {isOpen ? <FaMinus size={20} /> : <FaPlus size={20} />}
    </div>

    {isOpen && (
      <div className="w-full h-max bg-white p-2 text-black ">
      <p>
        {data.desc}
      </p>
    </div>
    )}
  </div>

  );
}
