import Link from "next/link";
import NavLink from "./NavLink";
import ModeToggle from "../ModeToggle";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

const links = [
  { label: "Home", href: "/" },
  { label: "Favorite", href: "/favorite" },
  { label: "About", href: "/about" },
];

const Header = () => {
  return (
    <div className="container p-3 sm:px-[2rem] flex justify-between items-center">
      <div className="flex items-center gap-2 md:gap-4">
        <Link href="/" className="flex items-center gap-1">
          <span className="text-2xl font-bold bg-amber-500 py-1 px-2 rounded-lg">
            IMDb
          </span>{" "}
          <span className="text-xl font-medium hidden sm:block">Clone</span>
        </Link>
      </div>

      <ul className="flex gap-5">
        {links.map((link) => (
          <NavLink key={link.href} link={link} className="hidden md:block" />
        ))}
        <SignedOut>
          <NavLink link={{ label: "Sign in", href: "/sign-in" }} />
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
        <ModeToggle />
      </ul>
    </div>
  );
};

export default Header;
