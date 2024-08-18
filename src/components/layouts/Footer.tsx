import React from "react";

interface FooterProps {}

const Footer: React.FC<FooterProps> = ({}) => {
  return (
    <div className="border-t border-gray-300 w-full">
      <div className="mx-auto container">
        <div className="grid grid-cols-6">
          <div className="flex flex-col py-12">
            <p className="mb-3 font-semibold text-lg">Social</p>
            <div className="flex flex-row items-center space-x-2 opacity-60 mb-1">
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 512 512"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M480 257.35c0-123.7-100.3-224-224-224s-224 100.3-224 224c0 111.8 81.9 204.47 189 221.29V322.12h-56.89v-64.77H221V208c0-56.13 33.45-87.16 84.61-87.16 24.51 0 50.15 4.38 50.15 4.38v55.13H327.5c-27.81 0-36.51 17.26-36.51 35v42h62.12l-9.92 64.77H291v156.54c107.1-16.81 189-109.48 189-221.31z"
                ></path>
              </svg>
              <p>/redqinc</p>
            </div>
            <div className="flex flex-row items-center space-x-2 opacity-60 mb-1">
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 512 512"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M480 257.35c0-123.7-100.3-224-224-224s-224 100.3-224 224c0 111.8 81.9 204.47 189 221.29V322.12h-56.89v-64.77H221V208c0-56.13 33.45-87.16 84.61-87.16 24.51 0 50.15 4.38 50.15 4.38v55.13H327.5c-27.81 0-36.51 17.26-36.51 35v42h62.12l-9.92 64.77H291v156.54c107.1-16.81 189-109.48 189-221.31z"
                ></path>
              </svg>
              <p>/redqinc</p>
            </div>
            <div className="flex flex-row items-center space-x-2 opacity-60 mb-1">
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 512 512"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M480 257.35c0-123.7-100.3-224-224-224s-224 100.3-224 224c0 111.8 81.9 204.47 189 221.29V322.12h-56.89v-64.77H221V208c0-56.13 33.45-87.16 84.61-87.16 24.51 0 50.15 4.38 50.15 4.38v55.13H327.5c-27.81 0-36.51 17.26-36.51 35v42h62.12l-9.92 64.77H291v156.54c107.1-16.81 189-109.48 189-221.31z"
                ></path>
              </svg>
              <p>/redqinc</p>
            </div>
          </div>
          <div className="flex flex-col py-12">
            <p className="mb-3 font-semibold text-lg">Contact</p>
            <p className="opacity-60">Contact us</p>
            <p className="opacity-60">Website: https://redq.io</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
