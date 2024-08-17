import React from "react";
import BestSeller from "../../cards/BestSeller";
import Slider from "../Slider";
import Hero from "./Hero";
import FlashSale from "./FlashSale";

interface ModernProps {}

const Modern: React.FC<ModernProps> = ({}) => {
  return (
    <div className="flex flex-col">
      <Hero />
      <FlashSale />
    </div>
  );
};
export default Modern;
