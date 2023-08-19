import { ProductType } from "@/utils/types";

interface ProductCartProps {
  product: ProductType;
}

export default function ProductCart({ product }: ProductCartProps) {
  return (
    <div>
      {" "}
      <div className="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5">
        <div className="flex w-2/5">
          <div className="w-20">
            <img className="h-24" src={`${product.imgLink}`} alt="" />
          </div>
          <div className="flex flex-col justify-center ml-4 flex-grow">
            <span className="font-bold text-sm">{product.item}</span>
          </div>
        </div>

        <span className="text-center w-1/5 font-semibold text-sm">
          {" "}
          ₹ {product.price}
        </span>
        <span className="text-center w-1/5 font-semibold text-sm">
          {" "}
          ₹ {product.price}
        </span>
      </div>
    </div>
  );
}
//hi
