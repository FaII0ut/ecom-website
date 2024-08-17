import React from "react";
import Slider from "react-slick";


interface CarouselProps {
  items: string[];
  css?: string; //
  divProps?: string;

  settings?: {
    className?: string;
    centerMode?: boolean;
    infinite?: boolean;
    centerPadding?: string;
    slidesToShow?: number;
    speed?: number;
    autoplay?: boolean;
    autoplaySpeed?: number;
  };
}

const Carousel: React.FC<CarouselProps> = ({ items, css, divProps, settings }) => {
  const defaultSettings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 1,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 1000,
    ...settings, // 
  };

  return (
    <div className={`overflow-hidden ${divProps}`}>
      <Slider {...defaultSettings}>
        {items.map((img, index) => (
          <div
            key={index}
            className={`focus:outline-none  ${css}`}
          >
            <img className="w-full h-full object-cover rounded-md " src={img} alt={`Slide ${index}`} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
