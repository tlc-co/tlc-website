"use client";
import { useState } from "react";
import MediaModal from "./MediaModal";

export default function UseMediaModal({ imgs, type, link, children }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex-1">
      <div onClick={() => setIsOpen(true)}>{children}</div>
      {isOpen && (
        <MediaModal
          isOpen={isOpen}
          setIsOpen={setIsOpen} // Pass setter function
          link={link ?? ""}
          type={type}
          imgs={imgs ?? {}}
        />
      )}
    </div>
  );
}
