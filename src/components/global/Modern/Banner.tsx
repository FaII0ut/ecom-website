import React from "react";
import Carousel from "../Slider";

interface BannerProps {}

const items = [
  "https://chawkbazar.redq.io/_next/image?url=%2Fassets%2Fimages%2Fhero%2Fbanner-3.jpg&w=1920&q=100",
  "https://chawkbazar.redq.io/_next/image?url=%2Fassets%2Fimages%2Fhero%2Fbanner-2.jpg&w=1920&q=100",
  "https://chawkbazar.redq.io/_next/image?url=%2Fassets%2Fimages%2Fhero%2Fbanner-3.jpg&w=1920&q=100",
  "https://chawkbazar.redq.io/_next/image?url=%2Fassets%2Fimages%2Fhero%2Fbanner-2.jpg&w=1920&q=100",
  "https://chawkbazar.redq.io/_next/image?url=%2Fassets%2Fimages%2Fhero%2Fbanner-3.jpg&w=1920&q=100",
  "https://chawkbazar.redq.io/_next/image?url=%2Fassets%2Fimages%2Fhero%2Fbanner-2.jpg&w=1920&q=100",
  "https://chawkbazar.redq.io/_next/image?url=%2Fassets%2Fimages%2Fhero%2Fbanner-3.jpg&w=1920&q=100",
  "https://chawkbazar.redq.io/_next/image?url=%2Fassets%2Fimages%2Fhero%2Fbanner-2.jpg&w=1920&q=100",
];
const Banner: React.FC<BannerProps> = ({}) => {
  return (
    <>
      <Carousel items={items} divProps="h-[424px] overflow rounded-lg my-16" css="px-2 overflow-hidden rounded-lg"/>
    </>
  );
};
export default Banner;
