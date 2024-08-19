import React from "react";

interface HeroProps {}

const Hero: React.FC<HeroProps> = ({}) => {
  return (
    <div className="flex flex-row gap-x-4">
      <div className="grid grid-cols-9 gap-3 h-[80vh] w-full mx-2.5">
        <div className="col-span-5 h-full relative bg-red-500 w-full">
          <img
            className="w-full h-full absolute"
            src="https://chawkbazar.redq.io/_next/image?url=%2Fassets%2Fimages%2Fbanner%2Fmasonry%2Fbanner-1.jpg&w=2048&q=100"
          />
        </div>
        <div className="col-span-2 relative h-full bg-red-500 w-full">
          <img
            className="w-full h-full absolute"
            src="https://chawkbazar.redq.io/_next/image?url=%2Fassets%2Fimages%2Fbanner%2Fmasonry%2Fbanner-2.jpg&w=2048&q=100"
          />
        </div>
        <div className="col-span-2 relative h-full bg-red-500 w-full">
          <img
            className="w-full h-full absolute"
            src="https://chawkbazar.redq.io/_next/image?url=%2Fassets%2Fimages%2Fbanner%2Fmasonry%2Fbanner-3.jpg&w=2048&q=100"
          />
        </div>
        <div className="col-span-2 relative h-full bg-red-500 w-full">
          <img
            className="w-full h-full absolute"
            src="https://chawkbazar.redq.io/_next/image?url=%2Fassets%2Fimages%2Fbanner%2Fmasonry%2Fbanner-4.jpg&w=2048&q=100"
          />
        </div>
        <div className="col-span-2 relative h-full bg-red-500 w-full">
          <img
            className="w-full h-full absolute"
            src="https://chawkbazar.redq.io/_next/image?url=%2Fassets%2Fimages%2Fbanner%2Fmasonry%2Fbanner-5.jpg&w=2048&q=100"
          />
        </div>
        <div className="col-span-5 relative h-full bg-red-500 w-full">
          <img
            className="w-full h-full absolute"
            src="https://chawkbazar.redq.io/_next/image?url=%2Fassets%2Fimages%2Fbanner%2Fmasonry%2Fbanner-6.jpg&w=2048&q=100"
          />
        </div>
      </div>
    </div>
  );
};
export default Hero;
