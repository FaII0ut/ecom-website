import React from "react";

interface ContactUsProps {}

const ContactUs: React.FC<ContactUsProps> = ({}) => {
  return (
    <div className="mx-auto container">
      <div className="flex flex-col items-center justify-center mt-4 mb-24">
        <p className="text-heading text-lg md:text-xl lg:text-2xl 2xl:text-3xl xl:leading-10 font-bold mb-2 md:mb-3 lg:mb-3.5">
          Talk To A Real Person
        </p>
        <p className="text-xs leading-6 text-body md:text-sm md:leading-7">
          Are you on the fence? Have a question? Need a recommendation?
        </p>
        <p className="text-xs leading-6 text-body md:text-sm md:leading-7 mb-6">
          Member Services is always here to help. Send us a message.
        </p>
        <img src=" https://chawkbazar.redq.io/_next/image?url=%2Fassets%2Fimages%2Fsupport.png&w=1920&q=75" />
        <div className="bg-zinc-950 rounded-md px-4 py-3 text-white hover:bg-zinc-800 cursor-pointer transition-all duration-300">
          Chat With Member Services
        </div>
      </div>
      <div className="flex flex-row justify-between items-center my-12">
        <div>
          <p className="text-heading text-lg md:text-xl lg:text-2xl 2xl:text-3xl xl:leading-10 font-bold mb-2 md:mb-2.5 lg:mb-3 xl:mb-3.5">
            Get Expert Tips In Your Inbox
          </p>
          <p className="text-body text-xs md:text-sm leading-6 md:leading-7">
            Subscribe to our newsletter and stay updated.
          </p>
        </div>
        <div className="w-1/3 flex flex-row gap-3">
          <input className="border h-12 rounded-lg w-full px-3"  placeholder="Write something here"/>
          <div className="bg-zinc-950 rounded-md px-4 py-3 text-white hover:bg-zinc-800 cursor-pointer transition-all duration-300 font-semibold">
            Subscribe
          </div>
        </div>
      </div>
    </div>
  );
};
export default ContactUs;
