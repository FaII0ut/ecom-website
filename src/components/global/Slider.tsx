import React, {useRef} from "react";
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
  showArrow?: boolean;
  renderItem?: (item: any) => JSX.Element;
  settings?: any;
}

const Carousel: React.FC<CarouselProps> = ({
  items,
  css,
  divProps,
  settings,
  renderItem,
  showArrow = false,
}) => {
  let sliderRef: any = useRef();

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
    <div className="relative">
      <div className={`overflow-hidden  ${divProps}`}>
        <Slider
          ref={(slider) => {
            sliderRef = slider;
          }}
          {...defaultSettings}
        >
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
      {showArrow ? (
        <>
          {" "}
          <div
            onClick={() => sliderRef.slickPrev()}
            className="absolute w-10 h-10 top-[42%] -right-4 rounded-full bg-white shadow-md border border-gray-100 flex items-center justify-center"
          >
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 512 512"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M294.1 256L167 129c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.3 34 0L345 239c9.1 9.1 9.3 23.7.7 33.1L201.1 417c-4.7 4.7-10.9 7-17 7s-12.3-2.3-17-7c-9.4-9.4-9.4-24.6 0-33.9l127-127.1z"></path>
            </svg>
          </div>
          <div
            onClick={() => sliderRef.slickNext()}
            className="absolute w-10 h-10 top-[42%] -left-4 rounded-full bg-white shadow-md border border-gray-100 flex items-center justify-center"
          >
            <svg
              className="rotate-180"
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 512 512"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M294.1 256L167 129c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.3 34 0L345 239c9.1 9.1 9.3 23.7.7 33.1L201.1 417c-4.7 4.7-10.9 7-17 7s-12.3-2.3-17-7c-9.4-9.4-9.4-24.6 0-33.9l127-127.1z"></path>
            </svg>
          </div>
        </>
      ) : null}
    </div>
  );
};

export default Carousel;
