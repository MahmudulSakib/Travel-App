import Link from "next/link";
import Image from "next/image";
import { NAV_LINKS } from "../constants";
import Button from "./Button";

const Navbar = () => {
  return (
    <nav className="mx-auto max-w-[1440px] flex items-center justify-between px-6 lg:px-20 3xl:px-0 z-30 py-5">
      <Link href="/">
        <Image src="/hilink-logo.svg" alt="logo" width={74} height={29} />
      </Link>
      <ul className="hidden h-full gap-12 lg:flex">
        {NAV_LINKS.map((link) => (
          <Link
            href={link.href}
            key={link.key}
            className="bg-bl text-[16px] font-[400] text-gray-500 flex items-center justify-center cursor-pointer pb-1.5 transition-all hover:font-bold"
          >
            {link.label}
          </Link>
        ))}
      </ul>
      <div className="lg:flex lg:items-center lg:justify-center hidden">
        <Button
          type="button"
          title="Login"
          icon="/user.svg"
          variant="bg-[#141414] px-8 py-4 text-white transition-all hover:bg-black"
          heigth={24}
          width={24}
        />
      </div>
      <Image
        src="/menu.svg"
        alt="menu"
        className="inline-block cursor-pointer lg:hidden"
        height={32}
        width={32}
      />
    </nav>
  );
};

export default Navbar;
