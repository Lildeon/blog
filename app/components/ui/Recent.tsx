import Image from "next/image";
import Link from "next/link";
import allPost from "@/app/constants/allPost";

const recent = allPost.slice(0, 12);

export const Recent = () => {
  return (
    <div className="pt-10 text-gray-400 container max-w-screen-xl mx-auto">
      <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-10">
        Recent Post
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3  gap-10">
        {recent.length > 0 &&
          recent.map((p) => (
            <Link href={p.path} key={p.id}>
              <Image
                alt="photo"
                src={p.src}
                width={400}
                height={400}
                key={p.id}
                className="h-fit w-full md:h-80 lg:h-72 transition-all  sm:hover:scale-105 sm:hover:drop-shadow-xl"
              />

              <p className="lg:text-xl text-lg pt-5 text-purple-600 font-medium">
                Tech
              </p>
              <p
                className="whitespace-pre-line mt-5 font-semibold lg:text-2xl text-xl hover:bg-gradient-to-r from-green-200 to-green-100"
                key={p.title}
              >
                {p.description}
              </p>
              <div className="flex justify-between text-lg text-neutral-400">
                <p>Gideon Sowah</p>
                <p>8//8/2024</p>
              </div>
            </Link>
          ))}
      </div>
    </div>
  );
};
