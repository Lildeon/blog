import Image from "next/image";
import Link from "next/link";

export const Featured = () => {
  return (
    <div className="text-gray-400 container max-w-screen-xl mx-auto">
      <h1 className="text-xl md:text-2xl lg:text-3xl  font-semibold  mt-16">
        Featured
      </h1>
      <div className="mt-10 overflow-hidden">
        <Link href="/blog/post/iphone-16">
          <h3 className="text-lg md:text-xl font-semibold py-5 whitespace-pre-line clear-left text-md lg:text-2xl  text-gray-400 p-2 hover:underline">
            Here is everything rumoured for the iPhone 16 Pro Max:
          </h3>
          <Image
            alt="photo"
            src={"/images/photo_2024-05-26_05-33-52.jpg"}
            height={400}
            width={400}
            className="md:max-w-sm lg:max-w-xs w-full h-fit float-left hover:scale-105 transition-all"
          />
        </Link>

        <div>
          <p className="leading-relaxed text-lg bg-white lg:font-medium lg:text-xl lg:leading-relaxed p-5 transition-all hidden md:block">
            - Upgraded 48MP ultra-wide camera - Larger 1/1.14 primary sensor -
            New 8-element hybrid lens - 4k Spatial video - A18 Pro chip (N3E
            node) possibly with 2 extra efficiency cores - Significantly
            improved neural engine for on-device AI features - Improved titanium
            chassis with glossier finish - Larger 6.9 display - Better OLED
            displays with increased brightness - Smaller bezels using BRS
            technology - New capacitive capture button - Metal shell battery for
            improved thermals - Stacked battery design for increased energy
            density and potentially faster charging - Graphene thermal system -
            Enhanced microphones with better signal-to-noise ratio - Wi-Fi 7 -
            Qualcomm X75 modem for better cellular connectivity - New rose
            colour
          </p>
        </div>
      </div>
    </div>
  );
};
