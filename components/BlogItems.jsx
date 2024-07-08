import React from "react";
import { blog_data } from "@/Assets/assets";

import Arror from "../Assets/arror.png";

import Image from "next/image";

export default function BlogItems() {
  return (
    <div className="max-w-[330px] sm:max-w-[300px] bg-white-600 border border-black hover:shadow-[-7px_7px_0px] ">
      <Image
        src={blog_data[0].image}
        width={400}
        height={400}
        className="border-b border-black"
      />
      <p className="ml-5 mt-5 px-1 inline-block bg-black text-white text-sm">
        {blog_data[0].category}
      </p>
      <div className="p-5">
        <h1 className="mb-2 text-lg font-medium tracking-light text-gray-900  ">
          {blog_data[0].title}
        </h1>
        <p className="mb-3 text-lg font-medium tracking-light text-gray-700">
          {" "}
          {blog_data[0].description}
        </p>
        <div className="inline-flex itenms-center py-2 font-semibold text-center">
          Read More <Image className="w-[20px] m-1 " src={Arror} />
        </div>
      </div>
    </div>
  );
}
