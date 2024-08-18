import React from "react";

interface DownloadAppProps {}

const DownloadApp: React.FC<DownloadAppProps> = ({}) => {
  return (
    <div className="mx-auto container mb-24">
      <div className="w-full flex flex-row relative h-[500px] rounded-lg bg-gray-100 px-24 pb-0 items-center">
        <div className="flex flex-col">
          <p className="text-3xl font-bold">The ChawkBazar App</p>
          <p className="text-4xl font-medium mt-3">
            Share Your <span className="font-bold">Ideas</span> & Shop
          </p>
          <p className="text-4xl font-medium mt-3">
            Endless <span className="font-bold">Inspiration</span>
          </p>
          <p></p>
        </div>
        <img className="absolute right-24 bottom-0" src="https://chawkbazar.redq.io/_next/image?url=%2Fassets%2Fimages%2Fapp.png&w=384&q=75" />
      </div>
    </div>
  );
};
export default DownloadApp;
