"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const NavLink = ({
  link,
  className,
  onClick,
}: {
  link: { label: string; href: string };
  className?: string;
  onClick?: () => void;
}) => {
  const pathName = usePathname();
  return (
    <li
      className={`text-lg font-medium ${
        pathName === link.href && "text-amber-500"
      } ${className}`}
      key={link.href}
    >
      <Link href={link.href} onClick={onClick}>
        {link.label}
      </Link>
    </li>
  );
};

export default NavLink;
