import React from "react";
import qr from "../Assets/Images/qr.png";

const Research = () => {
  return (
    <div
      name="researchers"
      className="bg-gradient-to-b from-[#001139] via-[#001139] to-[#05174D] w-full h-auto text-white "
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full min-h-screen md:min-h-screen">
        <div className="pb-8">
          <p className="font-sans text-[#A7F0FD] text-center text-sm">
            Researchers
          </p>
          <p className="text-[#A7F0FD] text-center text-4xl font-thin py-6">
            <span className="text-4xl font-bold">A Summary of </span>My
            Researchers
          </p>
        </div>

        {/* Left Column */}
        <div className="flex mt-20 md:flex-wrap ">
          <div className="w-full md:w-1/12 pr-4">
            <div className="flex justify-center items-center text-center">
              <p className="flex items-center justify-center h-14 w-14 bg-black font-bold text-[25px] text-white">
                01.
              </p>
            </div>
          </div>
          {/* Middle Column */}
          <div className="w-full md:w-9/12 pr-4">
            <p className="text-white font-normal ">
              Full keratin hair growth oil portion: increasing the hair
              thickness, stringiness and depth of the follicles with peppermint
              extract
            </p>
          </div>
          {/* Right Column */}
          <div className="w-full md:w-2/12 flex flex-col">
            <img
              src={qr}
              className=" bg-black ml-10  w-[76px] h-[75px] top-[22px]"
            />
            <p className="text-white ml-10 mt-1 font-bold text-[16px]">
              Ref. No: 119
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Research;
