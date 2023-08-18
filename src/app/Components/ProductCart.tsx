function ProductCart() {
  return (
    <div>
      {" "}
      <div className="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5">
        <div className="flex w-2/5">
          <div className="w-20">
            <img className="h-24" src="/flipimage2.png" alt=""></img>
          </div>
          <div className="flex flex-col justify-between ml-4 flex-grow">
            <span className="font-bold text-sm">Ayush Gupta</span>
            <span className="text-red-500 text-xs">your Papa</span>
            <a
              href="#"
              className="font-semibold hover:text-red-500 text-gray-500 text-xs"
            >
              Remove
            </a>
          </div>
        </div>

        <span className="text-center w-1/5 font-semibold text-sm">$400.00</span>
        <span className="text-center w-1/5 font-semibold text-sm">$400.00</span>
      </div>
    </div>
  );
}

export default ProductCart;
