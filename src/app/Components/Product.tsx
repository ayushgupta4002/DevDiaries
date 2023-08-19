"use client";

import { useMutation } from "react-query";
import queryClient from "@/utils/queryClient";
import { ProductType } from "@/utils/types";
import Image from "next/image";
import { useState } from "react";

interface ProductProps {
  product: ProductType;
}

// jugad for now
// TODO: fix this
function Product({ product }: ProductProps) {
  const isLiked = (item: string) => {
    let likedProductJson = localStorage.getItem("likedProduct");
    return likedProductJson
      ? JSON.parse(likedProductJson).includes(item)
      : false;
  };
  const [liked, setLiked] = useState(isLiked(product.item));

  const likeMutation = useMutation(
    // @ts-ignore
    (item: string) => {
      if (isLiked(item)) {
        localStorage.setItem("likedProduct", "");
      } else {
        localStorage.setItem("likedProduct", JSON.stringify(item));
      }
      setLiked(!liked);
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries("suggestedProducts");
      },
    }
  );

  const handleLike = (item: string) => {
    likeMutation.mutate(item);
  };

  return (
    <div className="p-3">
      <div className="w-[19vw] bg-white border border-gray-200 rounded-lg mb-7  shadow ">
        <div className="relative h-[28vh]  rounded-t-xl overflow-hidden">
          <Image
            src={product.imgLink}
            alt=""
            layout="fill"
            objectFit={"cover"}
          />
        </div>
        <div className="p-1">
          <div className="flex flex-row justify-between">
            <a href="#">
              <h5 className="mb-2 text-md font-bold tracking-tight text-gray-900 ">
                {product.item}
              </h5>
            </a>
            <button
              className="text-gray-500 hover:text-red-500 text-2xl"
              onClick={() => handleLike(product.item)}
            >
              {liked ? "♥" : "♡"}
            </button>
          </div>
          <p className="mb-3 text-sm font-normal text-gray-700 ">
            ₹ {product.price}
          </p>
          <a
            href={`/product/${product.item}`}
            className="inline-flex items-center  px-2 py-2 text-sm font-medium text-center text-blue-700  rounded-lg hover:bg-blue-100 focus:ring-4 focus:outline-none focus:ring-blue-300 "
          >
            view
            <svg
              className="w-3.5 h-3.5 ml-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Product;
