import Link from "next/link";
import NavLink from "./NavLink";

const links = [
  { label: "Home", href: "/" },
  { label: "Favorite", href: "/favorite" },
  { label: "About", href: "/about" },
];

const Header = () => {
  return (
    <div className="container py-3 flex justify-between items-center">
      <ul className="flex gap-5">
        {links.map((link) => (
          <NavLink key={link.href} link={link} className="hidden md:block" />
        ))}
        <NavLink link={{ label: "Sign in", href: "/signin" }} />
      </ul>
      <Link href="/" className="flex items-center gap-1">
        <span className="text-2xl font-bold bg-amber-500 py-1 px-2 rounded-lg">
          IMDb
        </span>{" "}
        <span className="text-xl font-medium">Clone</span>
      </Link>
    </div>
  );
};

export default Header;
