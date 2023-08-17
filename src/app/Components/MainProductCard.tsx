import Image from "next/image";

function MainProductCard() {
  return (
    <div className="border-2 border-black rounded-2xl flex flex-col w-[18vw] p-1">
    <div className="relative h-[28vh]  rounded-xl   overflow-hidden">
      <Image src="/cloth.jpg" alt="" layout="fill" objectFit={"cover"} />
    </div>
    <div className="pt-1">
      <div className="px-2 py-1 text-lg font-medium">Oversized Tshirt</div>
      <div className="px-2 py-1  text-md font-medium">Get the Best Price now !!!</div>
      <div className="px-2 py-1  text-md font-medium">Price : $500/-</div>
      <div className="px-2  py-1  text-sm text-gray font-medium">Buy Now !!!</div>

    </div>
  </div>  )
}

export default MainProductCard