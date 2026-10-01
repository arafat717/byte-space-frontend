"use client";

import Link from "next/link";
import icon1 from "../../../../public/heroImages/Vector.svg";
import icon2 from "../../../../public/heroImages/Vector (1).svg";
import icon3 from "../../../../public/heroImages/Vector (2).svg";
import icon4 from "../../../../public/heroImages/Vector (3).svg";
import icon5 from "../../../../public/heroImages/Style=Filled.svg";
import icon6 from "../../../../public/heroImages/Style=Outlined.svg";
import Image from "next/image";

interface CategoryCard {
  title: string;
  href: string;
  icon: React.ReactNode;
}

const CATEGORIES: CategoryCard[] = [
  {
    title: "Design",
    href: "/categories/design",
    icon: (
      <Image src={icon1} alt="Design Icon" className="h-6 w-6 text-slate-900" />
    ),
  },
  {
    title: "Development",
    href: "/categories/development",
    icon: (
      <Image src={icon2} alt="Design Icon" className="h-6 w-6 text-slate-900" />
    ),
  },
  {
    title: "IT & Software",
    href: "/categories/it-software",
    icon: (
      <Image src={icon5} alt="Design Icon" className="h-6 w-6 text-slate-900" />
    ),
  },
  {
    title: "Business",
    href: "/categories/business",
    icon: (
      <Image src={icon3} alt="Design Icon" className="h-6 w-6 text-slate-900" />
    ),
  },
  {
    title: "Marketing",
    href: "/categories/marketing",
    icon: (
      <Image src={icon6} alt="Design Icon" className="h-6 w-6 text-slate-900" />
    ),
  },
  {
    title: "Photography",
    href: "/categories/photography",
    icon: (
      <Image src={icon4} alt="Design Icon" className="h-6 w-6 text-slate-900" />
    ),
  },
];

export default function LearningPaths() {
  return (
    <section className="w-full bg-white px-6 py-20 md:px-12 lg:px-20">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-7xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-[#040819] sm:text-4xl md:text-[36px] md:leading-tight">
            Explore Diverse Learning Paths at Bytespace
          </h2>
          <p className="mt-4 text-sm sm:text-[18px] leading-relaxed text-[#82868E] max-w-5xl mx-auto">
            At Bytespace, we believe in empowering individuals through
            knowledge. Our diverse range of courses spans various fields,
            ensuring there&apos;s something for everyone. Unleash your potential
            and explore our carefully curated categories.
          </p>
        </div>
        <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6 lg:gap-5">
          {CATEGORIES.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className="group flex flex-col items-center justify-center rounded-[24px] border border-[#CED0D3] bg-white p-8 transition-all duration-200 hover:-translate-y-1 hover:border-slate-300 hover:shadow-md"
            >
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#D4FB20] transition-transform duration-200 group-hover:scale-105">
                {item.icon}
              </div>
              <span className="mt-5 text-center text-[20px] font-medium text-[#242528] transition-colors group-hover:text-slate-950">
                {item.title}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
