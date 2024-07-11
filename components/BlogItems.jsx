"use client";
import React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

export default function BlogItems({ image, title, description, category, id }) {
  return (
    <div className="max-w-[330px] sm:max-w-[300px] bg-white-600 border border-black hover:shadow-[-7px_7px_0px] ">
    <Link href={`/blogs/${id}`}>
      <Image
        src={image}
        width={400}
        height={400}
        className="border-b border-black"
      />
      </Link>
      <p className="ml-5 mt-5 px-1 inline-block bg-black text-white text-sm">
        {category}
      </p>
      <div className="p-5">
        <h1 className="mb-2 text-lg font-medium tracking-light text-gray-900  ">
          {title}
        </h1>
        <p className="mb-3 text-lg font-medium tracking-light text-gray-700">
          {" "}
          {description}
        </p>
        <Link href={`/blogs/${id}`} className="inline-flex itenms-center py-2 font-semibold text-center">
          Read More <FaLongArrowAltRight size={20} className="m-1" />
        </Link>
      </div>
    </div>
  );
}
