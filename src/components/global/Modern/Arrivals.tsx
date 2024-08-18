import NewArrivals from "@/components/cards/NewArrivals";
import {products} from "@/data/products";
import React from "react";

interface ArrivalsProps {}

const Arrivals: React.FC<ArrivalsProps> = ({}) => {
  return (
    <div className="mx-auto container my-16">
      <p className="text-heading text-lg md:text-xl lg:text-2xl 2xl:text-3xl xl:leading-10 font-bold mb-6">
        New Arrivals
      </p>
      <div className="grid grid-cols-5 gap-7">
        {products.map((item, index) => (
          <NewArrivals
            key={index}
            title={item.name}
            img={item.imageUrl}
            price={item.price}
          />
        ))}
      </div>
    </div>
  );
};
export default Arrivals;
