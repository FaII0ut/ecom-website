import React from "react";
import Carousel from "../Slider";
import SmallSlide from "../SliderItems/SmallSlide";
import {categories} from "@/data/StoreData";

interface CategoriesProps {
  sliderItem?: any;
  title?: string;
  items?: any;
  brandName?: string;
}

const Categories: React.FC<CategoriesProps> = ({
  items = categories,
  title = "Shop By Category",
  sliderItem = (img: any) => <SmallSlide img={img} />,
}) => {
  return (
    <div className="mx-auto container my-6">
      <p className="text-heading text-lg mb-4 md:text-xl lg:text-2xl 2xl:text-3xl xl:leading-10 font-bold">
        {title}
      </p>
      <Carousel
        items={items}
        showArrow
        hoverEffect
        settings={{
          slidesToShow: 7,
          className: "h-full",
          centerPadding: "0px",
          adaptiveHeight: true,
          speed: 300,
          responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true,
              },
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2,
              },
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
              },
            },
          ],
        }}
        divProps=" rounded-lg h-full"
        renderItem={sliderItem}
        css="px-2 overflow-visible rounded-lg"
      />
    </div>
  );
};
export default Categories;
