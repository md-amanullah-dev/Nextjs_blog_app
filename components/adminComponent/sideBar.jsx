import React from "react";
import { SiBloglovin } from "react-icons/si";
import { IoIosAddCircleOutline } from "react-icons/io";
import { GoChecklist } from "react-icons/go";
import { MdOutlineUnsubscribe } from "react-icons/md";
import Link from "next/link";

const SideBar = () => {
  return (
    <>
      <div className="felx flex-col bg-slate-100 ">
        <div className="px-2 sm:pl-14 py-3 border border-black ">
          <SiBloglovin className="" size={50} />
        </div>

        <div className="w-28 sm:w-80 h-[100vh] relative py-12 border border-black ">
          <div className="w-[50%] sm:w-[80%] absolute right-0 ">
            <Link href={'/admin/addProduct'} className="flex items-center border border-black gap-3 font-medium px-3 py-2 bg-white shadow-[-5px_5px_0px_#000000]">
              <IoIosAddCircleOutline size={30} />
              <p>Add Blog</p>
            </Link>

            <Link href={'/admin/blogList'} className="flex mt-5 items-center border border-black gap-3 font-medium px-3 py-2 bg-white shadow-[-5px_5px_0px_#000000]">
              <GoChecklist  size={30} />
              <p>Blog List</p>
            </Link>
            <Link href={'/admin/subscriptions'} className="flex mt-5 items-center border border-black gap-3 font-medium px-3 py-2 bg-white shadow-[-5px_5px_0px_#000000]">
              <MdOutlineUnsubscribe size={30} />
              <p>Subscription</p>
            </Link>

          </div>
        </div>
      </div>
    </>
  );
};

export default SideBar;
