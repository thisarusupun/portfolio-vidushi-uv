import React, { useState } from "react";
import Footer from "../components/Footer";
//import "../styles/styles.css";
import { sendMail } from "../api/Email";
import { MdOutlineEmail } from "react-icons/md";
import { IoCallOutline } from "react-icons/io5";
import { CiLocationOn } from "react-icons/ci";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";

function Contacts() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubjecte] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const send = async () => {
    const data = {
      name: name,
      email: email,
      subject: subject,
      message: message,
    };
    setLoading(true);
    const response = await sendMail(data);
    setLoading(false);

    if (response?.status === 200) {
      alert("SUBMISSION SUCCESSFUL!");
      setName("");
      setEmail("");
      setSubjecte("");
      setMessage("");
    }
  };

  return (
    <div
      name="contact"
      className="w-full min-h-screen md:min-h-screen bg-gradient-to-b from-[#001139] via-[#001139] to-[#05174D] text-stone-200 pt-20"
    >
      <div className="flex-1">
        <div className="bg-[url('src/Assests/images/contactus.png')] bg-[100vw] w-full h-[1000px] aspect-w-16 aspect-h-9 overflow-hidden">
          <p className="text-[#90F2FF] opacity-100 text-center pt-2 md:pt-2">
            Contact Me
          </p>
          <p className="text-center poppins-thin text-[50px] text-[#90F2FF] pt-[10px]">
            <span className="text-center font-[poppins] font-semibold text-[50px] text-[#90F2FF]">
              Let’s
            </span>{" "}
            get in touch
          </p>
          <div className="absolute w-[100vw] md:w-[39.23vw] md:h-[697px] left-[0vw] md:left-[50.58vw] bg-transparent pt-[80px]">
            <div className="flex items-center justify-center md:flex md:items-start md:justify-start">
              <div className="w-[80vw] rounded-sm md:w-[39.23vw] h-[540px] md:h-[697px] bg-[#EDF2FF]">
                {/* <form> */}
                <p className="font-[poppins] font-medium pt-[30px] text-left pl-[2.196vw] text-[#00113D] opacity-1 h-[23px] pb-[20px]">
                  Name *
                </p>{" "}
                <br />
                <div className="pl-[2.196vw]">
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="text-gray-700 border-black border h-[35px] md:h-[55px] w-[75vw] md:w-[34.94vw] text-[20px] md:text-[24px]"
                    required
                  />
                </div>
                <br />
                <p className=" font-[poppins] font-medium text-left pl-[2.196vw] text-[#00113D] opacity-1 h-[23px] pb-[20px]">
                  Email *
                </p>
                <br />
                <div className="pl-[2.196vw]">
                  <input
                    type="text"
                    id="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="text-gray-700 border-black border h-[35px] md:h-[55px] w-[75vw] md:w-[34.94vw]  text-[20px] md:text-[24px] z-100"
                    required
                  />
                </div>
                <br />
                <p className=" font-[poppins] font-medium text-left pl-[2.196vw] text-[#00113D] opacity-1 h-[23px] pb-[20px]">
                  Subject *
                </p>
                <br />
                <div className="pl-[2.196vw]">
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={subject}
                    onChange={(e) => setSubjecte(e.target.value)}
                    className="text-gray-700 border-black border h-[35px] md:h-[55px] w-[75vw] md:w-[34.94vw] text-[20px] md:text-[24px]"
                    required
                  />
                </div>
                <br />
                <p className=" font-[poppins] font-medium text-left pl-[2.196vw] text-[#00113D] opacity-1 h-[23px] pb-[20px] font-poppins">
                  Message *
                </p>
                <br />
                <div className="pl-[2.196vw]">
                  <textarea
                    type="text"
                    id="message"
                    name="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="text-gray-700 border-black border h-[75px] md:h-[135px] w-[75vw] md:w-[34.94vw] text-[20px] md:text-[24px]"
                    required
                  />
                </div>
                <br />
                <div className="flex items-center justify-center">
                  {!loading && (
                    <button
                      disabled={loading}
                      type="submit"
                      onClick={send}
                      className="hover:scale-105 duration-200 rounded-sm bg-[#00113D] h-[35px] md:h-[55px] w-[17vw] md:w-[9.44vw] text-white poppins-thinb  opacity-1 "
                    >
                      Submit
                    </button>
                  )}
                  {loading && <div className="spinner"></div>}
                </div>
                {/* </form> */}
              </div>
            </div>
          </div>

          <div className="relative top-[650px] md:top-[272.09px] left-[10.175vw] w-[80vw] md:w-[38vw] font-thin">
            <a
              href="mailto:ebbandara199@gmail.com"
              className="text-white poppins-thin flex items-center text-[16px] gap-2"
            >
              <MdOutlineEmail className="h-6 w-6" />
              <p className="text-white poppins-thin text-[16px]">
                ebbandara199@gmail.com
              </p>
            </a>

            <div className="flex flex-row  my-4 gap-2">
              <IoCallOutline color="white" className="h-6 w-6" />
              <p className="text-white poppins-thin text-[16px]">
                +94710941329/+94767998070
              </p>
            </div>

            <div className="flex flex-row gap-2">
              <CiLocationOn color="white" className="h-6 w-6" />
              <p className="text-white poppins-thin text-[16px]">
                No. 361/4, Maligathenna, Ampitiya, Kandy, Sri Lanka
              </p>
            </div>
          </div>

          <div className="relative top-[680px] md:top-[390px] left-[10.175vw] md:w-[7.45vw] h-[59.83px] bg-transparent">
            <p className="text-white  poppins-thin text-[16px]">Follow me</p>
            <div className="pt-[19px]">
              <div className="flex flex-row md:justify-center items-left space-x-[6vw] md:space-x-[1.7vw]">
                <a
                  href="https://web.facebook.com/profile.php?id=100082492470492&mibextid=ZbWKwL&_rdc=1&_rdr"
                  target="_blank"
                >
                  <FaFacebookSquare
                    color="white"
                    className="h-6 w-6 hover hover:scale-125 duration-200"
                  />
                </a>
                <a
                  href="https://www.instagram.com/invites/contact/?i=fuw748pwvrrn&utm_content=u6x36mv"
                  target="_blank"
                >
                  <FaInstagram
                    color="white"
                    className="h-6 w-6 hover hover:scale-125 duration-200"
                  />
                </a>
                <a
                  href="https://www.linkedin.com/in/udeshi-bandara-29a394203/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                  target="_blank"
                >
                  <FaLinkedin
                    color="white"
                    className="h-6 w-6 hover hover:scale-125 duration-200"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Contacts;
