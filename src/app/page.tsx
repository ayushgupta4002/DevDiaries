"use client";

import styles from "./Home.module.css";
import MainNav from "./Components/MainNav";
import MainBanner from "./Components/MainBanner";
import Product from "./Components/Product";
import SuggestedCard from "./Components/SuggestedCard";
import { ProductType } from "@/utils/types";
import { useEffect, useState } from "react";
import axios from "axios";

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
        <div className="text-8xl text-[#312E81]  tracking-wide font-bold font-sans drop-shadow-2xl shadow-black pl-[3vw]">
          Your One Stop{" "}
          <span className="text-[#312E81] drop-shadow-[0_1.2px_1.2px_rgba(0.8,0,0,0.8)]">
            Solution
          </span>{" "}
          !!
        </div>
      </div>
      <div className="mt-[9vh] text-center   font-medium  tracking-wide  font-mono  text-3xl	">
        - Highly Rated -
      </div>

      <div className="mt-[9vh] flex flex-row justify-center flex-wrap">
        <div className="flex flex-row">
          <div className=" flex flex-row flex-wrap mt-7 max-w-[63vw] ml-5">
            {productData.map((product) => {
              return <Product key={product.item} product={product} />;
            })}
          </div>
        </div>
      </div>
    </main>
  );
}
