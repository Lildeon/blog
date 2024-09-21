import Link from "next/link";

export const Category = () => {
  return (
    <div className="container max-w-screen-xl mx-auto rounded-lg font-medium pt-5  transition-all">
      <h1 className="text-2xl font-bold sm:text-3xl  mb-10  sm:pt-5 w-fit text-gray-400 ">
        Category
      </h1>
      <div className=" flex flex-wrap gap-5 justify-between text-center p-2 text-white sm:text-lg shadow-md hover:bg-opacity-80 rounded-lg pt-10">
        <Link
          href={"/blog/category/Samsung"}
          className="w-fit bg-blue-600 rounded-md p-3 shadow-xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300"
        >
          Samsung
        </Link>
        <Link
          href={"/blog/category/Apple"}
          className="shadow-xl w-fit bg-red-100 border-solid p-3 rounded-md text-black transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300"
        >
          Apple
        </Link>
        <Link
          href={"/blog/category/Other"}
          className="shadow-xl w-fit bg-gray-400  rounded-md p-3 transiton ease-in-out delay-150 hover:-translate-x-1 hover:scale-110  duration-300"
        >
          Other
        </Link>
        <Link
          href={"/blog/category/Google-pixel"}
          className="shadow-xl w-fit bg-red-300 rounded-md  p-3 transition ease-in-out delay-150 duration-300 hover:-translate-x-1 hover:scale-110 "
        >
          Google pixel
        </Link>
        <Link
          href={"/blog/category/Motorola"}
          className="shadow-xl w-fit bg-amber-800 rounded-md p-3 transition ease-in-out delay-150 duration-300 hover:-translate-x-1 hover:scale-110 "
        >
          Motorola
        </Link>
        <Link
          href={"/blog/category/onePlus"}
          className="shadow-xl w-fit bg-orange-300 rounded-md p-3 transition ease-in-out delay-150 duration-300 hover:-translate-x-1 hover:scale-110 "
        >
          OnePlus
        </Link>
      </div>
    </div>
  );
};
