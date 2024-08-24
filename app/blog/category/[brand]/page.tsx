import Layout from "@/app/components/ui/layout";
import allPost from "@/app/constants/allPost";
import Image from "next/image";
import Link from "next/link";

export default function Page({ params }: { params: { brand: string } }) {
  const category = params.brand;

  const brand = allPost.filter((P) => {
    return P.brand === category;
  });

  return (
    <Layout>
      <div className="p-5 container max-w-screen-xl mx-auto">
        <div className="flex justify-between text-3xl font-semibold pb-10 text-gray-400">
          <h1>{category}</h1>
          <p>{brand.length}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full gap-10 transition-all">
          {brand.length > 0 &&
            brand.map((B) => (
              <Link key={B.id} href={B.path}>
                <Image
                  src={B.src}
                  alt="photo"
                  width={400}
                  height={400}
                  className="h-fit md:h-72 w-full hover:shadow-lg transition-all hover:scale-105"
                />
                <p className="lg:text-xl text-lg pt-5 font-medium text-purple-600">
                  Tech
                </p>
                <p
                  className="whitespace-pre-line pt-5 font-semibold lg:text-2xl text-xl text-gray-400"
                  key={B.title}
                >
                  {B.description}
                </p>
                <div className="flex justify-between text-lg text-neutral-400">
                  <p>Gideon Sowah</p>
                  <p>8//8/2024</p>
                </div>
              </Link>
            ))}
        </div>
      </div>
      ;
    </Layout>
  );
}
