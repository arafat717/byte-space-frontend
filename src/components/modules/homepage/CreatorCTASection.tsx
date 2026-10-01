"use client";

import Image, { type ImageProps } from "next/image";
import img1 from "../../../../public/heroImages/Frame (12).png";
import img2 from "../../../../public/heroImages/Frame (13).png";
import img3 from "../../../../public/heroImages/Cone (3).png";
import img4 from "../../../../public/heroImages/Cone (4).png";

import img5 from "../../../../public/heroImages/Cone (5).png";
import img6 from "../../../../public/heroImages/Cone (6).png";
import img7 from "../../../../public/heroImages/Frame (14).png";

const IMG = {
  limeSquiggleTopLeft: img1,
  whiteSquiggle: img2,
  whiteCone: img3,
  limeTorus: img4,
  limePyramid: img5,
  whiteCup: img6,
  limeSquiggleBottomRight: img7,
};

type ShapeProps = {
  src: ImageProps["src"];
  alt: string;
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
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.12) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.12) 1px, transparent 1px)",
          backgroundSize: "120px 120px",
          backgroundPosition: "center top",
        }}
      />

      {/* Top left */}
      <Shape
        src={IMG.limeSquiggleTopLeft}
        alt="Lime 3D squiggle"
        className="-left-2 -top-4 h-44 w-44"
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
        className="-left-1 top-[50%] h-40 w-32"
      />
      <Shape
        src={IMG.limeTorus}
        alt="Lime 3D torus"
        className="-bottom-15 left-[5%] h-64 w-64"
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
        className="-right-3 top-8 h-[300px] w-[200px]"
      />

      {/* Bottom right */}
      <Shape
        src={IMG.limeSquiggleBottomRight}
        alt="Lime 3D squiggle"
        className="-bottom-11 right-[4%] h-52 w-52"
      />

      <div className="relative z-10 mx-auto flex min-h-[420px] max-w-3xl flex-col items-center justify-center px-6 py-20 text-center lg:min-h-[490px]">
        <h2 className="text-3xl font-semibold leading-[1.2] text-[#F5F5F6] tracking-tight sm:text-4xl lg:text-[44px]">
          Unlock Your Potential as a <br className="hidden sm:inline" />
          Creator with ByteSpace
        </h2>

        <p className="mt-10 max-w-5xl text-[18px] leading-7 text-[#F5F5F6] sm:text-[18px]">
          Experience the collaboration of numerous creators and an expanding
          selection of courses. Register now and become a part of a community
          comprising over 10,000 local and international creators. Utilize our
          Course Editor, and showcase your expertise by publishing your finest
          course on the ByteSpace Course Library.
        </p>

        <button
          type="button"
          className="mt-10 rounded-full bg-[#D4FB20] px-6 py-3 text-sm font-medium text-[#242528] transition-transform hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
        >
          Join as Creator
        </button>
      </div>
    </section>
  );
}
