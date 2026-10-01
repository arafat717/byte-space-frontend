"use client";

import Image from "next/image";
import image1 from "../../../../public/heroImages/Frame (5).png";
import image2 from "../../../../public/heroImages/Frame (6).png";
import image3 from "../../../../public/heroImages/Frame (7).png";
import image4 from "../../../../public/heroImages/Frame (8).png";
import image5 from "../../../../public/heroImages/Frame (9).png";

const logos = [
  {
    name: "Logoipsum 1",
    icon: <Image src={image1} alt="Logoipsum 1" className="h-10 w-auto" />,
  },
  {
    name: "Logoipsum 2",
    icon: <Image src={image2} alt="Logoipsum 2" className="h-10 w-auto" />,
  },
  {
    name: "Logoipsum 3",
    icon: <Image src={image3} alt="Logoipsum 3" className="h-10 w-auto" />,
  },
  {
    name: "Logoipsum 4",
    icon: <Image src={image4} alt="Logoipsum 4" className="h-10 w-auto" />,
  },
  {
    name: "Logoipsum 5",
    icon: <Image src={image5} alt="Logoipsum 5" className="h-10 w-auto" />,
  },
];

export default function LogoMarquee() {
  return (
    <div className="w-full bg-[#F5F5F6] py-8 overflow-hidden">
      <div className="relative flex md:hidden w-full overflow-hidden [mask-image:_linear-gradient(to_right,_transparent_0,_black_64px,_black_calc(100%-64px),_transparent_100%)]">
        <div className="flex shrink-0 animate-marquee items-center justify-around gap-8 min-w-full">
          {logos.map((logo) => (
            <div
              key={logo.name}
              className="flex w-[calc(50vw-2rem)] shrink-0 items-center justify-center grayscale opacity-80"
            >
              {logo.icon}
            </div>
          ))}
        </div>
        <div
          className="flex shrink-0 animate-marquee items-center justify-around gap-8 min-w-full"
          aria-hidden="true"
        >
          {logos.map((logo) => (
            <div
              key={`mobile-logo-2-${logo.name}`}
              className="flex w-[calc(50vw-2rem)] shrink-0 items-center justify-center grayscale opacity-80"
            >
              {logo.icon}
            </div>
          ))}
        </div>
      </div>
      <div className="hidden md:flex mx-auto max-w-7xl items-center justify-between gap-8 py-10 px-8">
        {logos.map((logo) => (
          <div
            key={`desktop-logo-${logo.name}`}
            className="flex items-center justify-center grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all cursor-pointer"
          >
            {logo.icon}
          </div>
        ))}
      </div>
    </div>
  );
}
