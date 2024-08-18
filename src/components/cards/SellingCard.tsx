import React from "react";

interface SellingCardProps {}

const SellingCard: React.FC<SellingCardProps> = ({}) => {
  return (
    <div className="flex w-full h-[178px] flex-row border border-gray-200 rounded-lg overflow-hidden">
      <div className="w-[176px] h-[176px] relative ">
        <img
          className="object-cover w-full h-full"
          src="https://chawkbazar.redq.io/_next/image?url=%2Fassets%2Fimages%2Fbanner%2Fbanner-3.jpg&w=2048&q=100"
        />
      </div>
      <div className="flex flex-col h-full justify-center px-5">
        <p className="text-heading font-semibold truncate mb-1 text-sm sm:text-base md:mb-1 pb-0">
          Hermes Galaxy Watch 3
        </p>
        <p className="text-heading font-semibold text-sm sm:text-base mt-1 space-x-1 rtl:space-x-reverse sm:text-lg md:text-base 3xl:text-xl md:mt-2">
          $ 2000
        </p>
      </div>
    </div>
  );
};
export default SellingCard;
