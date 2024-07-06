import { useState } from "react";
import { Link } from "react-scroll";
import { FaBars, FaTimes } from "react-icons/fa";
import { TiSocialFacebookCircular } from "react-icons/ti";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  // Array for page links
  const links = [
    {
      id: 1,
      link: "about",
    },
    {
      id: 2,
      link: "resume",
    },
    {
      id: 3,
      link: "researchers",
    },
    {
      id: 4,
      link: "Achievements",
    },
    {
      id: 5,
      link: "blogs",
    },
    {
      id: 6,
      link: "contact",
    },
  ];

  // Array for Social Media Details
  const social = [
    {
      id: 1,
      child: (
        <>
          <FaFacebookSquare />
        </>
      ),
      href: "https://www.facebook.com/profile.php?id=100082492470492&mibextid=ZbWKwL",
    },
    {
      id: 2,
      child: (
        <>
          <FaInstagram />
        </>
      ),
      href: "https://www.instagram.com/invites/contact/?i=fuw748pwvrrn&utm_content=u6x36mv",
    },
    {
      id: 3,
      child: (
        <>
          <FaLinkedin />
        </>
      ),
      href: "https://www.linkedin.com/in/udeshi-bandara-29a394203?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    },
  ];

  return (
    <>
      <div className="flex justify-between items-center min-w-fit w-full h-20 px-4 text-[#ffffff] bg-[#001139] fixed z-40">
        <div>
          {/* Display the Logo in Navbar*/}
          <Link to="home" smooth duration={500}>
            <h1 className="text-3xl pl-32 font-bold text-[#A7F0FD] cursor-pointer capitalize">
              Udeshi
            </h1>
          </Link>
        </div>

        {/* Displaying Navbar Links */}
        <ul className="hidden md:flex">
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="px-4 cursor-pointer capitalize font-medium hover:scale-105 duration-200"
            >
              <Link to={link} smooth duration={500}>
                {link}
              </Link>
            </li>
          ))}
        </ul>

        {/* Displaying Social Media links */}
        <div className="cursor-pointer pr-40 z-10 ">
          <ul className="hidden md:flex">
            {social.map(({ id, child, href }) => (
              <li
                key={id}
                className="px-2 cursor-pointer hover:scale-105 duration-200"
              >
                <a href={href} target="_blank" rel="noreferrer">
                  {child}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Adding hamburger Icon and cross icon for Responsive Effect */}
        <div
          onClick={() => {
            setNav(!nav);
          }}
          className="cursor-pointer pr-4 z-10 text-stone-300 md:hidden sm:hidden"
        >
          {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
        </div>

        {nav && (
          <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-stone-300">
            {links.map(({ id, link }) => (
              <li
                key={id}
                className="px-4 cursor-pointer capitalize py-6 text-4xl"
              >
                <Link
                  onClick={() => setNav(!nav)}
                  to={link}
                  smooth
                  duration={500}
                >
                  {link}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
};

export default Navbar;
