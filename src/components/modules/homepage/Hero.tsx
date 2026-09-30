"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, Search, Star, X } from "lucide-react";

/* ---- Edit extensions here if any of yours are not .png ---- */
const p = (file: string) => encodeURI(`/heroImages/${file}`);
const IMAGES = {
  logo: p("Header_Logo.png"),
  bag: p("Vector (1).png"),
  person: p("hero-image.png"),
  arch: p("Ellipse 7.png"),
  ring: p("Cone (1).png"), // white donut
  pyramid: p("Cone.png"), // white triangle
  limeSpring: p("Frame (2).png"), // lime squiggle (left)
  whiteSpringSmall: p("Frame (3).png"), // small white squiggle (left)
  whiteSpringBig: p("Frame (4).png"), // big white squiggle (right)
  cylinder: p("Mask Group.png"), // lime cylinder (top right)
};

/* Decorative image. Size + position come from className. */
function Deco({
  src,
  className,
  priority = false,
}: {
  src: string;
  className: string;
  priority?: boolean;
}) {
  return (
    <Image
      src={src}
      alt=""
      width={0}
      height={0}
      sizes="100vw"
      priority={priority}
      draggable={false}
      className={`absolute select-none pointer-events-none ${className}`}
    />
  );
}

const AVATAR_COLORS = [
  "from-amber-300 to-orange-500",
  "from-pink-300 to-rose-500",
  "from-stone-300 to-stone-600",
  "from-sky-300 to-indigo-500",
  "from-emerald-300 to-teal-600",
  "from-violet-300 to-purple-600",
  "from-yellow-200 to-amber-600",
];

export default function HeroSection() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative h-[calc(100vh+90px)] min-h-[720px] w-full overflow-hidden bg-[#0039E3] text-white">
      {/* Grid background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.12) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.12) 1px, transparent 1px)",
          backgroundSize: "120px 120px",
          backgroundPosition: "1px 118px",
        }}
      />

      {/* ================= HEADER ================= */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "h-20 bg-[#0039E3]/95 backdrop-blur shadow-lg"
            : "h-20 md:h-[120px] bg-transparent"
        }`}
      >
        <div className="mx-auto flex h-full max-w-[1200px] items-center justify-between px-4 md:px-6 xl:px-0">
          {/* Logo */}
          <Link href="/" className="shrink-0">
            <Image
              src={IMAGES.logo}
              alt="ByteSpace"
              width={172}
              height={36}
              priority
              className="h-auto w-[140px] md:w-[172px]"
            />
          </Link>

          {/* Nav */}
          <nav className="hidden md:flex items-center gap-6 text-base">
            <Link
              href="#"
              className="font-medium hover:opacity-80 transition-opacity"
            >
              Home
            </Link>
            <Link
              href="#"
              className="font-normal hover:opacity-80 transition-opacity"
            >
              Courses
            </Link>
            <Link
              href="#"
              className="font-normal hover:opacity-80 transition-opacity"
            >
              Creators
            </Link>
          </nav>

          {/* Right */}
          <div className="flex items-center gap-3 text-base font-normal md:gap-6">
            <Link
              href="#"
              className="hidden hover:opacity-80 transition-opacity sm:inline"
            >
              Sign In
            </Link>
            <Link href="#" className="hover:opacity-80 transition-opacity">
              Join Us
            </Link>
            <button
              type="button"
              aria-label="Cart"
              className="hover:opacity-80 transition-opacity"
            >
              <Image src={IMAGES.bag} alt="" width={18} height={20} />
            </button>
            <button
              type="button"
              aria-label={
                isMobileMenuOpen
                  ? "Close navigation menu"
                  : "Open navigation menu"
              }
              aria-controls="mobile-navigation"
              aria-expanded={isMobileMenuOpen}
              className="flex h-10 w-10 items-center justify-center md:hidden"
              onClick={() => setIsMobileMenuOpen((open) => !open)}
            >
              {isMobileMenuOpen ? (
                <X aria-hidden="true" />
              ) : (
                <Menu aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
        <nav
          id="mobile-navigation"
          aria-label="Mobile navigation"
          aria-hidden={!isMobileMenuOpen}
          inert={!isMobileMenuOpen}
          className={`absolute inset-x-0 top-full flex flex-col overflow-hidden border-t border-white/20 bg-[#0039E3]/95 px-4 py-2 backdrop-blur transition-[max-height,opacity,transform] duration-300 ease-in-out motion-reduce:transition-none md:hidden ${
            isMobileMenuOpen
              ? "pointer-events-auto max-h-52 translate-y-0 opacity-100"
              : "pointer-events-none max-h-0 -translate-y-2 opacity-0"
          }`}
        >
          {["Home", "Courses", "Creators"].map((item) => (
            <Link
              key={item}
              href="#"
              className="border-b border-white/15 py-3 last:border-0"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item}
            </Link>
          ))}
        </nav>
      </header>

      {/* ================= DECORATIONS (edge anchored) ================= */}
      {/* Left side */}
      <Deco
        src={IMAGES.limeSpring}
        className="left-0 top-[18%] h-auto w-[clamp(90px,13.5vw,385px)] max-md:hidden"
      />
      <Deco
        src={IMAGES.whiteSpringSmall}
        className="left-[12%] top-[39%] h-auto w-[clamp(90px,10vw,245px)] max-md:hidden"
      />
      <Deco
        src={IMAGES.ring}
        className="left-[10.7%] z-70 bottom-[2%] h-auto w-[clamp(110px,20.4vw,320px)] max-md:hidden"
      />

      {/* Right side */}
      <Deco
        src={IMAGES.cylinder}
        className="right-0 top-[18%] h-auto w-[clamp(90px,11.5vw,290px)] max-md:hidden"
      />
      <Deco
        src={IMAGES.pyramid}
        className="right-[12%] top-[39%] h-auto w-[clamp(90px,10vw,245px)] max-md:hidden"
      />
      <Deco
        src={IMAGES.whiteSpringBig}
        className="right-[12.5%] bottom-[3%] h-auto w-[clamp(90px,15.5vw,360px)] max-md:hidden"
      />

      {/* ================= ARCH + PERSON (bottom center, sized by screen height) ================= */}
      <Deco
        src={IMAGES.arch}
        className="bottom-0 left-1/2 -translate-x-1/2 h-[50vh] w-auto max-w-none max-xl:h-[42vh] max-md:h-[36vh]"
      />
      <Deco
        src={IMAGES.person}
        priority
        className="bottom-0 left-1/2 -translate-x-1/2 z-[5] h-[57vh] w-auto max-w-none max-xl:h-[48vh] max-md:h-[43vh]"
      />

      {/* ================= FLOATING CARDS (offset from center) ================= */}
      {/* UI/UX Design */}
      <div className="hidden xl:block absolute z-10 bottom-[34vh] left-[calc(50%-328px)] w-[208px] rounded-xl bg-white px-4 py-3.5 text-gray-900 shadow-sm">
        <p className="text-base font-medium leading-tight">UI/UX Design</p>
        <p className="mt-1 text-[11px] text-gray-500">
          200 Courses <span className="mx-1">•</span> 1000+ Students
        </p>
      </div>

      {/* Learning Progress */}
      <div className="hidden xl:block absolute z-10 bottom-[23.5vh] left-[calc(50%+122px)] w-[232px] rounded-xl bg-white px-4 pt-4 pb-5 text-gray-900 shadow-sm">
        <p className="text-[13px] font-medium text-gray-800">
          Learning Progress
        </p>
        <p className="mt-1 text-5xl font-semibold leading-none tracking-tight">
          55%
        </p>
        <div className="mt-5 h-2 w-full overflow-hidden rounded-full bg-gray-100">
          <div className="h-full w-[55%] rounded-full bg-[#CCFF00]" />
        </div>
      </div>

      {/* Happy Students */}
      <div className="hidden xl:block absolute z-10 bottom-[6.5vh] left-[calc(50%-392px)] w-[258px] rounded-xl bg-white px-4 py-3.5 text-gray-900 shadow-sm">
        <p className="text-base font-medium leading-tight">Happy Students</p>
        <div className="mt-1 flex items-center gap-1 text-[12px] text-gray-600">
          <span>4.5</span>
          <span className="text-gray-400">(240)</span>
          <Star className="h-3.5 w-3.5 fill-[#CCFF00] text-[#CCFF00]" />
        </div>
        <div className="mt-2 flex items-center">
          {AVATAR_COLORS.map((c: any, i: any) => (
            <div
              key={i}
              className={`-ml-2 h-10 w-10 first:ml-0 rounded-full border-2 border-white bg-gradient-to-br ${c}`}
            />
          ))}
          <div className="-ml-2 flex h-11 w-11 items-center justify-center rounded-full border-2 border-white bg-[#CCFF00] text-xs font-semibold text-gray-900">
            2K+
          </div>
        </div>
      </div>

      {/* ================= TEXT + SEARCH ================= */}
      <div className="absolute inset-x-0 top-[max(130px,16.5%)] z-10 flex flex-col items-center px-6 text-center max-md:top-[104px] max-md:px-4">
        <h1 className="font-semibold leading-[1.15] tracking-tight text-[clamp(2.25rem,5.27vw,72px)] max-md:text-[clamp(2rem,8vw,3rem)]">
          Get Access to Hundreds <br /> Courses Available
        </h1>

        <p className="mt-[30px] max-w-[900px] text-[clamp(14px,1.25vw,18px)] font-normal leading-normal text-white/90 max-md:mt-5">
          Unlock your creativity, gain valuable knowledge, and grow your
          business with our wide range of courses.
        </p>

        <form
          onSubmit={(e) => e.preventDefault()}
          className="mt-[46px] flex w-full max-w-[600px] items-start justify-center gap-[17px] max-md:mt-7 max-md:flex-col max-md:items-stretch max-md:gap-3"
        >
          <div className="flex h-[52px] w-full max-w-[460px] items-center rounded-full bg-white px-[18px] max-md:max-w-none">
            <Search className="h-5 w-5 shrink-0 text-gray-500" />
            <input
              type="text"
              placeholder="Course, topic, creator"
              className="ml-2.5 w-full bg-transparent text-[17px] text-gray-800 placeholder-gray-400 focus:outline-none"
            />
          </div>
          <button
            type="submit"
            className="h-[46px] shrink-0 rounded-full bg-[#CCFF00] px-6 text-[17px] font-medium text-gray-900 transition-colors hover:bg-[#d8ff33] max-md:h-[52px]"
          >
            Search
          </button>
        </form>
      </div>
    </section>
  );
}
