import React, {useState, useEffect} from "react";
import Slider from "react-slick";
interface CarouselProps {
  items: string[];
}

const Carousel: React.FC<CarouselProps> = ({items}) => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="">
      <Slider {...settings}>
        <div className="h-[70vh] bg-red-400">
          <h3>1</h3>
        </div>
        <div className="h-[70vh] bg-red-400">
          <h3>2</h3>
        </div>
        <div className="h-[70vh] bg-red-400">
          <h3>3</h3>
        </div>
        <div className="h-[70vh] bg-red-400">
          <h3>4</h3>
        </div>
        <div className="h-[70vh] bg-red-400">
          <h3>5</h3>
        </div>
        <div className="h-[70vh] bg-red-400">
          <h3>6</h3>
        </div>
      </Slider>
    </div>
  );
};

export default Carousel;
