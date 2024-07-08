import { blog_data } from "@/Assets/assets";
import React from "react";
import BlogItems from "./BlogItems";

const BlogList = () => {
  return (
    <>
      {" "}
      <div className="flex justify-center gap-6 my-10">
        <button className="bg-black text-white py-1 px-4 rounded-sm">
          All
        </button>
        <button>Technology</button>
        <button>Startup</button>
        <button>Lifistyle</button>
      </div>
      <div className="flex flex-wrap jutify-arround  gap-1 gap-y-10 mb-16 xl:mx-24 ">
        {blog_data.map((item, index) => {
          return (
            <BlogItems
              key={index}
              image={item.image}
              title={item.title}
              description={item.description}
              category={item.category}
            />
          );
        })}
      </div>
    </>
  );
};

export default BlogList;
