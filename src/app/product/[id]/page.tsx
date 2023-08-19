"use client";

import MainNav from "@/app/Components/MainNav";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { ProductType, SuggestedType } from "@/utils/types";
import axios from "axios";
import SuggestedCard from "@/app/Components/SuggestedCard";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

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

export default function ProductDesc(params: any) {
  const [cart, setCart] = useState<ProductType[]>([]);
  const [pastProduct, setPastProduct] = useState<SuggestedType[]>([]);

  useEffect(() => {
    const cartString = localStorage.getItem("cart");
    if (cartString) {
      const cartArray: ProductType[] = JSON.parse(cartString);
      setCart(cartArray);
    }
  }, []);

  function handleClick(product: ProductType | undefined) {
    const ifExists = cart.find((item) => item?.item === product?.item);

    if (ifExists) {
      const updatedCart = cart.filter((item) => item?.item !== product?.item);
      localStorage.setItem("cart", JSON.stringify(updatedCart));
      setCart(updatedCart);
    } else {
      const updatedCart = [...cart, product!];
      localStorage.setItem("cart", JSON.stringify(updatedCart));
      setCart(updatedCart);
    }
  }

  const item = (params.params ? params.params.id : "") as string;
  const selectedProduct = productData.find(
    (product) => encodeURIComponent(product.item) === item
  );

  useEffect(() => {
    axios
      .get(API_URL + "/api/past/predict/" + selectedProduct?.item)
      .then((response) => {
        const data = response.data;
        setPastProduct(Object.values(data));
      })
      .catch((error) => {
        console.log("Error in fetching data", error);
      });
  }, [selectedProduct]);

  const buttonText = cart.some((item) => item.item === selectedProduct?.item)
    ? "Remove from Cart"
    : "Add to Cart";

  return (
    <div className=" min-h-screen bg-[#f2f2f2]">
      <MainNav />
      <div className="my-5 flex flex-row-reverse">
        <div className="flex flex-row-reverse ">
          <div className="w-[55vw] flex flex-col">
            <div className="text-2xl  pt-[10vh] font-sans	font-bold pl-[3vw] pr-[3vw] ">
              {selectedProduct?.item}
            </div>
            <div className="text-2xl  pt-[3vh] font-sans	font-normal pl-[3vw] pr-[3vw] ">
              <span className="font-semibold">Description</span> : FlipStore is
              your one stop Store to Get your favourite recommended Products.We
              know what you need !
            </div>
            <div className="text-2xl  pt-[3vh] font-sans	font-normal pl-[3vw] pr-[3vw] ">
              <span className="font-semibold">Price</span> : ₹{" "}
              {selectedProduct?.price}
            </div>
            <div className="text-2xl  pt-[3vh] font-sans	font-normal pl-[3vw] pr-[3vw] ">
              <span className="font-semibold">Size</span> :{" "}
              {selectedProduct?.size}
            </div>
            <div className="w-fit pl-[3vw] pr-[3vw] pt-[4vh]">
              <button
                className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
                onClick={() => {
                  handleClick(selectedProduct);
                }}
              >
                {buttonText}
              </button>
            </div>
          </div>
          <div className="w-[40vw] pl-4 flex rounded-2xl">
            <div className=" pb-5 ">
              <Image
                src={`${selectedProduct?.imgLink}`}
                alt="product img"
                className="h-100 w-25"
                width={400}
                height={100}
                priority
              />
            </div>
          </div>
        </div>
      </div>
      <div className="mt-[9vh] text-center   font-medium  tracking-wide  font-mono  text-3xl	">
        - Frequently bought together -
      </div>

      <div className="flex flex-row justify-center flex-wrap">
        <div className="flex flex-row">
          <div className=" flex flex-row flex-wrap justify-center items-center my-7 max-w-[63vw] ml-5">
            {pastProduct.map((product) => {
              return <SuggestedCard key={product.Name} product={product} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
