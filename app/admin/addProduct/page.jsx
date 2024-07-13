
"use client";
import React, { useState } from "react";
import { IoCloudUploadOutline } from "react-icons/io5";
import { toast } from "react-toastify";
import axios from "axios";

const Page = () => {
  const [image, setImage] = useState(null);

  const [data, setData] = useState({
    title: "",
    description: "",
    category: "Startup",
    author: "Adil rose",
    author_image: "/Profile_img.jpg",
  });

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData((data) => ({ ...data, [name]: value }));
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    const formData = new FormData();

    formData.append('title', data.title);
    formData.append('description', data.description);
    formData.append('category', data.category);
    formData.append('author', data.author);
    formData.append('author_image', data.author_image);
    if (image) {
      formData.append('image', image);
    }

    try {
      const response = await axios.post('/api/blog', formData);
      if (response.data.success) {
        toast.success(response.data.message);
        setImage(false);
        setData(
          {
            title: "",
            description: "",
            category: "Startup",
            author: "Adil rose",
            author_image: "/Profile_img.jpg",
          }
        )
      } else {
        toast.error("Error");
      }
    } catch (error) {
      toast.error("An error occurred while adding the blog.");
      console.error(error);
    }
  };

  return (
    <form onSubmit={onSubmitHandler} className="pt-5 px-5 sm:pt-12 sm:pl-16">
      <p className="text-xl">Upload thumbnail</p>
      <label htmlFor="image">
        <IoCloudUploadOutline className="mt-4" size={40} />
      </label>
      <input
        onChange={(e) => setImage(e.target.files[0])}
        type="file"
        id="image"
        hidden
        required
      />
      <p className="text-xl mt-4">Blog Title</p>
      <input
        name="title"
        value={data.title}
        onChange={onChangeHandler}
        className="w-full sm:w-[500px] mt-4 px-4 py-3 border border-black"
        type="text"
        placeholder="Type here"
        required
      />

      <p className="text-xl mt-4">Blog Description</p>
      <textarea
        name="description"
        value={data.description}
        onChange={onChangeHandler}
        className="w-full sm:w-[500px] mt-4 px-4 py-3 border border-black"
        placeholder="Write content here"
        required
      />

      <p className="text-xl mt-4">Blog Category</p>
      <select
        value={data.category}
        onChange={onChangeHandler}
        name="category"
        className="w-40 mt-4 px-4 py-3 border text-gray"
      >
        <option value="Startup">Startup</option>
        <option value="Technology">Technology</option>
        <option value="Lifestyle">Lifestyle</option>
      </select>

      <button type="submit" className="mt-8 w-40 h-12 text-white bg-black">
        ADD
      </button>
    </form>
  );
};

export default Page;

