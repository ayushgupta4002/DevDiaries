import Image from "next/image";
import Banner from "../Components/Banner";
import Product from "../Components/Product";
import SuggestedCard from "../Components/SuggestedCard";
import Navbar from "../Components/Navbar";
function home() {
  return (
    <div className="h-fit">
      <Navbar></Navbar>
      <Banner></Banner>
      <div className="flex flex-row">
        <div className=" flex flex-row justify-between flex-wrap	mt-7 max-w-[63vw] ml-5">
          <Product></Product>
          <Product></Product>
          <Product></Product>
          <Product></Product>
          <Product></Product>
          <Product></Product>
          <Product></Product>
        </div>
        <div className="mt-1 rounded-xl ml-8 mr-5 bg-[#DDF2FF] w-[35vw] h-fit pb-5">
          <div className="p-2 pl-6 text-xl font-semibold font-sans">
            Suggested for you
          </div>
          <div>
            <SuggestedCard></SuggestedCard>
            <SuggestedCard></SuggestedCard>
            <SuggestedCard></SuggestedCard>
            <SuggestedCard></SuggestedCard>
            <SuggestedCard></SuggestedCard>

          </div>
          
        </div>
      </div>
    </div>
  );
}

export default home;
