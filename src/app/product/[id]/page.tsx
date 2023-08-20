"use client";

import MainNav from "@/app/Components/MainNav";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { ProductType, SuggestedType , ProductDescription } from "@/utils/types";
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


const ProductData : ProductDescription[] = [
  {
    "item": "Anarkali Kurti",
    "description": "Elegance meets tradition with our exquisite Anarkali Kurti. Crafted from rich, flowing fabric, this piece showcases intricate embroidery that weaves tales of timeless beauty. The delicate patterns dance along the hem and cuffs, a testament to the skilled craftsmanship behind every stitch. Wear it with grace and let the world marvel at your regal presence."
  },
  {
    "item": "Synthetic Sandals",
    "description": "Step into comfort and style with our Synthetic Sandals. Designed to caress your feet in softness, these sandals effortlessly marry form and function. The contoured sole provides support with each step, while the sleek straps embrace your feet like a second skin. Whether strolling through the city streets or lounging by the beach, these sandals are your perfect companions."
  },
  {
    "item": "Oversized Tshirt",
    "description": "Embrace the art of laid-back chic with our Oversized Tshirt. It's not just a garment; it's a statement. The generous cut exudes a carefree vibe, while the fine fabric embraces you in comfort. With a versatile design, you can wear it as a dress or pair it with your favorite jeans for an effortlessly cool look that's as unique as you are."
  },
  {
    "item": "High Rise Jeans",
    "description": "Reach for the sky and your fashion aspirations with our High Rise Jeans. Designed to accentuate your curves and elevate your style, these jeans offer a flattering fit that's as comfortable as it is captivating. The high waist elongates your silhouette, while the quality denim ensures durability and lasting appeal. Embrace the confidence that comes with the perfect pair of jeans."
  },
  {
    "item": "Round Neck Sweater",
    "description": "Wrap yourself in warmth and sophistication with our Round Neck Sweater. As the temperature drops, your style rises with this cozy companion. The soft, luxurious knit envelops you in comfort, while the timeless round neck design lends versatility to your wardrobe. Whether layered over a collared shirt or worn on its own, this sweater is the epitome of timeless charm."
  },
  {
    "item": "Running Shoes",
    "description": "Unleash your inner athlete with our Running Shoes. Engineered for performance, these shoes are designed to carry you beyond limits. The responsive sole provides cushioning with every stride, while the breathable mesh upper ensures optimal airflow. Lace up these companions of speed and hit the track, letting the wind be your competition and the finish line your victory."
  },
  {
    "item": "Rugged Cargo Pant",
    "description": "Embark on an adventure of style and utility with our Rugged Cargo Pant. Crafted for the modern explorer, these pants offer an abundance of pockets for all your essentials. From urban escapades to off-road journeys, the durable fabric and sturdy construction ensure that you're prepared for whatever the day brings. Wherever you go, let your pants tell the story of your fearless spirit."
  },
  {
    "item": "Party Wear Boots",
    "description": "Make a grand entrance with our Party Wear Boots. These boots aren't just footwear; they're a work of art that adorns your feet. With intricate detailing and a sleek silhouette, they're the perfect accomplice for your evenings of enchantment. The heel adds a touch of elegance to your stride, ensuring that all eyes are on you as you step onto the dance floor."
  },
  {
    "item": "Denim Shirt",
    "description": "Channel rugged sophistication with our Denim Shirt. The classic denim fabric gets a modern twist in this versatile piece. Whether layered over a graphic tee or buttoned up for a polished look, this shirt adapts to your mood and the occasion. It's more than clothing; it's an expression of your individuality and an ode to the timeless charm of denim."
  }
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

  const Productdesc  = ProductData.find(
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
              <span className="font-semibold">Description</span> : {Productdesc?.description}
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
