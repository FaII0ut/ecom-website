import * as React from "react";
import {SVGProps} from "react";
const CartIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={18}
    height={18}
    className="md:w-4 xl:w-5 md:h-4 xl:h-5"
    viewBox="0 0 20 20"
    {...props}
  >
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M3 2h14a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1ZM0 3a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v14a3 3 0 0 1-3 3H3a3 3 0 0 1-3-3Zm10 7c-2.761 0-5-2.686-5-6h2c0 2.566 1.669 4 3 4s3-1.434 3-4h2c0 3.314-2.239 6-5 6Z"
    />
  </svg>
);
export default CartIcon;
