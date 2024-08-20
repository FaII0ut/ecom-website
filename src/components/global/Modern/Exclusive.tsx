import React from "react";

interface ExclusiveProps { }

const Exclusive: React.FC<ExclusiveProps> = ({ }) => {
  return (
    <div className="mx-auto container my-16">
      <div className="w-full flex flex-row rounded-md overflow-hidden">
        <div className="h-[70vh] w-full bg-gray-100 relative py-12 group">
          <p className="absolute right-6 text-gray-300 text-xl">
            NEW YEAR
          </p>
          <p className="absolute right-6 text-gray-200 font-bold text-[170px] leading-[12rem]">
            20
          </p>
          <img
            className="p-16 pb-0 absolute w-full h-full group-hover:scale-110 transition-all duration-300"
            src="https://chawkbazar.redq.io/_next/image?url=%2Fassets%2Fimages%2Fexclusive%2Fwomen.png&w=640&q=75"
          />
          <button className="absolute bottom-6 right-6 bg-white px-8 py-6 rounded transition text-lg hover:invert duration-500 shadow-md">
            #WOMEN EXCLUSIVE
          </button>
        </div>

        <div className="h-[70vh] w-full bg-slate-200 relative py-12 group">
          <p className="absolute left-6 text-slate-300 text-xl">
            EXCLUSIVE
          </p>
          <p className="absolute left-6 text-slate-300/50 font-bold text-[170px] leading-[12rem]">
            24
          </p>
          <img
            className="p-16 pb-0 absolute w-full h-full group-hover:scale-110 transition-all duration-300"
            src="https://chawkbazar.redq.io/_next/image?url=%2Fassets%2Fimages%2Fexclusive%2Fmen.png&w=640&q=75"
          />
          <button className="absolute bottom-6 left-6 bg-white px-8 py-6 rounded transition text-lg hover:invert duration-500 shadow-md">
            #Men EXCLUSIVE
          </button>
        </div>
      </div>
    </div>
  );
};
export default Exclusive;
