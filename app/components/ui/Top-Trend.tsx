import Image from "next/image";
import Link from "next/link";

export const Top_Trend = () => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2  gap-3 mt-8 container max-w-screen-xl mx-auto">
        <Top />
        <Trend />
      </div>
    </>
  );
};

function Top() {
  return (
    <div className="">
      <h1 className="text-xl md:2xl lg:text-3xl  font-semibold text-gray-400 pt-5 pb-5">
        Top pick
      </h1>

      <div className="grid grid-cols-1  lg:grid-cols-2 gap-2  text-lg text-gray-400 font-semibold transition-all ">
        <Link
          href={"/blog/post/oneplus-ace"}
          className="md:hidden lg:inline-block"
        >
          <Image
            alt="photo"
            src="/images/photo_2024-05-26_05-02-10.jpg"
            width={300}
            height={300}
            className="h-fit w-full md:h-80 lg:h-72 transition-all hover:scale-105"
          />
          <p className="py-5  whitespace-pre-line hover:underline ">
            OnePlus Ace 3V Nord 4 launching in Ghana.
          </p>
        </Link>
        <Link href={"/blog/post/sony-xperia-1"}>
          <Image
            alt="photo"
            src="/images/photo_2024-05-26_05-53-51.jpg"
            width={300}
            height={300}
            className="h-fit w-full md:h-80 lg:h-72 transition-all hover:scale-105"
          />
          <p className=" py-5 whitespace-pre-line hover:underline">
            Sony Xperia 1 VI launched
          </p>
        </Link>
        <Link href={"/blog/post/motorola-edge"}>
          <Image
            alt="photo"
            src="/images/photo_2024-05-26_05-39-11.jpg"
            width={300}
            height={300}
            className="h-fit w-full md:h-80 lg:h-72 transition-all hover:scale-105"
          />
          <p className="py-5   whitespace-pre-line hover:underline">
            Motorola edge 50 Pro is launching on 3rd April 2024!
          </p>
        </Link>
        <Link
          href={"/blog/post/infinix-note-40"}
          className="md:hidden lg:inline"
        >
          <Image
            alt="photo"
            src="/images/photo_2024-05-26_05-37-27.jpg"
            width={300}
            height={300}
            className="h-fit w-full md:h-80 lg:h-72 transition-all hover:scale-105"
          />
          <p className="py-5   whitespace-pre-line hover:underline">
            Infinix Note 40 Pro+ to launch on April 12 in India!
          </p>
        </Link>
      </div>
    </div>
  );
}

function Trend() {
  return (
    <div className=" p-3 space-y-5 text-black  rounded-lg  h-fit text-lg shadow-lg transition-all hover:bg-gray-100">
      <h1 className="text-3xl font-semibold  text-gray-400 pb-5">Trending</h1>
      <Link href={"/blog/post/Samsung-S24"}>
        <h3 className="shadow-md text-xl text-white border-solid rounded-md p-1 w-fit bg-blue-600 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300">
          Samsung
        </h3>
        <p className=" pt-2 pb-5 whitespace-pre-line hover:underline ">
          Samsung Galaxy S24 Ultra launched! 6.8-inch Dynamic AMOLED 2x QHD+
          flat display.
        </p>
      </Link>
      <Link href={"/blog/post/oneplus-ace"}>
        <h3 className="shadow-md text-xl bg-orange-300 rounded-md p-1 text-white  w-fit transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300">
          OnePlus
        </h3>
        <p className=" pt-2 pb-5 whitespace-pre-line hover:underline">
          OnePlus Ace 3V (Nord 4 globally) launching in China on March 21!
        </p>
      </Link>
      <Link href={"/blog/post/iphone-17"}>
        <h3 className="shadow-md text-xl bg-red-100 border-solid rounded-md p-1 w-fit transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300">
          Apple
        </h3>
        <p className=" pt-2 pb-5 whitespace-pre-line hover:underline">
          iPhone 17 Slim details 6.6” display - 2740 X 1260 resolution - Dynamic
          Island - ultra-slim design - titanium-aluminum frame
        </p>
      </Link>
      <Link href={"/blog/post/pixel-9"}>
        <h3
          className="shadow-md text-xl bg-red-300 rounded-md p-1 w-fit transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300
    "
        >
          Pixel
        </h3>
        <p className=" pt-2 pb-5 whitespace-pre-line hover:underline">
          Google Pixel 9 renders leaked!
        </p>
      </Link>
      <Link href={"/blog/post/Motorola-edge-50"}>
        <h3 className="shadow-md text-xl text-white border-solid rounded-md p-1 w-fit bg-amber-800 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300">
          Motorola
        </h3>
        <p className=" pt-2 pb-5 whitespace-pre-line hover:underline">
          Motorola edge 50 Pro is launching on 3rd April 2024!
        </p>
      </Link>
      <Link href={"/blog/post/Samsung-S23-FE"}>
        <h3 className="shadow-md text-xl text-white border-solid rounded-md p-1 w-fit bg-blue-600 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300">
          Samsung
        </h3>
        <p className=" pt-2 pb-5 whitespace-pre-line hover:underline">
          Samsung Galaxy S23 FE launched globally! • Snapdragon 8 Gen 1/Exynos
          2200
        </p>
      </Link>
      <Link href={"/blog/post/sony-xperia-1"}>
        <h3 className="shadow-md text-xl text-white bg-slate-500 border-solid rounded-md p-1 w-fit transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300">
          Xperia
        </h3>
        <p className=" pt-2 pb-5 whitespace-pre-line hover:underline">
          Sony Xperia 1 VI renders leaked!
        </p>
      </Link>
    </div>
  );
}
