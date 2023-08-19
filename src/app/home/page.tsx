"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Banner from "../Components/Banner";
import Product from "../Components/Product";
import SuggestedCard from "../Components/SuggestedCard";
import Navbar from "../Components/Navbar";
import MainNav from "../Components/MainNav";
import axios from "axios";
import { ProductType } from "@/utils/types";
import { SuggestedType } from "@/utils/types";
import { useQuery } from "react-query";
import queryClient from "@/utils/queryClient";
import MainBanner from "../Components/MainBanner";
import Banner2 from "../Components/Banner2";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const nextSlide = () => {
    const nextIndex = (currentSlide + 1) % 2; // Adjust this based on the number of slides
    setCurrentSlide(nextIndex);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000); // Change slide every 5 seconds
    return () => clearInterval(interval);
  }, [currentSlide]);

  const { data: suggestProductData } = useQuery<SuggestedType[]>(
    "suggestedProducts",
    // @ts-ignore
    async () => {
      const likedProduct = localStorage.getItem("likedProduct") as string;

      const cleanString = likedProduct.replace(/"/g, "").replace(/\s+/g, "%20");

      try {
        const response = await axios.get(
          API_URL + "/api/user/predict/" + cleanString
        );
        const data = response.data;
        return Object.values(data);
      } catch (error) {
        console.log("Error in fetching data", error);
      }
    }
  );

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

  if (!suggestProductData) {
    return (
      <div className="h-fit bg-[#f2f2f2]">
      <MainNav></MainNav>
      <div id="default-carousel" className="w-full" data-carousel="slide">
        <div className="  rounded-lg ">
          <div
            className={`duration-700 ease-in-out ${
              currentSlide === 0 ? "" : "hidden"
            }`}
            data-carousel-item
          >
            <Banner />
          </div>
          <div
            className={`duration-700 ease-in-out ${
              currentSlide === 1 ? "" : "hidden"
            }`}
            data-carousel-item
          >
            <Banner2 />
          </div>
        </div>
        <div className="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2">
        
        </div>
        </div>
       
 
        
        <div className="flex flex-row">
          <div className=" flex flex-row justify-between flex-wrap	mt-7 max-w-[63vw] ml-5">
            {productData.map((product) => {
              return <Product key={product.item} product={product} />;
            })}
          </div>
          <div className="mt-1 rounded-xl ml-8 mr-5 bg-[#DDF2FF] w-[35vw] h-fit pb-5">
            <div className="p-2 pl-6 text-xl font-semibold font-sans">
              Suggested for you
            </div>
          </div>
        </div>
        </div>
    );
  }

  return (
    <div className="h-fit bg-[#f2f2f2]">
      <MainNav></MainNav>
      <Banner></Banner>
      
      <div className="flex flex-row">
        <div className=" flex flex-row justify-between flex-wrap	mt-7 max-w-[63vw] ml-5">
          {productData.map((product) => {
            return <Product key={product.item} product={product} />;
          })}
        </div>
        <div className="mt-1 rounded-xl ml-8 mr-5 bg-[#DDF2FF] w-[35vw] h-fit pb-5">
          <div className="p-2 pl-6 text-xl font-semibold font-sans">
            Suggested for you
          </div>
          <div>
            {/* @ts-ignore */}
            {suggestProductData.map((product) => {
              return <SuggestedCard key={product.Name} product={product} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
