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
    <header className="bg-black">
    <div className="flex justify-between items-center  text-white md:px-5 px-2 pt-5 sm:pt-10 sm:pb-2 container max-w-screen-xl mx-auto">
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
    </div>
    </header>
  );
}

export function NavFoot() {
  return (
    <footer className="bg-black">
      <div className="flex justify-between p-5 text-white container max-w-screen-xl mx-auto">
      <ul>
        <li className="pb-10 hover:underline">
          <Image
            alt="photo"
            src={"/social/telegram.png"}
            width={24}
            height={24}
            className="w-7 h-7 transition-all sm:w-10 sm:h-10"
          />

          <p className="hidden sm:inline"> telegram</p>
        </li>
        <li className="hover:underline">
          <Link href={"https://www.x.com/Lildeon_9"} target="_blank">
            <Image
              alt="photo"
              src={"/social/tweeter.png"}
              width={24}
              height={24}
              className="w-7 h-7 transition-all sm:w-10 sm:h-10"
            />
            <p className="hidden sm:inline">twitter</p>
          </Link>
        </li>
      </ul>
      <ul>
        <li className="pb-10 hover:underline">
          <Link href={"https://www.instagram.com/_lildeon9/"} target="_blank">
            <Image
              alt="photo"
              src={"/social/instagram.png"}
              width={24}
              height={24}
              className="w-7 h-7 transition-all sm:w-10 sm:h-10"
            />

            <p className="hidden sm:inline">instagram</p>
          </Link>
        </li>
        <li className="hover:underline">
          <Link href={"/blog/contact"}>
            <Image
              alt="photo"
              src={"/social/whatsapp.png"}
              width={24}
              height={24}
              className="w-7 h-7 transition-all sm:w-10 sm:h-10"
            />

            <p className="hidden sm:inline">whatsapp</p>
          </Link>
        </li>
      </ul>
      <ul>
        <li className="pb-10 hover:underline">
          <Link
            href={"www.linkedin.com/in/gideon-sowah-68632a142"}
            target="_blank"
          >
            <Image
              alt="photo"
              src={"/social/linkedin.png"}
              width={24}
              height={24}
              className="w-7 h-7 transition-all sm:w-10 sm:h-10"
            />
            <p className="hidden sm:inline">linkedin</p>
          </Link>
        </li>
        <li className="hover:underline">
          <Link href={"https://github.com/Lildeon"} target="_blank">
            <Image
              alt="photo"
              src={"/social/github.png"}
              width={24}
              height={24}
              className="w-7 h-7 transition-all sm:w-10 sm:h-10"
            />
            <p className="hidden sm:inline">github</p>
          </Link>
        </li>
      </ul>
    </div>
    </footer>
  );
}
