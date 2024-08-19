import BrandCard from "@/components/cards/BrandCard";
import {brands} from "@/data/products";
import React from "react";

interface TopBrandsProps {}

const TopBrands: React.FC<TopBrandsProps> = ({}) => {
  return (
    <div className="mx-auto container">
      <p className="text-heading text-lg md:text-xl lg:text-2xl 2xl:text-3xl xl:leading-10 font-bold mb-6">
        Top Brands
      </p>
      <div className="grid grid-cols-4 gap-6">
        {brands.map((item, index) => (
          <BrandCard key={index} {...item} />
        ))}
      </div>
    </div>
  );
};
export default TopBrands;
