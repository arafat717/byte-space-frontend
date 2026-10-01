"use client";

import React from "react";
import Image from "next/image";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  avatar: string;
  quote: string;
}

const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: "Sarah M.",
    role: "Enthusiastic Learner",
    avatar:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=256&q=80",
    quote:
      '"ByteSpace has transformed my approach to learning. The diverse range of courses and the quality of content provided by creators have exceeded my expectations. The platform truly fosters a sense of community and lifelong learning."',
  },
  {
    id: 2,
    name: "James L.",
    role: "Lifelong Learner",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=256&q=80",
    quote:
      '"I\'ve tried several online learning platforms, and ByteSpace stands out for its vibrant community and the variety of courses available. The easy navigation and engaging content make it a go-to platform for continuous skill development."',
  },
  {
    id: 3,
    name: "Alex B.",
    role: "Inspired Creator",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=256&q=80",
    quote:
      '"As a creator, ByteSpace has been a game-changer for me. The Course Editor is user-friendly, and the support from the community is incredible. It\'s fulfilling to see my courses making a positive impact on learners globally."',
  },
];

export default function TestimonialsSection() {
  return (
    <section className="relative w-full overflow-hidden bg-[#F9F9FA] py-30 px-6 sm:px-12 lg:px-20">
      <div className="pointer-events-none absolute left-[58%] top-[20%] h-[420px] w-[620px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#D4FB20]/50 blur-[110px]" />
      <div className="pointer-events-none absolute right-0 top-[34%] h-[320px] w-[320px] translate-x-1/3 rounded-full bg-[#D4FB20]/45 blur-[110px]" />
      <div className="pointer-events-none absolute bottom-0 left-0 h-[420px] w-[420px] -translate-x-1/3 translate-y-1/4 rounded-full bg-[#8FA8FF]/50 blur-[110px]" />

      <div className="relative mx-auto max-w-7xl">
        <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-6">
            <h2 className="text-3xl sm:text-4xl lg:text-[44px] lg:leading-[1.15] font-semibold tracking-tight text-[#000000]">
              Discover What Our <br className="hidden sm:inline" />
              Community Is Saying
            </h2>
          </div>
          <div className="lg:col-span-6">
            <p className="text-xs sm:text-[18px] leading-relaxed text-[#4F4F4F] max-w-xl">
              At ByteSpace, our vibrant community of learners and creators is at
              the heart of what we do. Hear directly from those who have
              experienced the transformative journey of learning and creating on
              our platform. Explore testimonials that reflect the diverse
              perspectives of enthusiastic learners and accomplished creators.
            </p>
          </div>
        </div>
        <div className="mt-16 grid grid-cols-1 items-start gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {TESTIMONIALS.map((testimonial) => (
            <div
              key={testimonial.id}
              className="flex flex-col justify-between rounded-[28px] bg-white p-8 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-md"
            >
              <div>
                <div className="relative h-20 w-20 overflow-hidden rounded-full bg-slate-100">
                  <Image
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="mt-5">
                  <h3 className="text-[20px] font-semibold text-[#000000]">
                    {testimonial.name}
                  </h3>
                  <p className="text-[18px] font-normal text-[#003BE2] mt-0.5">
                    {testimonial.role}
                  </p>
                </div>
                <p className="mt-6 text-xs sm:text-[18px] leading-relaxed text-[#4F4F4F] font-normal">
                  {testimonial.quote}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
