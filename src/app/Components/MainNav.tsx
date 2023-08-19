import Image from "next/image";
import Link from "next/link";
function MainNav() {
  return (
    <div className="flex flex-row justify-between  ">
      <div className="px-[3vw] py-4 pointer">
        <Link href="/">
          <Image
            src="/fliplogo2.png"
            alt="Vercel Logo"
            width={120}
            height={28}
            priority
          />
        </Link>
      </div>
      <div className="flex justify-center items-center w-full cursor-pointer ">
        <div className="bg-white w-[25vw] h-[9vh] rounded-3xl border-2 flex flex-row justify-between border-[#312E81] items-center">
          <Link href="/">
            <div className="ml-5 text-lg font-medium">Home</div>
          </Link>
          <Link href="/home">
            {" "}
            <div className="text-lg font-medium">Shop</div>
          </Link>
          <a href="mailto:ayush4002gupta@gmail.com">
            {" "}
            <div className=" text-lg font-medium mr-5">Contact</div>
          </a>
        </div>
      </div>
      <div className="px-[3vw] py-4 pointer">
        <Link href="/cart">
          <Image
            src="/cart.png"
            alt="Vercel Logo"
            width={80}
            height={28}
            priority
          />
        </Link>
      </div>
    </div>
  );
}

export default MainNav;
