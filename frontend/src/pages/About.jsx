import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full min-h-screen md:min-h-screen bg-gradient-to-b from-[#001139] via-[#001139] to-[#05174D] text-stone-200 "
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col  w-full min-h-screen">
        <div>
          <p className="font-sans text-[#A7F0FD] text-center mt-10 text-sm">
            About Me
          </p>
          <p className=" text-[#A7F0FD] text-center text-4xl font-thin py-6">
            <span className="text-4xl font-bold">Know</span> Me More
          </p>
          <br />
        </div>
        {/* Left Column */}
        <div className="flex mt20 ">
          <div className="sm:w-2/3 pr-4">
            <p className="text-4xl font-light mt-20 text-stone-200">
              Hello I'm{" "}
              <span className="text-white font-medium">
                Udeshi Harshani Bandara
              </span>
            </p>
            <p className="mt-3 font-light leading-relaxed text-justify">
              I excelled in my 13-year high school education, specializing in
              biology <br /> scheme and continued to pursue a double major in
              chemistry and <br /> physics during the undergraduate degree. I
              conducted <br /> groundbreaking research leading to a published
              papers, <br /> international conferences and presentations.
              Currently working on <br />
              the research part and already completed the theoretical part in
              MSc <br /> of Applied Organic Chemistry. I have over 5 years of
              experience in <br />
              statistical analysis and research and development. With 8 years of{" "}
              <br />
              reaching and lecturing experiences from high school to <br />{" "}
              postgraduate levels students all over the world. Specially my goal
              is <br />
              to drive innovation and contribute to research and development{" "}
              <br /> as a scientist.
            </p>{" "}
            <br />
          </div>
          {/* Right Column stuff (10+ years of Experience)*/}
          <div className="w-1/3 pl-4 rounded-md items-center justify-center hidden sm:block ">
            <p className="mt-60 text-[150px] font-medium text-white text-center leading-10">
              10+{" "}
              <span className="font-normal text-sm text-stone-200">
                Years of Experience
              </span>{" "}
            </p>
          </div>
        </div>
        {/* Section for Cards */}
        {/* <div className="flex justify-between mt-10 flex-wrap justify-content-center"> */}
        <div className="grid sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-6 ">
          {/* Email Card */}
          <div className="w-full rounded-md bg-black p-4 mr-4 text-left">
            <p className="font-bold text-md  text-white">Email</p>
            <p className="font-normal text-sm text-stone-200">
              ebbandara199@gmail.com
            </p>
          </div>
          {/* Mobile Card */}
          <div className="w-full rounded-md bg-black p-4 mr-4 text-left ">
            <p className="font-bold text-md text-white">Mobile</p>
            <p className="font-normal text-sm text-stone-200">
              +94710941329/+94767998070
            </p>
          </div>
          {/* DOB Card */}
          <div className="w-full  rounded-md bg-black p-4 mr-4 text-left ">
            <p className="font-bold text-md text-white">Date of Birth</p>
            <p className="font-normal text-sm text-stone-200">
              15th March, 1995
            </p>
          </div>
          {/* From Card */}
          <div className="w-full  rounded-md bg-black p-4 mr-4 text-left ">
            <p className="font-bold text-md text-white">From</p>
            <p className="font-normal text-sm text-stone-200">
              Kandy, Sri Lanka
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
