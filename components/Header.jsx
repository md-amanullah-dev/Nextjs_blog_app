import React from "react";
import Image from "next/image";
import Logo from "../Assets/img1.jpeg";
import Arror from "../Assets/arror.png";

export default function Header() {
  return (
    <div className="px-5 py-5 md:px-12 lg:px-28">
      <div className="flex justify-between items-center">
        <Image
          src={Logo}
          alt="logo"
          width={180}
          className="w-[130px] sm:w-auto"
        />
        <button className="flex items-center gap-2 font-medium py-1 px-3 sm:py-3 sm:px-6 border border-solid border-black shadow-[-7px_7px_0px_#000000]">
          Get Started <Image src={Arror} alt="" className="w-[20px]" />{" "}
        </button>
      </div>

      <div className="text-center my-8">
      <h1 className="text-3xl sm:text:5xl font-medium">Latest Blog</h1>
      <p className="text-xs sm:text-base mt-10 max-w-[740px] m-auto">Any website you create begins with a clear and target audience. By identifying your niche and purpose, you can take steps towards building a site that not only looks pretty but performs as you hope it will.   </p>

<form className="flex justify-between max-w-[500px] scale-75 sm:scale-100 mx-auto mt-10 border border-black shadow-[-7px_7px_0px]">

    <input className="pl-4 outline-none" type="email" placeholder="Enter your email"/>
    <button type="submit" className="border-l border-black py-4 px-4 sm:px-8 active:bg-gray-600 active:bg-text-white">Subcribe</button>
</form>
      </div>
    </div>
  );
}
