"use client";

import { useEffect, useRef, useState } from "react";
import { CgMenuGridO } from "react-icons/cg";
import { IoClose } from "react-icons/io5";
import NavLink from "./shared/NavLink";

const ToggleMene = ({ links }: any) => {
  const [open, setOpen] = useState(false);
  const outsideRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        outsideRef.current &&
        !outsideRef.current.contains(e.target as Node)
      ) {
        setOpen(false);
      }
    };

    if (open) {
      document.body.style.overflow = "hidden";
      window.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("mousedown", handleClickOutside);
    };
  }, [open]);

  const toggleMenu = () => setOpen((prev) => !prev);
  return (
    <div>
      {/* Hamburger Icon */}
      <div className="md:hidden">
        {!open && (
          <CgMenuGridO
            size={40}
            className="cursor-pointer"
            onClick={toggleMenu}
            aria-label="Open Menu"
          />
        )}
      </div>

      {/* Side Menu */}
      <div
        ref={outsideRef}
        className={`fixed top-0 left-0 z-50 w-[310px] min-h-screen bg-black/90 flex flex-col items-center justify-center transition-transform duration-300 transform ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
        aria-hidden={!open}
      >
        {/* Close Icon */}
        <IoClose
          size={40}
          className="text-gray-50 cursor-pointer absolute top-5 right-5"
          onClick={toggleMenu}
          aria-label="Close Menu"
        />

        {/* Menu Content */}
        <div className="flex flex-col items-center gap-10">
          <h1 className="text-3xl font-semibold">
            <span className="text-amber-500">IMDb</span> Clone
          </h1>
          <nav className="list-none space-y-6 text-center">
            {links.map((link: any) => (
              <NavLink link={link} key={link.href} onClick={toggleMenu} />
            ))}
          </nav>
        </div>
      </div>
    </div>
  );
};

export default ToggleMene;
