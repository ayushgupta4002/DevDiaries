import React from 'react'
import Image from "next/image";

function Banner3() {
  return (
    <div className="bg-[#e3e4fc] h-[56vh] my-4 mx-5 rounded-2xl flex flex-row-reverse justify-between ">
      <div className="pt-2 pl-[3vw] my-auto mr-[10vw]">
        <Image
          src="/flipimage6.png"
          alt="Vercel Logo"
          width={250}
          height={40}
          priority
        />
      </div>
      <div className="flex flex-col ml-2">
        <div className="text-2xl font-semibold w-fit flex flex-col font-sans ml-[10vh] pt-[13vh] text-[#312E81]">
          Curious to See What Matches Your Taste? Us Too. Let&apos;s Explore!
        </div>
        <div className="text-left font-medium text-lg text-black pt-[1vh]  ml-[10vh]">
          Unlock Your Unique Style: Ready to Find Your Ideal Products?
        </div>
        <div className="text-left  font-medium text-lg text-black  ml-[10vh] pt-[1vh]">
          Curious to See What Fits Your Taste? Let&apos;s Dive Together!
        </div>
        <div className="text-left  font-medium text-lg text-black   ml-[10vh] pt-[1vh]">
          Let&apos;s Dive Together!
        </div>
      </div>
    </div>
  )
}

export default Banner3