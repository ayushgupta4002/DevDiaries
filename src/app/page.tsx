"use client";

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
    </main>
  );
}
