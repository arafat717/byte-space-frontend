"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white text-gray-900 shadow-md py-4"
          : "bg-transparent text-white py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <div className="font-bold text-xl">ByteSpace</div>

        <nav className="flex space-x-6 text-sm font-medium">
          <Link href="#" className="hover:opacity-80">
            Home
          </Link>
          <Link href="#" className="hover:opacity-80">
            Courses
          </Link>
          <Link href="#" className="hover:opacity-80">
            Creators
          </Link>
        </nav>

        <div className="flex items-center space-x-4 text-sm">
          <Link href="#">Sign In</Link>
          <Link href="#">
            <Button className="px-4 py-2 bg-lime-400 text-black rounded-full font-semibold">
              Join Us
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
}
