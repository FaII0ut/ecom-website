import React from "react";

interface FooterProps {}

const Footer: React.FC<FooterProps> = ({}) => {
  return (
    <>
      <div className="border-t border-gray-300 w-full">
        <div className="mx-auto container">
          <div className="grid grid-cols-6">
            <div className="flex flex-col py-12">
              <p className="mb-3 font-semibold text-lg text-zinc-900">Social</p>
              <div className="flex flex-row items-center space-x-2 opacity-60 mb-1.5">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 512 512"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M480 257.35c0-123.7-100.3-224-224-224s-224 100.3-224 224c0 111.8 81.9 204.47 189 221.29V322.12h-56.89v-64.77H221V208c0-56.13 33.45-87.16 84.61-87.16 24.51 0 50.15 4.38 50.15 4.38v55.13H327.5c-27.81 0-36.51 17.26-36.51 35v42h62.12l-9.92 64.77H291v156.54c107.1-16.81 189-109.48 189-221.31z"
                  ></path>
                </svg>
                <p className="text-sm">/redqinc</p>
              </div>
              <div className="flex flex-row items-center space-x-2 opacity-60 mb-1.5">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 512 512"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M480 257.35c0-123.7-100.3-224-224-224s-224 100.3-224 224c0 111.8 81.9 204.47 189 221.29V322.12h-56.89v-64.77H221V208c0-56.13 33.45-87.16 84.61-87.16 24.51 0 50.15 4.38 50.15 4.38v55.13H327.5c-27.81 0-36.51 17.26-36.51 35v42h62.12l-9.92 64.77H291v156.54c107.1-16.81 189-109.48 189-221.31z"
                  ></path>
                </svg>
                <p className="text-sm">/redqinc</p>
              </div>
              <div className="flex flex-row items-center space-x-2 opacity-60 mb-1.5">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 512 512"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M480 257.35c0-123.7-100.3-224-224-224s-224 100.3-224 224c0 111.8 81.9 204.47 189 221.29V322.12h-56.89v-64.77H221V208c0-56.13 33.45-87.16 84.61-87.16 24.51 0 50.15 4.38 50.15 4.38v55.13H327.5c-27.81 0-36.51 17.26-36.51 35v42h62.12l-9.92 64.77H291v156.54c107.1-16.81 189-109.48 189-221.31z"
                  ></path>
                </svg>
                <p className="text-sm">/redqinc</p>
              </div>
            </div>
            <div className="flex flex-col py-12">
              <p className="mb-3 font-semibold text-lg text-zinc-900">
                Contact
              </p>
              <p className="opacity-50 mb-1.5 text-sm">Contact us</p>
              <p className="opacity-50 mb-1.5 text-sm">
                Website: https://redq.io
              </p>
            </div>
            <div className="flex flex-col py-12">
              <p className="mb-3 font-semibold text-lg text-zinc-900">About</p>
              <p className="opacity-50 mb-1.5 text-sm">Support Center</p>
              <p className="opacity-50 mb-1.5 text-sm">Customer Support</p>
              <p className="opacity-50 mb-1.5 text-sm">About Us</p>
              <p className="opacity-50 mb-1.5 text-sm">Copyright</p>
            </div>
            <div className="flex flex-col py-12">
              <p className="mb-3 font-semibold text-lg text-zinc-900">
                Customer Care
              </p>
              <p className="opacity-50 mb-1.5 text-sm">FAQ & Helps</p>
              <p className="opacity-50 mb-1.5 text-sm">Shipping & Delivery</p>
              <p className="opacity-50 mb-1.5 text-sm">Return & Exchanges</p>
            </div>
            <div className="flex flex-col py-12">
              <p className="mb-3 font-semibold text-lg text-zinc-900">
                Our Information
              </p>
              <p className="opacity-50 mb-1.5 text-sm">Privacy policy update</p>
              <p className="opacity-50 mb-1.5 text-sm">Terms & conditions</p>
              <p className="opacity-50 mb-1.5 text-sm">Return Policy</p>
              <p className="opacity-50 mb-1.5 text-sm">Site Map</p>
            </div>
            <div className="flex flex-col py-12">
              <p className="mb-3 font-semibold text-lg text-zinc-900">
                Community
              </p>
              <p className="opacity-50 mb-1.5 text-sm">Announcements</p>
              <p className="opacity-50 mb-1.5 text-sm">Answer center</p>
              <p className="opacity-50 mb-1.5 text-sm">Discussion boards</p>
              <p className="opacity-50 mb-1.5 text-sm">Giving works</p>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-300 w-full">
        <div className="mx-auto container py-6">
          <p className="text-zinc-600">
            ©2024{" "}
            <span className="font-semibold text-zinc-900">ChawkBazar.</span>{" "}
            Copyright © REDQ. All rights reserved worldwide.{" "}
            <span className="font-semibold text-zinc-900">REDQ</span>
          </p>
        </div>
      </div>
    </>
  );
};
export default Footer;
