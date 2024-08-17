import React from "react";

interface SliderProps {
  renderItem: JSX.Element;
}

const Slider: React.FC<SliderProps> = ({renderItem}) => {
  return <div className="bg-orange-300 p-4">{renderItem}</div>;
};
export default Slider;
