import React from "react";
import Carousel from "../Slider";
import SmallSlide from "../SliderItems/SmallSlide";

interface CategoriesProps {
  sliderItem?: any;
}
const items = [
  {
    imageUrl:
      "https://chawkbazar.redq.io/_next/image?url=%2Fassets%2Fimages%2Fhero%2Fbanner-3.jpg&w=1920&q=100",
  },
  {
    imageUrl:
      "https://chawkbazar.redq.io/_next/image?url=%2Fassets%2Fimages%2Fhero%2Fbanner-2.jpg&w=1920&q=100",
  },
  {
    imageUrl:
      "https://chawkbazar.redq.io/_next/image?url=%2Fassets%2Fimages%2Fhero%2Fbanner-3.jpg&w=1920&q=100",
  },
  {
    imageUrl:
      "https://chawkbazar.redq.io/_next/image?url=%2Fassets%2Fimages%2Fhero%2Fbanner-2.jpg&w=1920&q=100",
  },
  {
    imageUrl:
      "https://chawkbazar.redq.io/_next/image?url=%2Fassets%2Fimages%2Fhero%2Fbanner-3.jpg&w=1920&q=100",
  },
  {
    imageUrl:
      "https://chawkbazar.redq.io/_next/image?url=%2Fassets%2Fimages%2Fhero%2Fbanner-2.jpg&w=1920&q=100",
  },
  {
    imageUrl:
      "https://chawkbazar.redq.io/_next/image?url=%2Fassets%2Fimages%2Fhero%2Fbanner-3.jpg&w=1920&q=100",
  },
  {
    imageUrl:
      "https://chawkbazar.redq.io/_next/image?url=%2Fassets%2Fimages%2Fhero%2Fbanner-2.jpg&w=1920&q=100",
  },
  {
    imageUrl:
      "https://chawkbazar.redq.io/_next/image?url=%2Fassets%2Fimages%2Fhero%2Fbanner-3.jpg&w=1920&q=100",
  },
  {
    imageUrl:
      "https://chawkbazar.redq.io/_next/image?url=%2Fassets%2Fimages%2Fhero%2Fbanner-2.jpg&w=1920&q=100",
  },
  {
    imageUrl:
      "https://chawkbazar.redq.io/_next/image?url=%2Fassets%2Fimages%2Fhero%2Fbanner-3.jpg&w=1920&q=100",
  },
  {
    imageUrl:
      "https://chawkbazar.redq.io/_next/image?url=%2Fassets%2Fimages%2Fhero%2Fbanner-2.jpg&w=1920&q=100",
  },
  {
    imageUrl:
      "https://chawkbazar.redq.io/_next/image?url=%2Fassets%2Fimages%2Fhero%2Fbanner-3.jpg&w=1920&q=100",
  },
  {
    imageUrl:
      "https://chawkbazar.redq.io/_next/image?url=%2Fassets%2Fimages%2Fhero%2Fbanner-2.jpg&w=1920&q=100",
  },
  {
    imageUrl:
      "https://chawkbazar.redq.io/_next/image?url=%2Fassets%2Fimages%2Fhero%2Fbanner-3.jpg&w=1920&q=100",
  },
  {
    imageUrl:
      "https://chawkbazar.redq.io/_next/image?url=%2Fassets%2Fimages%2Fhero%2Fbanner-2.jpg&w=1920&q=100",
  },
  {
    imageUrl:
      "https://chawkbazar.redq.io/_next/image?url=%2Fassets%2Fimages%2Fhero%2Fbanner-3.jpg&w=1920&q=100",
  },
  {
    imageUrl:
      "https://chawkbazar.redq.io/_next/image?url=%2Fassets%2Fimages%2Fhero%2Fbanner-2.jpg&w=1920&q=100",
  },
  {
    imageUrl:
      "https://chawkbazar.redq.io/_next/image?url=%2Fassets%2Fimages%2Fhero%2Fbanner-3.jpg&w=1920&q=100",
  },
  {
    imageUrl:
      "https://chawkbazar.redq.io/_next/image?url=%2Fassets%2Fimages%2Fhero%2Fbanner-2.jpg&w=1920&q=100",
  },
  {
    imageUrl:
      "https://chawkbazar.redq.io/_next/image?url=%2Fassets%2Fimages%2Fhero%2Fbanner-3.jpg&w=1920&q=100",
  },
  {
    imageUrl:
      "https://chawkbazar.redq.io/_next/image?url=%2Fassets%2Fimages%2Fhero%2Fbanner-2.jpg&w=1920&q=100",
  },
  {
    imageUrl:
      "https://chawkbazar.redq.io/_next/image?url=%2Fassets%2Fimages%2Fhero%2Fbanner-3.jpg&w=1920&q=100",
  },
  {
    imageUrl:
      "https://chawkbazar.redq.io/_next/image?url=%2Fassets%2Fimages%2Fhero%2Fbanner-2.jpg&w=1920&q=100",
  },
];

const Categories: React.FC<CategoriesProps> = ({
  sliderItem = (img: any) => <SmallSlide img={img} />,
}) => {
  return (
    <div className="mx-auto container my-6">
      <p className="text-heading text-lg mb-4 md:text-xl lg:text-2xl 2xl:text-3xl xl:leading-10 font-bold">
        Shop By Category
      </p>
      <Carousel
        items={items}
        settings={{
          slidesToShow: 7,
          className: "h-full",
          centerPadding: "0px",
          adaptiveHeight: true,
        }}
        divProps=" rounded-lg h-full"
        renderItem={sliderItem}
        css="px-2 overflow-hidden rounded-lg"
      />
    </div>
  );
};
export default Categories;
