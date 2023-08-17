import Image from "next/image";

function MainBanner() {
  return (
<div className="flex flex-row mt-[6vh]">
  <div className="w-[45vw] felx flex-col">
    <div className="text-2xl pt-[20vh] font-sans	font-normal pl-[3vw] pr-[3vw] ">
    Meet <span className="font-semibold 	">Cal.com</span>, the event-juggling scheduler for everyone. 
    Focus on meeting, not making meetings. Free for individuals.
    </div>
    <div className="text-8xl  tracking-wider font-bold font-sans drop-shadow-xl shadow-black pl-[3vw] pt-[9vh]">
      FlipStore
    </div>
  </div>
  <div className="w-[fit] ml-[7vw]  mr-[5vw] rounded-2xl">
    <div className=" ">
    <Image
        src="/flipimage.png"
        alt="Vercel Logo"
        className="dark:invert"
        width={500}
        height={100}
        priority
      />
    </div>
  </div>

</div>  )
}

export default MainBanner