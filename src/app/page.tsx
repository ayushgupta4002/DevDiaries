import Image from "next/image";
import styles from "./Home.module.css";
import MainNav from "./Components/MainNav";
import MainBanner from "./Components/MainBanner";
import MainProductCard from "./Components/MainProductCard";
import Product from "./Components/Product";
import SuggestedCard from "./Components/SuggestedCard";
export default function Home() {
  return (
    <main className="flex min-h-screen bg-[#f2f2f2] flex-col ">
      <MainNav></MainNav>
      <MainBanner></MainBanner>

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

      <div className="mt-[9vh]   flex flex-row justify-center flex-wrap ">
        <div className="flex flex-row">
          <div className=" flex flex-row  flex-wrap	mt-7 max-w-[63vw] ml-5">
            <Product></Product>
            <Product></Product>
            <Product></Product>
            <Product></Product>
            <Product></Product>
          </div>
          <div className="mt-1 rounded-xl ml-8 mr-5 bg-[#DDF2FF] w-[35vw] h-fit pb-5">
            <div className="p-2 pl-6 text-xl font-semibold font-sans">
              Your Cart
            </div>
            <div className="pt-2">
              <SuggestedCard></SuggestedCard>
              <SuggestedCard></SuggestedCard>
              <SuggestedCard></SuggestedCard>
              <SuggestedCard></SuggestedCard>
              <SuggestedCard></SuggestedCard>
              <SuggestedCard></SuggestedCard>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
