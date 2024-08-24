import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <div className="h-screen w-screen   p-3 flex  justify-center  items-center">
        <Link
          href={"/blog"}
          className=" bg-red-400 text-white text-4xl rounded-md p-4 text-center hover:bg-red-600 animate-bounce"
        >
          Login wth Google
        </Link>
      </div>
    </main>
  );
}
