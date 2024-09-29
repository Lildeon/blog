import Image from "next/image";
import Link from "next/link";

const links = [
  { name: "Home", href: "/blog" },
  { name: "More", href: "/blog/more" },
  { name: "About", href: "/blog/about" },
  { name: "Contact", href: "/blog/contact" },
];

export function NavHead() {
  return (
    <header className=" flex justify-between items-center  text-white  bg-black md:px-5 px-2 pt-5 sm:pt-10 sm:pb-2 container max-w-screen-xl mx-auto fixed top-0 left-0 right-0">
      <Link
        href={"/blog"}
        className="text-lg md:text-2xl lg:text-3xl font-bold transition delay-100 duration-200 hover:-translate-x-1 hover:scale-110"
      >
        Mobile
      </Link>
      <nav className="flex gap-3 text-sm md:gap-5  md:text-lg">
        {links.map((link) => (
          <Link
            href={link.href}
            key={link.name}
            className="flex-auto   hover:underline"
          >
            {link.name}
          </Link>
        ))}
      </nav>
    </header>
  );
}

export function NavFoot() {
  return (
    <div className="flex justify-between  p-5  bg-gray-500  text-white container max-w-screen-xl mx-auto">
      <ul>
        <li className="pb-10 hover:underline">
          <Image
            src={"/icons/facebook.svg"}
            alt="photo"
            width={24}
            height={24}
            className="w-7 h-7 transition-all md:w-10 md:h-10"
          />
          <p className="hidden md:inline"> facebook</p>
        </li>
        <li className="hover:underline">
          <Link href={"https://www.x.com/Lildeon_9"}>
            <Image
              src={"/icons/twitter.svg"}
              alt="photo"
              width={24}
              height={24}
              className="w-7 h-7 transition-all md:w-10 md:h-10"
            />
            <p className="hidden md:inline">twitter</p>
          </Link>
        </li>
      </ul>
      <ul>
        <li className="pb-10 hover:underline">
          <Link href={""}>
            <Image
              src={"/icons/instagram.svg"}
              alt="photo"
              width={24}
              height={24}
              className="w-7 h-7 transition-all md:w-10 md:h-10"
            />
            <p className="hidden md:inline">instagram</p>
          </Link>
        </li>
        <li className="hover:underline">
          <Link href={"/blog/contact"}>
            <Image
              src={"/icons/whatsapp.svg"}
              alt="photo"
              width={24}
              height={24}
              className="w-7 h-7 transition-all md:w-10 md:h-10"
            />

            <p className="hidden md:inline">whatsapp</p>
          </Link>
        </li>
      </ul>
      <ul>
        <li className="pb-10 hover:underline">
          <Link href={"www.linkedin.com/in/gideon-sowah-68632a142"}>
            <Image
              src={"/icons/linkedin.svg"}
              alt="photo"
              width={24}
              height={24}
              className="w-7 h-7 transition-all md:w-10 md:h-10"
            />
            <p className="hidden md:inline">linkedin</p>
          </Link>
        </li>
        <li className="hover:underline">
          <Link href={"https://github.com/Lildeon"}>
            <Image
              src={"/icons/github.svg"}
              alt="photo"
              width={24}
              height={24}
              className="w-7 h-7 transition-all md:w-10 md:h-10  "
            />
            <p className="hidden md:inline">github</p>
          </Link>
        </li>
      </ul>
    </div>
  );
}
