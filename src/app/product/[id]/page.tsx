import MainNav from "@/app/Components/MainNav";
import React from "react";
import Image from "next/image";

function Product() {
  return (
    <div className=" min-h-screen bg-[#f2f2f2]">
      <MainNav></MainNav>
      <div className="my-5 flex flex-row-reverse">
        <div className="flex flex-row-reverse ">
          <div className="w-[55vw] flex flex-col">
            <div className="text-2xl  pt-[10vh] font-sans	font-bold pl-[3vw] pr-[3vw] ">
              Oversized T shirts
            </div>
            <div className="text-2xl  pt-[3vh] font-sans	font-normal pl-[3vw] pr-[3vw] ">
              <span className="font-semibold">Description</span> : Lorem ipsum,
              dolor sit amet consectetur adipisicing elit. Praesentium, tempore.
              Sint, officia. Iusto facilis, quaerat tempora, molestiae
              recusandae dis earum!
            </div>
            <div className="text-2xl  pt-[3vh] font-sans	font-normal pl-[3vw] pr-[3vw] ">
              <span className="font-semibold">Price</span> : $100
            </div>
            <div className="text-2xl  pt-[3vh] font-sans	font-normal pl-[3vw] pr-[3vw] ">
              <span className="font-semibold">Size</span> : L
            </div>
            <div className="w-fit pl-[3vw] pr-[3vw] pt-[4vh]"> 
            <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
              Add To Cart
            </button>
            </div>
          </div>
          <div className="w-[40vw] pl-4 flex rounded-2xl">
            <div className=" pb-5 ">
              <Image
                src="/flipimage2.png"
                alt="Vercel Logo"
                className="dark:invert"
                width={400}
                height={100}
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
