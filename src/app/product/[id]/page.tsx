"use client";

import MainNav from "@/app/Components/MainNav";
import React from "react";
import Image from "next/image";
import { ProductType } from "@/utils/types";


const productData: ProductType[] = [
  {
    api: "New User",
    imgLink:
      "https://res.cloudinary.com/shubh-sardana/image/upload/v1692333743/topwear/anarkali_kurti.jpg",
    item: "Anarkali kurti",
    price: "1164",
    size: "S",
  },
  {
    api: "New User",
    imgLink:
      "https://res.cloudinary.com/shubh-sardana/image/upload/v1692334200/footwear/synthetic_sandals.jpg",
    item: "Synthetic Sandals",
    price: "474",
    size: "M",
  },
  {
    api: "New User",
    imgLink:
      "https://res.cloudinary.com/shubh-sardana/image/upload/v1692333882/topwear/oversized_tshirt.jpg",
    item: "Oversized Tshirt",
    price: "606",
    size: "M",
  },
  {
    api: "New User",
    imgLink:
      "https://res.cloudinary.com/shubh-sardana/image/upload/v1692333575/bottomwear/high_rise_jeans.png",
    item: "High Rise jeans",
    price: "900",
    size: "L",
  },
  {
    api: "New User",
    imgLink:
      "https://res.cloudinary.com/shubh-sardana/image/upload/v1692333947/topwear/round_neck_sweater.jpg",
    item: "Round neck sweater",
    price: "960",
    size: "L",
  },
  {
    api: "New User",
    imgLink:
      "https://res.cloudinary.com/shubh-sardana/image/upload/v1692334262/footwear/running_shoes.png",
    item: "Running Shoes",
    price: "1099",
    size: "L",
  },
  {
    api: "New User",
    imgLink:
      "https://res.cloudinary.com/shubh-sardana/image/upload/v1692334025/bottomwear/rugged_cargo_pant.jpg",
    item: "Rugged Cargo pant",
    price: "1161",
    size: "M",
  },
  {
    api: "New User",
    imgLink:
      "https://res.cloudinary.com/shubh-sardana/image/upload/v1692334122/footwear/party_wear_boots.jpg",
    item: "Party wear boots",
    price: "1174",
    size: "M",
  },
  {
    api: "New User",
    imgLink:
      "https://res.cloudinary.com/shubh-sardana/image/upload/v1692333665/topwear/denim_shirt.jpg",
    item: "Denim Shirt",
    price: "950",
    size: "L",
  },
];

function Product(params: any) {
const item = params.params.id;
  const selectedProduct = productData.find(
    (product) =>  encodeURIComponent(product.item) === item
  );
  console.log(selectedProduct);
  
  return (
    <div className=" min-h-screen bg-[#f2f2f2]">
      <MainNav></MainNav>
      <div className="my-5 flex flex-row-reverse">
        <div className="flex flex-row-reverse ">
          <div className="w-[55vw] flex flex-col">
            <div className="text-2xl  pt-[10vh] font-sans	font-bold pl-[3vw] pr-[3vw] ">
             {selectedProduct?.item}
            </div>
            <div className="text-2xl  pt-[3vh] font-sans	font-normal pl-[3vw] pr-[3vw] ">
              <span className="font-semibold">Description</span> : FlipStore is your one stop Store to Get your favourite recommended Products.We know what you need !
            </div>
            <div className="text-2xl  pt-[3vh] font-sans	font-normal pl-[3vw] pr-[3vw] ">
              <span className="font-semibold">Price</span> :  ₹ {selectedProduct?.price}
            </div>
            <div className="text-2xl  pt-[3vh] font-sans	font-normal pl-[3vw] pr-[3vw] ">
              <span className="font-semibold">Size</span> : {selectedProduct?.size}
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
