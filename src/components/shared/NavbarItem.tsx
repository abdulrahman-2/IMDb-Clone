"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const NavbarItem = ({ title, param }: { title: string; param: string }) => {
  const genre = usePathname().split("/")[2];

  return (
    <div>
      <Link
        href={`/top/${param}`}
        className={`font-semibold hover:text-amber-600 duration-300 ${
          genre === param &&
          "underline underline-offset-8 decoration-4 decoration-amber-500 rounded-lg"
        }`}
      >
        {title}
      </Link>
    </div>
  );
};

export default NavbarItem;
