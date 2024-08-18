import NewArrivals from "@/components/cards/NewArrivals";
import {products} from "@/data/products";
import React from "react";

interface ArrivalsProps {
  sectionTitle?: string;
}

const Arrivals: React.FC<ArrivalsProps> = ({sectionTitle='New Arrivals'}) => {
  return (
    <div className="mx-auto container my-16">
      <p className="text-heading text-lg md:text-xl lg:text-2xl 2xl:text-3xl xl:leading-10 font-bold mb-6">
        {sectionTitle}
      </p>
      <div className="grid grid-cols-5 gap-7">
        {products.map((item, index) => (
          <NewArrivals
            key={index}
            title={item.name}
            img={item.imageUrl}
            price={item.price}
            salePrice={item.salePrice}
          />
        ))}
      </div>
    </div>
  );
};
export default Arrivals;
