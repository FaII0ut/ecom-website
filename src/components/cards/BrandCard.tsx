import React from "react";

interface BrandCardProps {}

const BrandCard: React.FC<BrandCardProps> = ({}) => {
  return (
    <>
      <div
        className="w-full group h-ful flex relative items-center justify-center overflow-hidden rounded-lg"
      >
        <img
          className="group-hover:scale-125 group-hover:rotate-12 transition-all duration-300 ease-in-out"
          src="https://chawkbazar.redq.io/_next/image?url=https%3A%2F%2Fchawkbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F269%2Fh%2526m.png&w=1080&q=75"
        />
        <div className="absolute w-full h-full group-hover:bg-black/60 transition-colors duration-300"></div>
        <img
          className="absolute"
          src="https://chawkbazarlaravel.s3.ap-southeast-1.amazonaws.com/271/logo16.png"
          alt=""
        />
      </div>
    </>
  );
};
export default BrandCard;
