import React from "react";

interface BrandCardProps {
  bgUrl: string;
  logoUrl: string;
}

const BrandCard: React.FC<BrandCardProps> = ({bgUrl, logoUrl}) => {
  return (
    <>
      <div className="w-full group h-ful flex relative items-center justify-center overflow-hidden rounded-lg">
        <img
          className="group-hover:scale-125 group-hover:rotate-12 transition-all duration-300 ease-in-out"
          src={bgUrl}
        />
        <div className="absolute w-full h-full group-hover:bg-black/60 transition-colors duration-300"></div>
        <img className="absolute" src={logoUrl} alt="" />
      </div>
    </>
  );
};
export default BrandCard;
