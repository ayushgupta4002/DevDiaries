import { SuggestedType } from "@/utils/types";

interface SuggestedCardProps {
  product: SuggestedType;
}

function SuggestedCard({ product }: SuggestedCardProps) {
  console.log(product.Name);

  return (
    <div>
      <div className="flex flex-row mt-3 ">
        <div className="mt-3 pl-4 ">
          <img
            className="w-12 rounded pb-1 md:pl-1 md:w-8 cursor-pointer"
            src={product.ImgLink}
            alt="..."
          />
        </div>
        <div className="flex flex-col ml-3 ">
          <div className="text-lg md:text-2xl sm:text-xl nma:text-lg  nmc:text-base font">
            {product.Name}
          </div>
          <div className="text-sm text-zinc-400	 nma:text-sm nmc:text-xs font">
            ₹ {product.Price}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SuggestedCard;
