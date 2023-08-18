import Image from "next/image";
import Banner from "../Components/Banner";
import Product from "../Components/Product";
import SuggestedCard from "../Components/SuggestedCard";
import Navbar from "../Components/Navbar";
import MainNav from "../Components/MainNav";
import { ProductType } from "@/utils/types";

function home() {
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
      item: "High Rise Jeans",
      price: "900",
      size: "L",
    },
    {
      api: "New User",
      imgLink:
        "https://res.cloudinary.com/shubh-sardana/image/upload/v1692333947/topwear/round_neck_sweater.jpg",
      item: "Round neck sweater	",
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
            <SuggestedCard />
            <SuggestedCard />
            <SuggestedCard />
            <SuggestedCard />
            <SuggestedCard />
          </div>
        </div>
      </div>
    </div>
  );
}

export default home;
