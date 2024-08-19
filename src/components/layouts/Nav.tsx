import React from "react";
import CartIcon from "../icons/Cart";
import SearchIcon from "../icons/Search";
import Router from "next/router";

interface NavProps {}

const NavItem = ({item}: any) => {
  return (
    <>
      <div
        onClick={() => Router.push("/standard")}
        className="relative group h-[96px] text-gray-700 cursor-pointer inline-flex items-center px-3 py-2 text-sm font-normal before:rtl:right-0 before:ltr:left-0 xl:text-base text-heading xl:px-4 group-hover:text-black"
      >
        {item.label}
        <div className="h-[3px] left-0 bottom-0 group-hover:w-full w-0  bg-black absolute transition-all duration-500"></div>
        <div className="hidden group-hover:fixed -z-[1] group-hover:z-10 opacity-0 left-[230px]  group-hover:opacity-100 group-hover:flex flex-row transition-all translate-y-4 group-hover:translate-y-0 duration-300 bg-white top-[96px] left-0">
          {item.subItems.map((items: any, index: any) => {
            return (
              <div className="even:bg-zinc-100 p-6 w-[220px]" key={index}>
                {items.map((x: any, index: any) => (
                  <p
                    key={index}
                    className="py-1.5 first:font-semibold text-sm  text-zinc-500 capitalize"
                  >
                    {x}
                  </p>
                ))}
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

const Nav: React.FC<NavProps> = ({}) => {
  const items = [
    {
      id: "1",
      label: "Home",
      subItems: [],
    },
    {
      id: "2",
      label: "Men Wear",
      subItems: [
        [
          "Top Wear",
          "T-Shirt",
          "Casual Shirts",
          "Formal Shirts",
          "Blazwers & Coats",
          "Suits",
          "Jackets",
        ],
        [
          "Top Wear",
          "T-Shirt",
          "Casual Shirts",
          "Formal Shirts",
          "Blazwers & Coats",
          "Suits",
          "Jackets",
        ],
        [
          "Top Wear",
          "T-Shirt",
          "Casual Shirts",
          "Formal Shirts",
          "Blazwers & Coats",
          "Suits",
          "Jackets",
        ],
      ],
    },
    {
      id: "3",
      label: "Women Wear",
      subItems: [
        [
          "Top Wear",
          "T-Shirt",
          "Casual Shirts",
          "Formal Shirts",
          "Blazwers & Coats",
          "Suits",
          "Jackets",
        ],
        [
          "Top Wear",
          "T-Shirt",
          "Casual Shirts",
          "Formal Shirts",
          "Blazwers & Coats",
          "Suits",
          "Jackets",
        ],
        [
          "Top Wear",
          "T-Shirt",
          "Casual Shirts",
          "Formal Shirts",
          "Blazwers & Coats",
          "Suits",
          "Jackets",
        ],
        [
          "Top Wear",
          "T-Shirt",
          "Casual Shirts",
          "Formal Shirts",
          "Blazwers & Coats",
          "Suits",
          "Jackets",
        ],
        [
          "Top Wear",
          "T-Shirt",
          "Casual Shirts",
          "Formal Shirts",
          "Blazwers & Coats",
          "Suits",
          "Jackets",
        ],
      ],
    },
    {id: "4", label: "Casual Wear", subItems: []},
    {id: "5", label: "Search", subItems: []},
    {id: "6", label: "standard", subItems: []},
  ];

  return (
    <div className="sticky top-0 z-50 bg-white">
      <div className="container mx-auto h-[96px] flex flex-row items-center justify-between">
        <div className="flex flex-row items-center space-x-3">
          <div className="w-[95px] mr-6">
            <img src="https://chawkbazar.redq.io/_next/image?url=https%3A%2F%2Fchawkbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F258%2Flogo-final2x.png&w=640&q=75" />
          </div>

          {items.map((item: any, index: any) => (
            <NavItem item={item} key={index} />
          ))}
        </div>
        <div className="flex flex-row  items-center space-x-4">
          <SearchIcon />
          <CartIcon />
          <div className="relative text-gray-700 inline-flex items-center px-3 py-2 text-sm font-normal before:rtl:right-0 before:ltr:left-0 xl:text-base text-heading xl:px-4 group-hover:text-black">
            Sign in
          </div>
        </div>
      </div>
    </div>
  );
};
export default Nav;
