import React from "react";
import Slider from './Slider'; 

const standardSliderLItems = [
  'https://chawkbazar.redq.io/_next/image?url=%2Fassets%2Fimages%2Fhero%2Fbanner-3.jpg&w=1920&q=100',
  'https://chawkbazar.redq.io/_next/image?url=%2Fassets%2Fimages%2Fhero%2Fbanner-2.jpg&w=1920&q=100',
];

const standardSliderMLItems = [
    'https://chawkbazar.redq.io/_next/image?url=%2Fassets%2Fimages%2Fbanner%2Fsmall%2Fbanner-2.jpg&w=1920&q=100',
    'https://chawkbazar.redq.io/_next/image?url=%2Fassets%2Fimages%2Fbanner%2Fsmall%2Fbanner-3.jpg&w=1920&q=100',
    'https://chawkbazar.redq.io/_next/image?url=%2Fassets%2Fimages%2Fbanner%2Fsmall%2Fbanner-1.jpg&w=1920&q=100',
  ];


  //standard page Slider Large
const standardSliderL = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 1,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: false

};


  //standard page Slider Small
const standardSliderS = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 1,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: false

};

  //standard page Slider Medium
const standardSliderM = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "0px",
    slidesToShow: 3,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: false

};

const Standard: React.FC = () => {
  return (
    <>
      <div>
        <Slider items={standardSliderLItems} settings={standardSliderL} css="h-[80vh] mb-24 px-4"/>
      </div>

      <div>
        <Slider items={standardSliderMLItems} settings={standardSliderM} css="px-4 mb-24" divProps="ml-10 mr-10"/>
      </div>

      
    </>
  );
};

export default Standard;
