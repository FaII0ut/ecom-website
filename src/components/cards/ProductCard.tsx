import React from "react";

interface ProductCardProps {
  title: string;
  price: string;
  sale: string;
  range: [];
  img: string;
}

const ProductCard: React.FC<ProductCardProps> = ({
  title,
  price,
  sale,
  range,
  img,
}) => {
  return (
    <div className="h-[328px]">
      <div className="h-[80%] mb-[14px] bg-gray-300/40 rounded-lg w-full flex relative items-center">
        <img className="absolute w-full h-full object-cover" src={img} />
      </div>
      <div className="">
        <p className="text-heading font-semibold truncate mb-1 md:mb-1.5 text-sm sm:text-base md:text-sm lg:text-base xl:text-lg">
          {title}
        </p>
        <p className="text-heading font-semibold text-sm space-x-1 rtl:space-x-reverse sm:text-lg md:text-base 3xl:text-xl md:mt-2.5 2xl:mt-3">
          $ {price}
        </p>
      </div>
    </div>
  );
};
export default ProductCard;
