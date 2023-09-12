import Image from "next/image";
import Link from "next/link";
function MainNav() {
  return (
    <div className="flex justify-center w-screen mt-3">
  <div className="flex flex-row w-screen xnm:flex-col xnm:ext-center  ">
    {/* <div className="py-6 pointer mr-3">
      <Link href="/">
        <span className="text-2xl font-bold">DevDiaries.cloud</span>
      </Link>
    </div> */} 
    <div className="py-6  xnm:flex xllg:ml-[2vw] ml-[5vw] xnmm:mr-[80%] xnmm:absolute xnm:justify-center xnm:items-center pointer">
      <Link href="/">
        <span className="text-2xl   mlg:text-lg font-bold">DevDiaries.Tech</span>
      </Link>
    </div>
    <div className="flex-grow xsml:mx-2 flex items-center justify-center cursor-pointer">
      <div className="bg-white w-fit xsms:h-[10vh] h-[13vh] rounded-full border-2 flex flex-row border-black items-center">
        <div className="rounded-full">
          <Link href="/">
            <img src="/icon.png" className="h-[11vh] xnm:h-[8vh] xssm:w-[20vw] xsssm:w-[25vw] usm:w-[30vw] w-fit rounded-full ml-1" alt="Your Alt Text" />
          </Link>
        </div>
        <div className="text-lg xsms:text-base font-mono xsssm:py-1 xsssm:text-sm  font-medium ml-3 mr-4 mlg:text-base">
          Hello There I am Ayush #Welcome to Dev Diaries !!
        </div>
      </div>
    </div>
    <div className="p-[1vw] py-4 xnmm:ml-[85%] xnmm:absolute pointer xnm:flex xnm:justify-center xnm:items-center">
      <Link href="/cart">
        <div className="bg-black w-fit h-[9vh] rounded-xl border-2 flex flex-row border-black items-center">
          <span className="text-sm xnmm:hidden py-3 px-7 xmd:px-4 text-white font-medium">Who The Hell Are you?</span>
          <span className="text-sm xnm:hidden py-3 px-7 xmd:px-4 text-white font-medium">Hi?</span>

        </div>
      </Link>
    </div>
  </div>
</div>

  );
}

export default MainNav;
