import React from "react";

interface AdBannerProps {
  img: string;
}

const AdBanner: React.FC<AdBannerProps> = ({img}) => {
  return (
    <div className="mx-auto container my-16">
      <div className="w-full h-full">
        <img className="w-full h-full object-cover rounded-md " src={img} />
      </div>
    </div>
  );
};
export default AdBanner;
