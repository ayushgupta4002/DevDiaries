import Image from "next/image";
import styles from "./Home.module.css";
import MainNav from "./Components/MainNav";
import MainBanner from "./Components/MainBanner";
import MainProductCard from "./Components/MainProductCard";
export default function Home() {
  return (
    <main className="flex min-h-screen bg-[#f2f2f2] flex-col ">
      <MainNav></MainNav>
      <MainBanner></MainBanner>

      <div>
        <div className="text-8xl  tracking-wide font-bold font-sans drop-shadow-2xl shadow-black pl-[3vw]">
          Your One Stop{" "}
          <span className="text-white drop-shadow-[0_1.2px_1.2px_rgba(0.8,0,0,0.8)]">
            Solution
          </span>{" "}
          !!
        </div>
      </div>

      <div className="mt-[9vh] pl-[3vw] mr-[5vw] flex flex-row flex-wrap justify-between">
        <MainProductCard></MainProductCard>



        <MainProductCard></MainProductCard>

        <MainProductCard></MainProductCard>

        <MainProductCard></MainProductCard>

        <MainProductCard></MainProductCard>

        
   
      </div>
    </main>
  );
}
