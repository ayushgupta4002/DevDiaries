function Product() {
  return (
    <div>
      <div className="w-[19vw] bg-white border border-gray-200 rounded-lg mb-7  shadow ">
        <a href="#">
          <img className="rounded-t-lg w-fit " src="/delivery.png" alt="" />
        </a>
        <div className="p-1">
          <a href="#">
            <h5 className="mb-2 text-md font-bold tracking-tight text-gray-900 ">
              Noteworthy technology acquisitions 2021
            </h5>
          </a>
          <p className="mb-3 text-sm font-normal text-gray-700 ">
            Here are the biggest enterprise
          </p>
          <a
            href="#"
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
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
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
