"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import white from "../../../../../public/heroImages/white.png";
import tringle from "../../../../../public/heroImages/tringle.png";
import colorRing from "../../../../../public/heroImages/colorRing.png";
import logo from "../../../../../public/heroImages/logo.png";

/* ------------------------------------------------------------------
   Put your images in /public/authImages/ with these names,
   or change the paths below to match your actual files.
------------------------------------------------------------------- */
const IMG = {
  logo: "/heroImages/logo.png",
  torus: "/heroImages/colorRing.png",
  pyramid: "/heroImages/tringle.png",
  squiggle: "/heroImages/white.png",
};

const CHART_THUMB =
  "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80";

const AVATARS = [
  {
    id: "student-1",
    src: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=64&q=80",
  },
  {
    id: "student-2",
    src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=64&q=80",
  },
  {
    id: "student-3",
    src: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=64&q=80",
  },
  {
    id: "student-4",
    src: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=64&q=80",
  },
  {
    id: "student-5",
    src: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=64&q=80",
  },
  {
    id: "student-6",
    src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=64&q=80",
  },
  {
    id: "student-7",
    src: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=64&q=80",
  },
];

/* ---------- small helpers ---------- */

function AvatarStack({
  count,
  size = "h-6 w-6",
  badge,
  badgeClass,
}: {
  count: number;
  size?: string;
  badge: string;
  badgeClass: string;
}) {
  return (
    <div className="flex items-center -space-x-1.5">
      {AVATARS.slice(0, count).map((avatar) => (
        <Image
          key={avatar.id}
          src={avatar.src}
          alt="Student"
          width={28}
          height={28}
          className={`${size} rounded-full object-cover ring-2 ring-white`}
        />
      ))}
      <span
        className={`flex ${size} items-center justify-center rounded-full text-[9px] font-bold ring-2 ring-white ${badgeClass}`}
      >
        {badge}
      </span>
    </div>
  );
}

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-full bg-white/60 px-2.5 py-1 text-[9px] font-medium text-[#4F4F4F] backdrop-blur-md">
      {children}
    </span>
  );
}

function Star({ className = "" }: { className?: string }) {
  return (
    <svg
      className={`h-4 w-4 fill-current ${className}`}
      aria-hidden="true"
      focusable="false"
      viewBox="0 0 20 20"
    >
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  );
}

function Shape({
  src,
  alt,
  className,
}: {
  src: string;
  alt: string;
  className: string;
}) {
  return (
    <div className={`pointer-events-none absolute ${className}`}>
      <Image src={src} alt={alt} fill className="object-contain" />
    </div>
  );
}

/* ---------- Left collage ---------- */

function CourseCollage() {
  return (
    <div className="relative mt-16 aspect-[0.92] w-full max-w-[480px]">
      {/* Back card */}
      <div className="absolute left-0 top-[16%] z-0 h-[69%] w-[75%] rounded-[24px] bg-white p-3 shadow-lg">
        <div className="relative h-[42%] w-full overflow-hidden rounded-[16px] bg-slate-300">
          <div className="absolute bottom-2 left-2">
            <Pill>17 Lessons</Pill>
          </div>
        </div>
        <h3 className="mt-3 text-base font-semibold text-slate-900">
          Build Digital Products
        </h3>
        <p className="text-[10px] text-[#4F4F4F]">
          by <span className="text-[#003BE2]">purepearl studio</span>
        </p>
        <div className="mt-3 flex items-center gap-2">
          <span className="rounded-full bg-[#F5F5F6] px-3 py-1 text-[10px] font-semibold text-[#4B4C53]">
            Beginner
          </span>
          <AvatarStack count={3} badge="26+" badgeClass="bg-black text-white" />
        </div>
        <p className="mt-3 text-base font-bold text-[#003BE2]">
          $25
          <span className="text-[10px] font-medium text-[#4F4F4F]">
            /lifetime
          </span>
        </p>
      </div>

      {/* Front card */}
      <div className="absolute right-0 top-0 z-10 w-[75%] rounded-[24px] bg-white p-3 shadow-xl">
        <div className="relative h-32 w-full overflow-hidden rounded-[16px] bg-slate-900 sm:h-40">
          <Image
            src={CHART_THUMB}
            alt="Course thumbnail"
            fill
            className="object-cover"
          />
          <div className="absolute inset-x-2 bottom-2 flex items-center justify-between gap-1">
            <Pill>17 Lessons</Pill>
            <Pill>2 hours 16 mins</Pill>
            <Pill>59 Comments</Pill>
          </div>
        </div>

        <div className="mt-3 flex items-start justify-between px-1">
          <h3 className="text-base font-semibold text-slate-900">
            the Power of Big Data
          </h3>
          <div className="flex shrink-0 items-center gap-1 text-sm text-[#4F4F4F]">
            <span>4.5</span>
            <Star className="text-[#D4FB20]" />
          </div>
        </div>
        <p className="px-1 text-[10px] text-[#4F4F4F]">
          by <span className="text-[#003BE2]">purepearl studio</span>
        </p>

        <div className="mt-3 flex items-center gap-3 px-1">
          <span className="rounded-full bg-[#F5F5F6] px-3 py-1 text-[10px] font-semibold text-[#4B4C53]">
            Beginner
          </span>
          <AvatarStack count={4} badge="26+" badgeClass="bg-black text-white" />
        </div>
        <p className="mt-2 px-1 text-base font-bold text-[#003BE2]">
          $25
          <span className="text-[10px] font-medium text-[#4F4F4F]">
            /lifetime
          </span>
        </p>
      </div>

      {/* Happy Students card */}
      <div className="absolute bottom-10 left-[46%] z-20 w-[51%] rounded-2xl bg-[#D4FB20] p-3 shadow-lg">
        <p className="text-xs font-medium text-slate-800">Happy Students</p>
        <p className="text-[9px] text-slate-600">
          4.5 <span className="text-slate-500">(24)</span>{" "}
          <span className="text-[#003BE2]">★</span>
        </p>
        <div className="mt-2">
          <AvatarStack
            count={7}
            size="h-6 w-6 sm:h-7 sm:w-7"
            badge="2K+"
            badgeClass="bg-black text-white"
          />
        </div>
      </div>

      {/* Decorative shapes */}
      <Shape
        src={IMG.torus}
        alt="Lime torus"
        className="-left-[3%] -top-[5%] z-20 h-[30%] w-[32%]"
      />
      <Shape
        src={IMG.pyramid}
        alt="Lime pyramid"
        className="-bottom-[1%] -left-[2%] z-20 h-[36%] w-[36%]"
      />
      <Shape
        src={IMG.squiggle}
        alt="White squiggle"
        className="-right-[4%] top-[60%] z-20 h-[20%] w-[26%]"
      />
    </div>
  );
}

/* ---------- Page ---------- */

export default function SignInPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // TODO: call your sign-in mutation here
    console.log({ email, password });
  };

  return (
    <main className="relative min-h-screen w-full overflow-hidden bg-[#003BE2]">
      {/* Grid lines */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.12) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.12) 1px, transparent 1px)",
          backgroundSize: "100px 100px",
        }}
      />

      <div className="relative z-10 mx-auto grid min-h-screen max-w-7xl grid-cols-1 items-center gap-12 px-6 py-10 lg:grid-cols-2 lg:gap-8 lg:px-12">
        {/* Left side */}
        <div className="flex flex-col self-start pt-2 lg:pt-8">
          <Link href="/" className="relative block h-10 w-10">
            <Image
              src={IMG.logo}
              alt="ByteSpace logo"
              fill
              className="object-contain"
            />
          </Link>

          <h2 className="mt-8 text-[20px] font-semibold text-[#F5F5F6]">
            Sign up and come in
          </h2>
          <p className="mt-3 max-w-2xl text-[18px] leading-relaxed text-[#F5F5F6]">
            The registration process is straightforward, uncomplicated, and
            efficient, allowing users to sign up quickly, easily, and at no cost
          </p>

          <div className="hidden lg:block">
            <CourseCollage />
          </div>
        </div>

        {/* Right side: form card */}
        <div className="flex justify-center lg:justify-end">
          <div className="w-full max-w-[520px] rounded-[32px] bg-white p-8 shadow-2xl sm:p-12">
            <p className="text-sm text-[#003BE2]">Create an Account</p>
            <h1 className="text-4xl font-semibold tracking-tight text-[#1F1F1F] sm:text-[44px]">
              Welcome to ByteSpace
            </h1>

            <form onSubmit={handleSubmit} className="mt-8 space-y-5">
              <div>
                <label
                  htmlFor="email"
                  className="text-xs font-medium text-slate-800"
                >
                  Full Name
                </label>
                <input
                  id="name"
                  type="text"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="John Doe"
                  required
                  className="mt-2 h-12 w-full rounded-xl border border-slate-200 bg-[#F8F8F9] px-4 text-sm text-slate-900 placeholder:text-slate-400 outline-none transition focus:border-[#003BE2] focus:ring-2 focus:ring-[#003BE2]/20"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="text-xs font-medium text-slate-800"
                >
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="designer@example.com"
                  required
                  className="mt-2 h-12 w-full rounded-xl border border-slate-200 bg-[#F8F8F9] px-4 text-sm text-slate-900 placeholder:text-slate-400 outline-none transition focus:border-[#003BE2] focus:ring-2 focus:ring-[#003BE2]/20"
                />
              </div>

              <div>
                <label
                  htmlFor="password"
                  className="text-xs font-medium text-slate-800"
                >
                  Password
                </label>
                <input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="********"
                  required
                  className="mt-2 h-12 w-full rounded-xl border border-slate-200 bg-[#F8F8F9] px-4 text-sm text-slate-900 placeholder:text-slate-400 outline-none transition focus:border-[#003BE2] focus:ring-2 focus:ring-[#003BE2]/20"
                />
              </div>

              <div className="flex justify-end pt-2">
                <button
                  type="submit"
                  className="rounded-full bg-[#D4FB20] px-8 py-3 text-sm font-medium text-slate-900 transition hover:brightness-95 active:scale-95"
                >
                  Create an Account
                </button>
              </div>
            </form>

            <p className="mt-10 text-center text-xs text-slate-400">
              New user?{" "}
              <Link href="/login" className="text-[#003BE2] hover:underline">
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
