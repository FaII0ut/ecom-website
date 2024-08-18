import React from "react";
import BestSeller from "../../cards/BestSeller";
import Slider from "../Slider";
import Hero from "./Hero";
import FlashSale from "./FlashSale";
import Featured from "./Featured";
import Banner from "./Banner";
import Categories from "./Categories";
import AdBanner from "../AdBanner";
import TopBrands from "./TopBrands";
import SellingProducts from "./SellingProducts";
import Exclusive from "./Exclusive";
import Arrivals from "./Arrivals";

interface ModernProps {}

const Modern: React.FC<ModernProps> = ({}) => {
  return (
    <div className="flex flex-col">
      <Hero />
      <FlashSale />
      <Banner />
      <Categories />
      <Featured />
      <AdBanner img="https://chawkbazar.redq.io/_next/image?url=%2Fassets%2Fimages%2Fbanner%2Fbanner-3.jpg&w=2048&q=100" />
      <TopBrands />
      <AdBanner img="https://chawkbazar.redq.io/_next/image?url=%2Fassets%2Fimages%2Fbanner%2Fbanner-4.jpg&w=2048&q=100" />
      <SellingProducts />
      <Exclusive />
      <Arrivals />
    </div>
  );
};
export default Modern;
