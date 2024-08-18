import React from "react";

interface TopBrandsProps {}

const TopBrands: React.FC<TopBrandsProps> = ({}) => {
  return (
    <div className="mx-auto container">
      <p className="text-heading text-lg md:text-xl lg:text-2xl 2xl:text-3xl xl:leading-10 font-bold mb-6">
        Top Brands
      </p>
      <div className="grid grid-cols-4 gap-6">
        {[1, 2, 3, 4, 5, 6, 7, 8, 1, 2, 3, 4, 5, 6, 7, 8].map((item, index) => (
          <div
            key={index}
            className="w-full group h-ful flex relative items-center justify-center overflow-hidden rounded-lg"
          >
            <img
              className="group-hover:scale-125 group-hover:rotate-12 transition-all duration-300"
              src="https://chawkbazar.redq.io/_next/image?url=https%3A%2F%2Fchawkbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F269%2Fh%2526m.png&w=1080&q=75"
            />
            <div className="absolute w-full h-full group-hover:bg-black/60 transition-all duration-300">
                </div>
            <img
              className="absolute"
              src="https://chawkbazarlaravel.s3.ap-southeast-1.amazonaws.com/271/logo16.png"
              alt=""
            />

          </div>
        ))}
      </div>
    </div>
  );
};
export default TopBrands;
