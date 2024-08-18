import React from "react";

interface SmallSlideProps {
  img: any;
  containerClasses?: string;
}

const SmallSlide: React.FC<SmallSlideProps> = ({img, containerClasses='rounded-md'}) => {
  return (
    <div className={`w-full h-52 p-3  overflow-hidden`}>
      <img
        className={`w-full h-full object-cover ${containerClasses}`}
        src={img.imageUrl}
      />
    </div>
  );
};
export default SmallSlide;
