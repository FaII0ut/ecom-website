import React from "react";
import Slider from "react-slick";



interface CarouselProps {
  items: {
    imageUrl: string;
    sold?: string;
    available?: string;
    name?: string;
    price?: string;
    salePrice?: string;
  }[];
  css?: string;
  divProps?: string;
  renderItem?: (item: any) => JSX.Element;
  settings?: any;
}

const Carousel: React.FC<CarouselProps> = ({
  items,
  css,
  divProps,
  settings,
  renderItem,
}) => {
  const defaultSettings = {
    className: "center ",
    centerMode: true,
    infinite: true,
    centerPadding: "200px",
    slidesToShow: 1,
    speed: 1000,
    // autoplay: true,
    autoplaySpeed: 3000,

    ...settings, //
  };

  return (
    <div className={`overflow-hidden ${divProps}`}>
      <Slider {...defaultSettings}>
        {items.map((item, index) => {
          return renderItem ? (
            renderItem(item)
          ) : (
            <div key={index} className={`focus:outline-none ${css}`}>
              <img
                className="w-full h-full object-cover rounded-md"
                src={item.imageUrl}
                alt={`Slide ${index}`}
              />
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default Carousel;
