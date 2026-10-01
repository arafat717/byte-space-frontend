"use client";

import Image from "next/image";

/* ------------------------------------------------------------------
   Put your images in /public/ctaImages/ using these file names,
   or just change the paths below to match your actual files.
------------------------------------------------------------------- */
const IMG = {
  limeSquiggleTopLeft: "/ctaImages/lime-squiggle-1.png",
  whiteSquiggle: "/ctaImages/white-squiggle.png",
  whiteCone: "/ctaImages/white-cone.png",
  limeTorus: "/ctaImages/lime-torus.png",
  limePyramid: "/ctaImages/lime-pyramid.png",
  whiteCup: "/ctaImages/white-cup.png",
  limeSquiggleBottomRight: "/ctaImages/lime-squiggle-2.png",
};

type ShapeProps = {
  src: string;
  alt: string;
  /** positioning + sizing classes for the wrapper */
  className: string;
};

function Shape({ src, alt, className }: ShapeProps) {
  return (
    <div
      className={`pointer-events-none absolute hidden md:block ${className}`}
    >
      <Image src={src} alt={alt} fill className="object-contain" />
    </div>
  );
}

export default function CreatorCTASection() {
  return (
    <section className="relative w-full overflow-hidden bg-[#003BE2] text-white">
      {/* Grid lines */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.12) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.12) 1px, transparent 1px)",
          backgroundSize: "120px 120px",
          backgroundPosition: "center top",
        }}
      />

      {/* ===== Decorative images ===== */}
      {/* Top left */}
      <Shape
        src={IMG.limeSquiggleTopLeft}
        alt="Lime 3D squiggle"
        className="-left-8 -top-8 h-44 w-44"
      />
      <Shape
        src={IMG.whiteSquiggle}
        alt="White 3D squiggle"
        className="left-[14%] top-6 hidden h-36 w-36 lg:block"
      />

      {/* Left middle / bottom */}
      <Shape
        src={IMG.whiteCone}
        alt="White 3D cone"
        className="-left-4 top-[50%] h-40 w-32"
      />
      <Shape
        src={IMG.limeTorus}
        alt="Lime 3D torus"
        className="-bottom-24 left-[5%] h-64 w-64"
      />

      {/* Top right */}
      <Shape
        src={IMG.limePyramid}
        alt="Lime 3D pyramid"
        className="right-[14%] top-4 hidden h-36 w-36 lg:block"
      />
      <Shape
        src={IMG.whiteCup}
        alt="White 3D cylinder"
        className="-right-8 top-8 h-[300px] w-[200px]"
      />

      {/* Bottom right */}
      <Shape
        src={IMG.limeSquiggleBottomRight}
        alt="Lime 3D squiggle"
        className="-bottom-10 right-[4%] h-52 w-52"
      />

      {/* ===== Content ===== */}
      <div className="relative z-10 mx-auto flex min-h-[420px] max-w-3xl flex-col items-center justify-center px-6 py-20 text-center lg:min-h-[490px]">
        <h2 className="text-3xl font-semibold leading-[1.2] tracking-tight sm:text-4xl lg:text-5xl">
          Unlock Your Potential as a <br className="hidden sm:inline" />
          Creator with ByteSpace
        </h2>

        <p className="mt-10 max-w-3xl text-sm leading-7 text-white/90 sm:text-[15px]">
          Experience the collaboration of numerous creators and an expanding
          selection of courses. Register now and become a part of a community
          comprising over 10,000 local and international creators. Utilize our
          Course Editor, and showcase your expertise by publishing your finest
          course on the ByteSpace Course Library.
        </p>

        <button
          type="button"
          className="mt-10 rounded-full bg-[#D4FB20] px-6 py-3 text-sm font-medium text-slate-900 transition-transform hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
        >
          Join as Creator
        </button>
      </div>
    </section>
  );
}
