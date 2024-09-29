import Image from "next/image";
import Link from "next/link";

const NewlyRelease = () => {
  return (
    <div className="clear-left mt-8 container max-w-screen-xl mx-auto">
      <h2 className="text-xl sm:text-3xl pb-5 font-bold text-gray-400">
        New Release
      </h2>
      <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-4  gap-5 text-gray-400 transition-all">
        <div className="text-xl ">
          <Link
            href={"/blog/post/iphone-17"}
            className="hover:underline font-semibold"
          >
            <Image
              src="/images/photo_2024-08-03_07-19-06.jpg"
              alt="photo"
              width={300}
              height={300}
              className="h-fit w-full sm:hover:scale-105 transition-all sm:hover:drop-shadow-lg"
            />
            <p className="py-5 font-bold">iphone 17</p>
          </Link>
        </div>
        <div className="text-xl ">
          <Link
            href={"/blog/post/iPhone-16-pro-max"}
            className="hover:underline font-semibold"
          >
            <Image
              src="/images/photo_2024-08-03_07-23-28.jpg"
              alt="photo"
              width={300}
              height={300}
              className="h-fit w-full  sm:hover:scale-105 transition-all sm:hover:drop-shadow-lg"
            />
            <p className="py-5 font-bold">iPhone 16 pro max</p>
          </Link>
        </div>
        <div className="text-xl">
          <Link
            href={"/blog/post/Motorola-edge-50"}
            className="hover:underline font-semibold"
          >
            <Image
              src="/images/photo_2024-05-26_05-39-05.jpg"
              alt="photo"
              width={300}
              height={300}
              className="h-fit w-full  sm:hover:scale-105 transition-all sm:hover:drop-shadow-lg"
            />
            <p className="py-5 font-bold">Motorola edge 50</p>
          </Link>
        </div>
        <div className="text-xl">
          <Link
            href={"/blog/post/Samsung-S24"}
            className="hover:underline font-semibold"
          >
            <Image
              src="/images/photo_2023-12-21_05-13-06.jpg"
              alt="photo"
              width={300}
              height={300}
              className="h-fit w-full  sm:hover:scale-105 transition-all sm:hover:drop-shadow-lg"
            />
            <p className="py-5 font-bold">Samsung S24 Ultra</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NewlyRelease;
