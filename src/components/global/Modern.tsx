import React from "react";
import BestSeller from "../cards/BestSeller";
import Slider from "./Slider";

interface ModernProps {}

const Modern: React.FC<ModernProps> = ({}) => {
  return (
    <div className="flex flex-row gap-x-4">
      <Slider renderItem={<BestSeller />} />
      <Slider renderItem={<div>hello</div>} />
    </div>
  );
};
export default Modern;
