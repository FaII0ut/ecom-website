import React from "react";

interface NewArrivalsProps {}

const NewArrivals: React.FC<NewArrivalsProps> = ({}) => {
  return (
    <div className="h-[495px] rounded-lg overflow-hidden w-full group transition-all duration-300 border-0 hover:border border-gray-200 hover:shadow-lg hover:shadow-gray-200 hover:-translate-y-1">
      <div className="h-[80%]">
        <img
          className="h-full w-full object-cover rounded-lg group-hover:rounded-none"
          src="https://chawkbazar.redq.io/_next/image?url=https%3A%2F%2Fchawkbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F269%2Fh%2526m.png&w=1080&q=75"
        />
      </div>
      <div className="px-4 mt-4">
        <p className="text-heading font-semibold truncate mb-1 md:mb-1.5 text-sm sm:text-base md:text-sm lg:text-base xl:text-lg">
          Zara Monte Carlo
        </p>
        <p className="text-heading font-semibold text-sm space-x-1 rtl:space-x-reverse sm:text-lg md:text-base 3xl:text-xl md:mt-2.5 2xl:mt-3">
          $200
        </p>
      </div>
    </div>
  );
};
export default NewArrivals;
