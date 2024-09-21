import Layout from "@/app/components/ui/layout";
import Link from "next/link";
import Image from "next/image";
import allPost from "@/app/constants/allPost";

const more = allPost.slice(12);

const More = () => {
  return (
    <Layout>
      <div className="text-gray-400 container max-w-screen-xl mx-auto">
        <h1 className="mb-10 text-2xl sm:text-3xl font-bold">More Update</h1>
        <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 2xl:grid-cols-3 gap-8 overflow-hidden transition-all">
          {more.length > 0 &&
            more.map((p) => (
              <Link href={p.path} className="" key={p.id}>
                <Image
                  alt="photo"
                  src={p.src}
                  width={400}
                  height={400}
                  key={p.id}
                  className=" h-fit w-full md:h-80 sm:hover:scale-105 transition-all sm:hover:drop-shadow-lg"
                />
                <p className=" lg:text-xl text-lg pt-5 text-purple-600 font-medium">
                  Tech
                </p>
                <p
                  className="whitespace-pre-line pt-5 font-semibold lg:text-2xl text-xl"
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
    </Layout>
  );
};

export default More;
