import React from "react";
import HeroImage from "../Assets/Images/1.png";
import Logo from "../Assets/Images/Udeshi.png";

const Home = () => {
  return (
    <div
      name="home"
      className="min-h-screen h-auto w-full bg-gradient-to-b from-[#001139] via-[#001139] to-[#05174D] pb-2 pt-20"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-between h-full  text-[#A7F0FD] md:flex-row">
        <div className="text-center flex flex-col justify-center h-fit mt">
          <img
            src={Logo}
            alt=""
            className="font w-full h-auto md:w-72 md:h-auto rounded-lg"
          />{" "}
          {/*Name Image */}
          <h3 className="text-6xl sm:text-7xl text-[#A7F0FD] font-thin">
            Bandara
          </h3>
          <p className="py-4 max-w-md text-stone-200 font-sans font-thin italic">
            Researcher / Tutor / Blogger
          </p>
          <br />
          <p className=" text-stone-200 font-sans font-medium">
            Olympiad winner in Russia for Chemistry
            <br />
            and Material sciences
          </p>
          <br />
          <p className=" text-1xl sm:text-2xl text-stone-200 font-thin">
            World Rank{" "}
            <span className="text-2xl sm:text-3xl font-bold">32</span>
          </p>
        </div>

        <div>
          {/* Hero Image */}
          <img
            src={HeroImage}
            alt="Profile pic"
            className="w-60 h-auto md:w-96 md:h-auto rounded-lg md:block"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
