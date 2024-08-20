import React from "react";

interface FeaturedProps {
  items: {
    name: string;
    price: string;
    imageUrl: string;
  }[];
}


const Featured: React.FC<FeaturedProps> = ({ items }) => {
  return (
    <div className="mx-auto container">
      <p className="text-heading text-lg md:text-xl lg:text-2xl 2xl:text-3xl xl:leading-10 font-bold my-6">
        Featured Products
      </p>

      <div className="grid grid-cols-4 h-[716px] w-full gap-7">
        <div className="col-span-2 row-span-2 bg-[#f9f9f9] group rounded-md w-full h-full relative overflow-hidden">
          <img
            className="w-full h-full absolute object-contain group-hover:scale-110 transition-all duration-200"
            src={items[0].imageUrl}
          />

          {/* Bottom Left Text with ellipsis */}
          <div className="absolute bottom-0 left-0 p-4 max-w-[70%] overflow-hidden text-ellipsis whitespace-nowrap">
            {items[0].name}
          </div>

          {/* Bottom Right Text */}
          <div className="absolute bottom-0 right-0 p-4 ">
            {items[0].price}
          </div>
        </div>




        <div className="bg-[#f9f9f9] group rounded-md w-full h-full relative overflow-hidden">
          <img
            className="w-full h-full absolute object-contain group-hover:scale-110 transition-all duration-200"
            src={items[1].imageUrl}
          />

          <div className="absolute bottom-0 left-0 p-4 max-w-[70%] overflow-hidden text-ellipsis whitespace-nowrap">
          {items[1].name}
          </div>

          <div className="absolute bottom-0 right-0 p-4">
          {items[1].price}
          </div>
        </div>

        <div className="bg-[#f9f9f9] group rounded-md w-full h-full relative overflow-hidden">
          <img
            className="w-full h-full absolute object-contain group-hover:scale-110 transition-all duration-200"
            src={items[2].imageUrl}
          />

          <div className="absolute bottom-0 left-0 p-4 max-w-[70%] overflow-hidden text-ellipsis whitespace-nowrap">
          {items[2].name}
          </div>

          <div className="absolute bottom-0 right-0 p-4">
          {items[2].price}
          </div>
        </div>

        <div className="bg-[#f9f9f9] group rounded-md w-full h-full relative overflow-hidden">
          <img
            className="w-full h-full absolute object-contain group-hover:scale-110 transition-all duration-200"
            src={items[3].imageUrl}
          />

          <div className="absolute bottom-0 left-0 p-4 max-w-[70%] overflow-hidden text-ellipsis whitespace-nowrap">
          {items[3].name}
          </div>

          <div className="absolute bottom-0 right-0 p-4">
          {items[3].price}
          </div>
        </div>

        <div className="bg-[#f9f9f9] group rounded-md w-full h-full relative overflow-hidden">
          <img
            className="w-full h-full absolute object-contain group-hover:scale-110 transition-all duration-200"
            src={items[4].imageUrl}
          />

          <div className="absolute bottom-0 left-0 p-4 max-w-[70%] overflow-hidden text-ellipsis whitespace-nowrap">
          {items[4].name}
          </div>

          <div className="absolute bottom-0 right-0 p-4">
          {items[4].price}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Featured;
