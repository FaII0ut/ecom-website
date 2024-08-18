import React from "react";

interface FeaturedProps {}

const Featured: React.FC<FeaturedProps> = ({}) => {
  return (
    <div className="mx-auto container">
      <p className="text-heading text-lg md:text-xl lg:text-2xl 2xl:text-3xl xl:leading-10 font-bold my-6">
        Flash Sale
      </p>

      <div className="grid grid-cols-4 h-[716px] w-full gap-7">
        <div className="col-span-2 row-span-2 bg-[#f9f9f9] group rounded-md w-full h-full relative overflow-hidden">
          <img
            className="w-full h-full absolute object-contain group-hover:scale-110 transition-all duration-200"
            src="https://chawkbazar.redq.io/_next/image?url=https%3A%2F%2Fchawkbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F321%2FFootwear-1.png&w=3840&q=75"
          />
        </div>
        <div className="bg-[#f9f9f9] group rounded-md w-full h-full relative overflow-hidden">
          <img
            className="w-full h-full absolute object-contain group-hover:scale-110 transition-all duration-200"
            src="https://chawkbazar.redq.io/_next/image?url=https%3A%2F%2Fchawkbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F321%2FFootwear-1.png&w=3840&q=75"
          />
        </div>
        <div className="bg-[#f9f9f9] group rounded-md w-full h-full relative overflow-hidden">
          <img
            className="w-full h-full absolute object-contain group-hover:scale-110 transition-all duration-200"
            src="https://chawkbazar.redq.io/_next/image?url=https%3A%2F%2Fchawkbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F321%2FFootwear-1.png&w=3840&q=75"
          />
        </div>
        <div className="bg-[#f9f9f9] group rounded-md w-full h-full relative overflow-hidden">
          <img
            className="w-full h-full absolute object-contain group-hover:scale-110 transition-all duration-200"
            src="https://chawkbazar.redq.io/_next/image?url=https%3A%2F%2Fchawkbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F321%2FFootwear-1.png&w=3840&q=75"
          />
        </div>
        <div className="bg-[#f9f9f9] group rounded-md w-full h-full relative overflow-hidden">
          <img
            className="w-full h-full absolute object-contain group-hover:scale-110 transition-all duration-200"
            src="https://chawkbazar.redq.io/_next/image?url=https%3A%2F%2Fchawkbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F321%2FFootwear-1.png&w=3840&q=75"
          />
        </div>
      </div>
    </div>
  );
};
export default Featured;
