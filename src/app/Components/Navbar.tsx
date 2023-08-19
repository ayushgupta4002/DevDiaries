import Image from "next/image";

function Navbar() {
  return (
    <div className="bg-[#2874f0] h-[9vh] flex flex-row">
      <div className="ml-[15vw] pt-[1vh] md:ml-[10vw]  sm:ml-[7vw] xsm:ml-[2vw]">
        {" "}
        <Image
          src="/flipkart.jpg"
          alt="Vercel Logo"
          width={130}
          height={28}
          priority
        />
      </div>
      <div>
        <form className="flex items-center">
          <div className="relative w-fit">
            <input
              type="text"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-[31vw] ml-5 mt-[1vh] p-2  "
              placeholder="Search.."
              required
            ></input>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Navbar;
