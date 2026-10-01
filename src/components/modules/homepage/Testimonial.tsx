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
    <section className="relative w-full overflow-hidden bg-white py-20 px-6 sm:px-12 lg:px-20">
      {/* Background Radial Glow Effects */}
      <div className="absolute top-0 left-0 h-[450px] w-[450px] -translate-x-1/3 -translate-y-1/3 rounded-full bg-[#D4FB20]/20 blur-[130px] pointer-events-none" />
      <div className="absolute top-1/4 right-0 h-[450px] w-[450px] translate-x-1/3 rounded-full bg-[#D4FB20]/25 blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 h-[350px] w-[350px] -translate-x-1/4 translate-y-1/4 rounded-full bg-blue-500/10 blur-[120px] pointer-events-none" />

      <div className="relative mx-auto max-w-7xl">
        {/* Header Section */}
        <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-12 lg:gap-16">
          {/* Main Title (Left) */}
          <div className="lg:col-span-6">
            <h2 className="text-3xl sm:text-4xl lg:text-[44px] lg:leading-[1.15] font-extrabold tracking-tight text-slate-900">
              Discover What Our <br className="hidden sm:inline" />
              Community Is Saying
            </h2>
          </div>

          {/* Subtitle Description (Right) */}
          <div className="lg:col-span-6">
            <p className="text-xs sm:text-sm leading-relaxed text-slate-500 max-w-xl">
              At ByteSpace, our vibrant community of learners and creators is at
              the heart of what we do. Hear directly from those who have
              experienced the transformative journey of learning and creating on
              our platform. Explore testimonials that reflect the diverse
              perspectives of enthusiastic learners and accomplished creators.
            </p>
          </div>
        </div>

        {/* Testimonials Cards Grid */}
        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {TESTIMONIALS.map((testimonial) => (
            <div
              key={testimonial.id}
              className="flex flex-col justify-between rounded-[28px] border border-slate-100 bg-white/90 p-8 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-md backdrop-blur-sm"
            >
              <div>
                {/* User Avatar */}
                <div className="relative h-14 w-14 overflow-hidden rounded-full bg-slate-100">
                  <Image
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Name & Role */}
                <div className="mt-5">
                  <h3 className="text-base font-extrabold text-slate-900">
                    {testimonial.name}
                  </h3>
                  <p className="text-xs font-medium text-[#003BE2] mt-0.5">
                    {testimonial.role}
                  </p>
                </div>

                {/* Quote Text */}
                <p className="mt-6 text-xs sm:text-[13px] leading-relaxed text-slate-500 font-normal">
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
