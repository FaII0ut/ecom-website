import React from "react";
import Slider from "./Slider";
import ProductCard from "../cards/ProductCard";
import StaticItem from "../cards/StaticItem";
import Categories from "./Modern/Categories";
import SmallSlide from "./SliderItems/SmallSlide";
import Collection from "./Collection";

const staticItem = [
  "https://chawkbazar.redq.io/_next/image?url=%2Fassets%2Fimages%2Fbanner%2Fbanner-2.jpg&w=1920&q=100",
];

const standardSliderLItems = [
  {
    imageUrl:
      "https://chawkbazar.redq.io/_next/image?url=%2Fassets%2Fimages%2Fhero%2Fbanner-3.jpg&w=1920&q=100",
  },
  {
    imageUrl:
      "https://chawkbazar.redq.io/_next/image?url=%2Fassets%2Fimages%2Fhero%2Fbanner-3.jpg&w=1920&q=100",
  },
];

const standardSliderSItems = [
  {
    name: "Hopister Yellow",
    price: "$80.00 - $100.00",
    imageUrl:
      "https://chawkbazar.redq.io/_next/image?url=https%3A%2F%2Fchawkbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F110%2FB.png&w=1920&q=100",
    sold: "20",
    available: "10",
  },
  {
    name: "Dido Pilot Glass",
    price: "$300.00",
    salePrice: "$350.00",
    imageUrl:
      "https://chawkbazar.redq.io/_next/image?url=https%3A%2F%2Fchawkbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F107%2FH-1.png&w=1920&q=100",
    sold: "15",
    available: "5",
  },
  {
    name: "Tuma Kidsa Bag",
    price: "$40.00 - $50.00",
    imageUrl:
      "https://chawkbazar.redq.io/_next/image?url=https%3A%2F%2Fchawkbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F177%2Fj.png&w=1920&q=100",
    sold: "30",
    available: "2",
  },
];

const standardSliderMItems = [
  {
    imageUrl:
      "https://chawkbazar.redq.io/_next/image?url=%2Fassets%2Fimages%2Fbanner%2Fsmall%2Fbanner-2.jpg&w=1920&q=100",
  },
  {
    imageUrl:
      "https://chawkbazar.redq.io/_next/image?url=%2Fassets%2Fimages%2Fbanner%2Fsmall%2Fbanner-3.jpg&w=1920&q=100",
  },
  {
    imageUrl:
      "https://chawkbazar.redq.io/_next/image?url=%2Fassets%2Fimages%2Fbanner%2Fsmall%2Fbanner-1.jpg&w=1920&q=100",
  },
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
  pauseOnHover: false,
};

//standard page Slider Small
const standardSliderS = {
  className: "center",
  centerMode: true,
  infinite: true,
  centerPadding: "10px",
  autoplay: false,
  slidesToShow: 1,
  speed: 500,
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
  pauseOnHover: false,
};

const Standard: React.FC = () => {
  const getElement = (item: any) => {
    return (
      <div className={`focus:outline-none px-5 mb-24`}>
        <>
          <div className="flex h-[20vh] rounded-md overflow-hidden">
            <div className="w-1/3">
              <img className="w-full h-full object-cover" src={item.imageUrl} />
            </div>
            <div className="w-2/3 bg-gray-100 flex flex-col justify-center  p-4">
              <div className="text-xl font-bold">{item.name}</div>
              <div className=" text-lg mt-2">
                <span className="">{item.price}</span>
                {item.salePrice && (
                  <span className="line-through text-gray-500 ml-2">
                    {item.salePrice}
                  </span>
                )}
              </div>
            </div>
          </div>

          <div className="flex justify-between mt-20">
            <span>Sold: {item.sold}</span>
            <span>Available: {item.available}</span>
          </div>
        </>
      </div>
    );
  };
  return (
    <>
      <div>
        <Slider
          items={standardSliderLItems}
          settings={standardSliderL}
          css="h-[82vh] mb-20 px-4"
        />
      </div>

      <div className="flex h-[45vh] mb-7 mx-auto container space-x-6 ">
        <div className="w-2/3 bg-blue-500 rounded-md overflow-hidden">
          <StaticItem imageUrl={staticItem[0]} />
        </div>

        <div className="w-1/3 p-5 rounded-md overflow-hidden border border-gray-300">
          <Slider
            items={standardSliderSItems}
            settings={standardSliderS}
            renderItem={getElement}
            divProps="my-20"
          />
        </div>
      </div>

      <div className="mx-auto container">
        <Slider
          items={standardSliderMItems}
          settings={standardSliderM}
          css="pr-6 mb-24"
          divProps="mx-0"
        />
      </div>
      <Categories
        sliderItem={(img: any) => (
          <SmallSlide img={img} containerClasses="rounded-full" />
        )}
      />

      <Collection />
    </>
  );
};

export default Standard;
