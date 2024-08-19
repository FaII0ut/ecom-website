import React from "react";

interface SellingCardProps {
  title: string;
  price: string;
  img: string;
}

const SellingCard: React.FC<SellingCardProps> = ({
  title,
  price,
  img,
}) => {
  return (
    <div className="flex w-full h-[178px] flex-row border border-gray-200 rounded-lg overflow-hidden">
      <div className="w-[176px] h-[176px] relative ">
        <img className="object-cover w-full h-full" src={img} />
      </div>
      <div className="flex flex-col h-full justify-center px-5">
        <p className="text-heading font-semibold truncate mb-1 text-sm sm:text-base md:mb-1 pb-0">
          {title}
        </p>
        <p className="text-heading font-semibold text-sm sm:text-base mt-1 space-x-1 rtl:space-x-reverse sm:text-lg md:text-base 3xl:text-xl md:mt-2">
          {price}
        </p>
      </div>
    </div>
  );
};
export default SellingCard;
