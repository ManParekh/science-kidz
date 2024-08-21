"use client";

import { CircleX, Menu } from "lucide-react";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { useState } from "react";

export const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const { data: session } = useSession();

  return (
    <div className="absolute top-0 left-0 z-50 w-full">
      <div className="flex items-center justify-between p-4 bg-transparent md:hidden">
        <div className="h-6 w-6 absolute top-5 left-5" onClick={handleToggle}>
          {isOpen ? (
            <CircleX className="text-gray-800 cursor-pointer" />
          ) : (
            <Menu className="text-gray-800 cursor-pointer" />
          )}
        </div>
      </div>
      <div
        className={`fixed inset-0 z-40 bg-black bg-opacity-50 transition-opacity duration-300 ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={handleToggle}
      ></div>
      <div
        className={`fixed top-0 left-0 z-50 w-64 h-full bg-white transition-transform duration-300 transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <nav className="flex flex-col p-4">
          <div>
            <Link href={"/"} onClick={handleToggle}>
              <div className="block px-4 py-2 text-lg font-bold text-gray-800 hover:text-orange-500">
                HOME
              </div>
            </Link>
            <Link href={"/#courses"} onClick={handleToggle}>
              <div className="block px-4 py-2 text-lg font-bold text-gray-800 hover:text-orange-500">
                COURSES
              </div>
            </Link>
            <Link href={"/#competitions"} onClick={handleToggle}>
              <div className="block px-4 py-2 text-lg font-bold text-gray-800 hover:text-orange-500">
                COMPETITIONS
              </div>
            </Link>
            <Link href={"#gallery"} onClick={handleToggle}>
              <div className="block px-4 py-2 text-lg font-bold text-gray-800 hover:text-orange-500">
                GALLERY
              </div>
            </Link>
            <Link
              href={session?.user.email ? "/upload" : "/admin-login"}
              onClick={handleToggle}
            >
              <div className="block px-4 py-2 text-lg font-bold text-gray-800 hover:text-orange-500">
                {session?.user.email ? "UPLOAD" : "LOGIN"}
              </div>
            </Link>
            <Link href={"contact-us"} onClick={handleToggle}>
              <div className="block px-4 py-2 text-lg font-bold text-gray-800 hover:text-orange-500">
                CONTACT US
              </div>
            </Link>
            <Link href={"about"} onClick={handleToggle}>
              <div className="block px-4 py-2 text-lg font-bold text-gray-800 hover:text-orange-500">
                ABOUT
              </div>
            </Link>
          </div>
        </nav>
      </div>
    </div>
  );
};
