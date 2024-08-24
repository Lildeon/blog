import Layout from "@/app/components/ui/layout";
import allPost from "@/app/constants/allPost";
import Blog from "@/app/constants/blog";
import Image from "next/image";
import Link from "next/link";

export default function Page({ params }: { params: { title: string } }) {
  const title = params.title;

  const filter = allPost.filter((p) => {
    if (p.title === title) {
      return p;
    }
  });

  const content = Blog.filter((blog) => blog.title === title);

  const brand = content[0].tag;

  const compare = title === content[0].title;

  return (
    <Layout>
      <div className="p-5 container max-w-screen-xl mx-auto">
        {filter.map((c) => (
          <div key={c.title} className="p-5">
            <h1
              key={c.id}
              className="text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-400 text-center mb-5"
            >
              {c.description}
            </h1>
            <div className="flex justify-center overflow-hidden">
              <Image
                src={c.src}
                alt="photo"
                width={400}
                height={400}
                className="h-fit w-full max-w-3xl "
              />
            </div>
          </div>
        ))}

        <div className="container max-w-screen-sm mx-auto">
          {compare && (
            <ul className="flex flex-wrap justify-between">
              <li>
                <Link
                  href="/blog/contact"
                  className=" bg-slate-400  px-2  py-1 rounded-lg hover:underline font-semibold"
                >
                  {content[0].author}
                </Link>
              </li>
              <li>
                <Link
                  href={`/blog/category/${brand}`}
                  className=" bg-blue-500 text-gray-100 px-2  py-1 rounded-lg hover:underline"
                >
                  {content[0].tag}
                </Link>
              </li>
              <li>
                <p className=" bg-yellow-950 text-gray-100 px-2  py-1 rounded-lg">
                  {content[0].category}
                </p>
              </li>
              <li>
                <p className="  bg-black text-white px-2  py-1 rounded-lg">
                  {content[0].date}
                </p>
              </li>
            </ul>
          )}
        </div>
        <div className="max-w-screen-md mx-auto">
          {compare && (
            <p className="md:text-xl md:leading-relaxed whitespace-pre-wrap text-gray-400   leading-relaxed pt-8">
              {content[0].content}
            </p>
          )}
        </div>
      </div>
    </Layout>
  );
}
