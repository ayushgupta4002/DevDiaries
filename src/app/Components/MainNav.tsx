import Image from "next/image";

function MainNav() {
  return (
    <div className="flex flex-row ">
    <div className="px-[3vw] py-4">
      <Image
        src="/fliplogo2.png"
        alt="Vercel Logo"
        className="dark:invert"
        width={120}
        height={28}
        priority
      />
    </div>
    <div className="pl-[10vw] pt-[2vh] w-fit ">
      <div className="bg-white w-[40vw] h-[9vh] rounded-3xl border-2 p-3 flex flex-row justify-between border-black items-center" >
        <div className=" ml-5 text-lg font-medium">
          Lorem 
        </div>
        <div className="  text-lg font-medium">
          Lorem 
        </div>

        <div className="  text-lg font-medium">
          Lorem 
        </div>
        <div className=" text-lg font-medium mr-5">
          Lorem 
        </div>

      </div>
    </div>
  </div>
  )
}

export default MainNav