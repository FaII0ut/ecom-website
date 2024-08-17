import React from "react";
import CartIcon from "../icons/Cart";
import SearchIcon from "../icons/Search";

interface NavProps {}

const NavItem = ({item}: any) => {
  return (
    <div className="relative text-gray-700 inline-flex items-center px-3 py-2 text-sm font-normal before:rtl:right-0 before:ltr:left-0 xl:text-base text-heading xl:px-4 group-hover:text-black">
      {item.label}
    </div>
  );
};

const Nav: React.FC<NavProps> = ({}) => {
  const items = [
    {id: "1", label: "Demos", subItems: []},
    {id: "2", label: "Men Wear", subItems: []},
    {id: "3", label: "Women Wear", subItems: []},
    {id: "4", label: "Casual Wear", subItems: []},
    {id: "5", label: "Search", subItems: []},
    {id: "6", label: "Shops", subItems: []},
  ];

  return (
    <div className="">
      <div className="container mx-auto h-[96px] flex flex-row items-center justify-between">
        <div className="flex flex-row items-center">
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
