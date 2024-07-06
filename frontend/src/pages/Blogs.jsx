import React from "react";
import blog1 from "../Assets/Images/blog1.png";
import blog2 from "../Assets/Images/blog2.png";
import blog3 from "../Assets/Images/blog3.png";

const Blogs = () => {
  // Array of Blogs
  const blogs = [
    {
      id: 1,
      src: blog1,
      desc: "Blog 01",
    },
    {
      id: 2,
      src: blog2,
      desc: "Blog 02",
    },
    {
      id: 3,
      src: blog3,
      desc: "Blog 03",
    },
  ];
  return (
    <div
      name="blogs"
      className="w-full min-h-screen md:min-h-screen bg-gradient-to-b from-[#001139] via-[#001139] to-[#05174D] text-stone-200 pt-20 pb-4"
    >
      <div className="max-w-screen-lg px-4 mx-auto flex flex-col  w-full min-h-screen">
        <div className="pb-8">
          <p className="font-sans text-[#A7F0FD] text-center pt-2 text-sm">
            Blogs
          </p>
          <p className="text-[#A7F0FD] text-center text-4xl font-thin py-6">
            <span className="text-4xl font-bold">My </span>Blogs
          </p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 px-12 sm:px-0">
          {blogs.map(({ id, src, desc }) => (
            <div
              key={id}
              className="shadow-sm hover:shadow-md shadow-gray-600 hover:shadow-gray-600 rounded-lg overflow-hidden duration-200 hover:scale-105"
            >
              <img
                src={src}
                alt=""
                className="rounded-md  w-full h-52 object-cover"
              />
              <div className="flex items-center justify-left pt-2 px-4">
                <p className="font-xl font-normal">{desc}</p>
              </div>
              <div className="flex items-center justify-left px-4">
                <p className="font-xl font-thin">Read More</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
