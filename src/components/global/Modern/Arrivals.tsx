import NewArrivals from "@/components/cards/NewArrivals";
import React from "react";

interface ArrivalsProps {}

const Arrivals: React.FC<ArrivalsProps> = ({}) => {
  return (
    <div className="mx-auto container">
      <p className="text-heading text-lg md:text-xl lg:text-2xl 2xl:text-3xl xl:leading-10 font-bold mb-6">
        New Arrivals
      </p>
      <div className="grid grid-cols-3 gap-7">
        <NewArrivals />
      </div>
    </div>
  );
};
export default Arrivals;
