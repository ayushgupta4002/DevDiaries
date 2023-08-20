"use client";
import Image from "next/image";
import styles from "./Home.module.css";
import MainNav from "./Components/MainNav";
import MainBanner from "./Components/MainBanner";
import Product from "./Components/Product";
import { ProductType } from "@/utils/types";
import { useEffect, useState } from "react";
import axios from "axios";
import TypingHeading from "./Components/TypingHeading";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export default function Home() {
  const [productData, setProductData] = useState<ProductType[]>([]);

  useEffect(() => {
    axios
      .get(API_URL + "/api/newuser/predict")
      .then((response) => {
        const data = response.data;
        setProductData(Object.values(data));
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <main className="flex min-h-screen bg-[#f2f2f2] flex-col ">
      <MainNav />
      <MainBanner />
      <div>
        <div className="text-[#312E81]  tracking-wide font-bold font-sans drop-shadow-2xl shadow-black pl-[3vw]">
          <TypingHeading />
        </div>
      </div>
      <section id="banner" className="section-m1 mt-[9vh]" />
      <div className="flex flex-col mt-[3vh] text-center   font-medium  tracking-wide  font-mono  text-3xl">
        - Highly Rated -
        <span className="text-lg text-slate-600">Handpicked Just for you</span>
      </div>
      <div className="mt-[3vh] flex flex-row justify-center flex-wrap">
        <div className="flex flex-row">
          <div className=" flex flex-row flex-wrap justify-center items-center  mt-7 max-w-[63vw] ml-5">
            {productData.map((product) => {
              return <Product key={product.item} product={product} />;
            })}
          </div>
        </div>
      </div>
      <div className="mt-[3vh] pb-[4vh]">
        <div className="flex flex-row ">
          <div className="ml-[20vw]">
          <Image
          src="/fliplogo3.png"
          alt="Vercel Logo"
          width={300}
          height={40}
          priority
        />
          </div>
          <div className="pl-[5vw] flex flex-col w-[40vw]">
            <div className="text-2xl font-semibold  text-[#312E81]  ">
              FlipStore Knows What you Want !
            </div>
            <div className="text-medium text-lg pt-[2vh]">
            We understand that your shopping preferences can change over time, and that's 
            why our recommendation system is designed to be flexible. You can easily 
            refine your preferences ensuring that our system continuously learns and improves to cater to your evolving needs.
       </div>
            <div className="text-medium text-lg pt-[2vh]">
            Experience the future of online shopping with our personalized recommendation system. 
            Say goodbye to guesswork and hello to a world of products perfectly curated for you. 
            Join us now and discover the joy of shopping with confidence and convenience!
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
