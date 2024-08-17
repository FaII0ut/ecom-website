import * as React from "react";
import {SVGProps} from "react";
const SearchIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={17}
    height={18}
    className="md:w-4 xl:w-5 md:h-4 xl:h-5"
    viewBox="0 0 18.942 20"
    {...props}
  >
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="m14.471 14.115 3.583 3.576c.186.186.378.366.552.562a.993.993 0 1 1-1.429 1.375c-1.208-1.186-2.422-2.368-3.585-3.6a1.026 1.026 0 0 0-1.473-.246A8.343 8.343 0 1 1 8.448-.003a8.369 8.369 0 0 1 6.663 13.262c-.179.271-.383.519-.64.856Zm-6.152.579a6.342 6.342 0 1 0-6.306-6.355 6.305 6.305 0 0 0 6.305 6.359Z"
    />
  </svg>
);
export default SearchIcon;
