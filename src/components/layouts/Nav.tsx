import React from "react";

interface NavProps {}

const Nav: React.FC<NavProps> = ({}) => {
  return (
    <div className="bg-red-400">
      <div className="container mx-auto py-3">
        <div className="w-32">
          <img src="https://chawkbazar.redq.io/_next/image?url=https%3A%2F%2Fchawkbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F258%2Flogo-final2x.png&w=640&q=75" />
        </div>
      </div>
    </div>
  );
};
export default Nav;
