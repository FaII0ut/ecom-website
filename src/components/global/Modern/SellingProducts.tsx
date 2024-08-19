import SellingCard from "@/components/cards/SellingCard";
import {products} from "@/data/StoreData";
import React from "react";

interface SellingProductsProps {}

const SellingProducts: React.FC<SellingProductsProps> = ({}) => {
  return (
    <div className="mx-auto container">
      <p className="text-heading text-lg md:text-xl lg:text-2xl 2xl:text-3xl xl:leading-10 font-bold mb-6">
        On Selling Products
      </p>
      <div className="grid grid-cols-3 gap-7">
        {products.map((item, index) => (
          <SellingCard
            key={index}
            title={item.name}
            price={item.price}
            img={item.imageUrl}
          />
        ))}
      </div>
    </div>
  );
};
export default SellingProducts;
