import { SignedOut } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { BiLogoFacebookSquare } from "react-icons/bi";
import { FaInstagram, FaTiktok, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { LuSquareArrowOutUpRight } from "react-icons/lu";

const footerLinks = [
  {
    id: 1,
    label: "Help",
  },
  {
    id: 2,
    label: "Site Index",
  },
  {
    id: 3,
    label: "ImDbPro",
  },
  {
    id: 4,
    label: "Box Office Mojo",
  },
  {
    id: 5,
    label: "License IMDb Data",
  },
];

const Footer = () => {
  return (
    <div className="bg-gray-900 dark:bg-black/50">
      <div className="container flex flex-col items-center justify-center py-6">
        <SignedOut>
          <Link
            href="/sign-in"
            className="py-2 px-4 text-sm rounded-full bg-amber-500 font-semibold"
          >
            Sign in for more access
          </Link>
        </SignedOut>
        <div className="text-gray-300 flex flex-col md:flex-row items-center gap-5 my-5">
          <div className="w-[320px] md:w-[350px] flex flex-col items-center gap-4 border border-slate-700 p-3 rounded-lg">
            <h3 className="font-semibold text-xl">Follow IMDb on social</h3>
            <div className="flex text-2xl items-center gap-5 md:gap-10">
              <FaTiktok />
              <FaInstagram />
              <FaXTwitter />
              <FaYoutube />
              <BiLogoFacebookSquare />
            </div>
          </div>
          <div className="w-[320px] md:w-[350px] flex items-center justify-between gap-4 border border-slate-700 p-3 rounded-lg">
            <div className="flex flex-col gap-4">
              <h3 className="font-semibold text-xl">Get the IMDb app</h3>
              <p className="text-sm text-gray-500">For Android and iOS</p>
            </div>
            <Image
              src="/Qr Code.png"
              alt="QR"
              width={70}
              height={70}
              className="rounded-sm"
            />
          </div>
        </div>
        <ul className="flex flex-col md:flex-row items-center gap-5 md:gap-8">
          {footerLinks.map((link) => (
            <li
              key={link.id}
              className="flex items-center gap-1 hover:underline duration-300 cursor-pointer"
            >
              {link.label}
              <LuSquareArrowOutUpRight />
            </li>
          ))}
        </ul>
        <h3 className="text-lg my-5">
          an <span className="text-amber-500 font-semibold">ImDb</span> Company
        </h3>
        <p className="text-sm text-gray-500">
          © {new Date().getFullYear()} Abdulrahman, Inc.
        </p>
      </div>
    </div>
  );
};

export default Footer;
