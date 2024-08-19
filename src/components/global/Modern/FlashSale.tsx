import ProductCard from "@/components/cards/ProductCard";
import { products } from "@/data/StoreData";
import React from "react";

interface FlashSaleProps {}

const FlashSale: React.FC<FlashSaleProps> = ({}) => {
  return (
    <div className="mx-auto container mt-[64px]">
      <div className="border border-gray-200 p-7 rounded-md flex flex-col">
        <p className="text-heading text-lg md:text-xl lg:text-2xl 2xl:text-3xl xl:leading-10 font-bold mb-6">
          Flash Sale
        </p>

        <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-7">
          {products.map((item, index) => (
            <ProductCard
              key={index}
              title={item.name}
              price={item.price}
              sale=""
              range={[]}
              img={item.imageUrl}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
export default FlashSale;
