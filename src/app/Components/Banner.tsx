import Image from "next/image";
function Banner() {
  return (
    <div className="bg-[#ceebfd] h-[56vh] my-4 mx-5 rounded-2xl flex flex-row">
      <div className="pt-2 pl-[5vw] my-auto">
        <Image
          src="/delivery2.png"
          alt="Vercel Logo"
          width={400}
          height={40}
          priority
        />
      </div>
      <div className="flex flex-col ml-9">
        <div className="text-2xl font-semibold w-fit flex flex-col font-sans ml-[7vh] pt-[13vh] text-[#312E81]">
          Curious to See What Matches Your Taste? Us Too. Let&apos;s Explore!
        </div>
        <div className="text-left font-medium text-lg text-black pt-[3vh]  ml-[7vh]">
          Unlock Your Unique Style: Ready to Find Your Ideal Products?
        </div>
        <div className="text-left  font-medium text-lg text-black  ml-[7vh] pt-[1vh]">
          Curious to See What Fits Your Taste? Let&apos;s Dive Together!
        </div>
        <div className="text-left  font-medium text-lg text-black   ml-[7vh] pt-[1vh]">
          Let&apos;s Dive Together!
        </div>
      </div>
    </div>
  );
}

export default Banner;
