"use client";

import { blog_data } from "@/Assets/assets";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { SiBloglovin } from "react-icons/si";
import { FaLongArrowAltRight } from "react-icons/fa";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import Footer from "@/components/Footer";
import Link from "next/link";

const page = ({ params }) => {
  const [data, setData] = useState(null);

  const fetchBlogsData = () => {
    for (let i = 0; i < blog_data.length; i++) {
      if (Number(params.id) === blog_data[i].id) {
        setData(blog_data[i]);
        console.log("hiii", blog_data[i]);
        break;
      }
    }
  };

  useEffect(() => {
    fetchBlogsData();
  }, []);
  return data ? (
    <>
      <div className="bg-gray-200 py-5 px-5 md:px-12 lg:px-28">
        <div className="flex justify-between items-center">
          <Link href={"/"}>
            <SiBloglovin size={50} className="w-[130px] sm:w-auto" />
          </Link>

          <button className="flex items-center gap-2 font-medium py-1 px-3 sm:py-3 sm:px-6 border border-black  shadow-[-7px_7px_0px_#000000] ">
            get Started <FaLongArrowAltRight size={20} />
          </button>
        </div>

        <div className="text-center my-24">
          <h1 className="text-2xl sm:text-5xl font-semibold max-w-[700px] max-auto ">
            {data.title}
          </h1>

          <Image
            className="rounded-full object-fill max-auto mt-6 border border-white "
            src={data.author_img}
            alt="Author profile"
            width={100}
            height={100}
          />
          <p className="mt-1 pb-2 text-lg max-w-[740px] max-auto">
            {data.author}{" "}
          </p>
        </div>
      </div>

      <div className="mx-5 max-w-[500px] md:mx-auto mt-[-100px] mb-10 ">
        <Image
          className="border-4 border-white object-fill"
          src={data.image}
          width={1260}
          height={720}
          alt="post image"
        />
        <h1 className="my-8 text-[25px] font-semibold">Introductio: {}</h1>
        <p className="">{data.description} </p>
        <h3 className="my-5 text-[18px] font-semibold">
          {" "}
          Step1: Self Reflection and Goal Setting
        </h3>
        <p className="my-3">
          Before you can manage your lifestyle, you must have a clear
          understanding what you want to achieve. Start by reflecting on your
          values, anspirations, and long term goals.{" "}
        </p>
        <p className="my-3">
          Before you can manage your lifestyle, you must have a clear
          understanding what you want to achieve. Start by reflecting on your
          values, anspirations, and long term goals.{" "}
        </p>

        <h3 className="my-5 text-[18px] font-semibold">
          {" "}
          Step2: Self Reflection and Goal Setting
        </h3>
        <p className="my-3">
          Before you can manage your lifestyle, you must have a clear
          understanding what you want to achieve. Start by reflecting on your
          values, anspirations, and long term goals.{" "}
        </p>
        <p className="my-3">
          Before you can manage your lifestyle, you must have a clear
          understanding what you want to achieve. Start by reflecting on your
          values, anspirations, and long term goals.{" "}
        </p>

        <h3 className="my-5 text-[18px] font-semibold">
          {" "}
          Step3: Self Reflection and Goal Setting
        </h3>
        <p className="my-3">
          Before you can manage your lifestyle, you must have a clear
          understanding what you want to achieve. Start by reflecting on your
          values, anspirations, and long term goals.{" "}
        </p>
        <p className="my-3">
          Before you can manage your lifestyle, you must have a clear
          understanding what you want to achieve. Start by reflecting on your
          values, anspirations, and long term goals.{" "}
        </p>

        <h3 className="my-5 text-[18px] font-semibold">Conclusion :</h3>

        <p className="my-3">
          Before you can manage your lifestyle, you must have a clear
          understanding what you want to achieve. Start by reflecting on your
          values, anspirations, and long term goals.{" "}
        </p>

        <div className="my-24">
          <p className="text-black font font-semibold my-4">
            Share this article in socail media
          </p>
          <div className="flex">
            <FaFacebook className="text-black" size={40} />
            <FaTwitter className="text-black" size={40} />
            <FaInstagram className="text-black" size={40} />
          </div>
        </div>
      </div>
      <Footer />
    </>
  ) : (
    <></>
  );
};

export default page;
