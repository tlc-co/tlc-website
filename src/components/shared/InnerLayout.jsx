import React from "react";
import Counter from "../Counter";

export default function InnerLayout({ links, counterData, grid, children }) {
  return (
    <main>
      <div className="bg-grayShades-300 py-2 px-3">
        <div className="flex gap-1 max-w-6xl mx-auto">
          {links?.map((link, i) => (
            <div
              key={link.id}
              className={`${
                i < links.length - 1
                  ? "text-grayShades-200"
                  : "text-grayShades-400"
              } font-medium text-sm md:text-base`} //edit by jaber
            >
              <a href={link.url}>{link.title} </a>
              {i < links.length - 1 && <span>/</span>}
            </div>
          ))}
        </div>
      </div>

      <div className={`max-w-6xl mx-auto py-14 px-3 ${grid && "grid " + grid}`}>
        {children}
      </div>

      {
        counterData && (
          
      <div className="min-h-96 bg-blueShades-100 py-20 px-3">
      <div className="max-w-6xl mx-auto">
        <h3 className="md:text-4xl text-lg font-bold max-w-xl text-white">
          {counterData.mainTitle}
        </h3>
        <div className="flex justify-between md:flex-row flex-col gap-20 mt-20">
          {counterData?.data.map((counter) => (
            <div className="flex-1 flex flex-col gap-4" key={counter.id}>
              <Counter value={counter.count} />
              <h4 className="md:text-2xl font-bold w-full text-center text-white">
                {counter.title}
              </h4>
            </div>
          ))}
        </div>
      </div>
    </div>
        )
      }

    </main>
  );
}
