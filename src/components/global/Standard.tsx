import React from "react";
import BestSeller from "../cards/BestSeller";
import Slider from './Slider';

const items = [
  'https://chawkbazar.redq.io/_next/image?url=%2Fassets%2Fimages%2Fhero%2Fbanner-3.jpg&w=1920&q=100',
  'https://chawkbazar.redq.io/_next/image?url=%2Fassets%2Fimages%2Fhero%2Fbanner-2.jpg&w=1920&q=100',
  'https://chawkbazar.redq.io/_next/image?url=%2Fassets%2Fimages%2Fhero%2Fbanner-3.jpg&w=1920&q=100',
  'https://chawkbazar.redq.io/_next/image?url=%2Fassets%2Fimages%2Fhero%2Fbanner-2.jpg&w=1920&q=100',
  'https://chawkbazar.redq.io/_next/image?url=%2Fassets%2Fimages%2Fhero%2Fbanner-3.jpg&w=1920&q=100',
  'https://chawkbazar.redq.io/_next/image?url=%2Fassets%2Fimages%2Fhero%2Fbanner-2.jpg&w=1920&q=100',
  'https://chawkbazar.redq.io/_next/image?url=%2Fassets%2Fimages%2Fhero%2Fbanner-3.jpg&w=1920&q=100',
  'https://chawkbazar.redq.io/_next/image?url=%2Fassets%2Fimages%2Fhero%2Fbanner-2.jpg&w=1920&q=100',
  
];

const Standard: React.FC = () => {
  return (
    <div>
      <Slider items={items} />
    </div>
  );
};

export default Standard;
