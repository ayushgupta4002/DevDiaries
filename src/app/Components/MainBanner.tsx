import Image from "next/image";

function MainBanner() {
  return (
    <div className="flex flex-row mt-[6vh]">
      <div className="w-1/2 felx flex-col">
        <div className="text-2xl  pt-[20vh] font-sans	font-normal pl-[3vw] pr-[3vw] ">
          Where Fashion Finds You -{" "}
          <span className="font-semibold 	">FlipStore</span>, Your Ultimate
          Fashion Destination
        </div>
        <div className="text-8xl items-end tracking-wider font-bold font-sans text-[#312E81] drop-shadow-xl shadow-black pl-[3vw] pt-[11vh]">
          FlipStore
        </div>
      </div>
      <div className="w-1/2 flex justify-center items-center ml-[7vw]  mr-[5vw] rounded-2xl">
        <div className=" pb-5 ">
          <Image
            src="/flipimage4.png"
            alt="Vercel Logo"
            className="dark:invert"
            width={500}
            height={100}
            priority
          />
        </div>
      </div>
    </div>
  );
}

export default MainBanner;
