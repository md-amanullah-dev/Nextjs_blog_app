import React from "react";
import Image from "next/image";
import { SiBloglovin } from "react-icons/si";
import { FaFacebook,FaTwitter,FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="flex justify-around flex-col gap-2 sm:gap-0 sm:flex-row bg-black py-5 items-center">
      <SiBloglovin className="text-white"  size={70}/>
      <p className="text-sm text-white">
        All right reserved copyright @blogger
      </p>
      <div className="flex">
      <FaFacebook className="text-white" size={40} />
      <FaTwitter className="text-white"  size={40}/>
      <FaInstagram className="text-white"  size={40} />
      </div>
    </div>
  );
};

export default Footer;
