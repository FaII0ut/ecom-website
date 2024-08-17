import ProductCard from "@/components/cards/ProductCard";
import React from "react";

interface FlashSaleProps {}

const FlashSale: React.FC<FlashSaleProps> = ({}) => {
  return (
    <div className="mx-auto container mt-[64px]">
      <div className="border border-gray-200 p-7 rounded-md flex flex-col">
        <p className="text-heading text-lg md:text-xl lg:text-2xl 2xl:text-3xl xl:leading-10 font-bold mb-6">
          Flash Sale
        </p>

        <div className="grid grid-cols-4 gap-7">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((item, index) => (
            <ProductCard
              key={index}
              title="Zara army bag"
              price="200"
              sale=""
              range={[]}
              img="https://chawkbazar.redq.io/_next/image?url=https%3A%2F%2Fchawkbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F292%2F10.png&w=750&q=100"
            />
          ))}
        </div>
      </div>
    </div>
  );
};
export default FlashSale;
