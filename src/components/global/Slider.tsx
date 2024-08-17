import React, { useState, useEffect } from "react";
import Slider from "react-slick";
interface CarouselProps {
  items: string[];
}

const Carousel: React.FC<CarouselProps> = ({ items }) => {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 1,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 5000

  };
  return (
    <div className="">
      <Slider {...settings}>
        {items.map((img: any) =>
          <div className="h-[80vh] px-3 focus:outline-none">
            <img className="w-full h-full object-cover rounded-md" src={img}></img>
          </div>)}

      </Slider>
    </div>
  );
};

export default Carousel;
