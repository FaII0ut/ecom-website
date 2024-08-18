import React from "react";
import Slider from "react-slick";

interface CarouselProps {
  items: { imageUrl: string; sold?: string; available?: string; name?: string; price?: string; salePrice?: string; }[];
  css?: string;
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
    ...settings,
  };

  return (
    <div className={`overflow-hidden ${divProps}`}>
      <Slider {...defaultSettings}>
        {items.map((item, index) => (
          <div key={index} className={`focus:outline-none ${css}`}>
            {item.sold || item.available ? (
              //first success
              <>
                <div className="flex h-[20vh] rounded-md overflow-hidden">
                  <div className="w-1/3">
                    <img
                      className="w-full h-full object-cover"
                      src={item.imageUrl}
                      alt={`Slide ${index}`}
                    />
                  </div>
                  <div className="w-2/3 bg-gray-100 flex flex-col justify-center  p-4">
                    <div className="text-xl font-bold">
                      {item.name}
                    </div>
                    <div className=" text-lg mt-2">
                    <span className="">{item.price}</span> 
                      {item.salePrice && (
                        <span className="line-through text-gray-500 ml-2">{item.salePrice}</span>
                      )}
                    </div>
                  </div>
                </div>


                <div className="flex justify-between mt-20">
                  <span>Sold: {item.sold}</span>
                  <span>Available: {item.available}</span>
                </div>
              </>
            ) : (
              <img
                className="w-full h-full object-cover rounded-md"
                src={item.imageUrl}
                alt={`Slide ${index}`}
              />
            )}
          </div>
        ))}
      </Slider>
    </div>
  );
};


export default Carousel;
