import Image from "next/image";
import Link from "next/link";
function MainNav() {
  return (
    <div className="flex flex-row ">
    <div className="px-[3vw] py-4 pointer">
      <Link href="/">
      <Image
        src="/fliplogo2.png"
        alt="Vercel Logo"
        className="dark:invert"
        width={120}
        height={28}
        priority
      />
      </Link>
    </div>
    <div className="pl-[10vw] pt-[4.5vh] w-fit cursor-pointer ">
      <div className="bg-white w-[40vw] h-[9vh] rounded-3xl border-2 p-3 flex flex-row justify-between border-[#312E81] items-center" >
       <Link href="/home"> <div className=" ml-5 text-lg font-medium">
        Products
        </div></Link>
        <Link href="/cart"><div className="  text-lg font-medium">
          Cart 
        </div></Link>

        <Link href="/"><div className="  text-lg font-medium">
          Home 
        </div></Link>
       <a href="mailto:ayush4002gupta@gmail.com"> <div className=" text-lg font-medium mr-5">
          Contact 
        </div></a>

      </div>
    </div>
  </div>
  )
}

export default MainNav