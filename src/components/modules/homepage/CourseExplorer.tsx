"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

interface Course {
  id: number;
  title: string;
  author: string;
  image: string;
  lessons: number;
  duration: string;
  comments: number;
  rating: number;
  level: string;
  price: number;
}

const CATEGORY_ROWS = [
  // Row 1 (8 items)
  [
    "Featured",
    "Music",
    "Drawing & Painting",
    "Marketing",
    "Animation",
    "Social Media",
    "UI/UX Design",
    "Creative Marketing",
  ],
  // Row 2 (8 items)
  [
    "Digital Illustration",
    "Film & Video",
    "Crafts",
    "Freelance & Entrepreneurship",
    "Graphic Design",
    "Photography",
  ],
  // Row 3 (5 items)
  ["Productivity", "Web Development", "Data Science", "Cooking"],
];

const COURSES: Course[] = [
  {
    id: 1,
    title: "Learn Figma from Basic",
    author: "purepearl studio",
    image:
      "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?auto=format&fit=crop&w=800&q=80",
    lessons: 17,
    duration: "2 hours 16 mins",
    comments: 59,
    rating: 4.5,
    level: "Beginner",
    price: 25,
  },
  {
    id: 2,
    title: "Build Digital Asset",
    author: "purepearl studio",
    image:
      "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80",
    lessons: 17,
    duration: "2 hours 16 mins",
    comments: 59,
    rating: 4.5,
    level: "Beginner",
    price: 25,
  },
  {
    id: 3,
    title: "the Power of Big Data",
    author: "purepearl studio",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
    lessons: 17,
    duration: "2 hours 16 mins",
    comments: 59,
    rating: 4.5,
    level: "Beginner",
    price: 25,
  },
  {
    id: 4,
    title: "Balancing Productivity an...",
    author: "purepearl studio",
    image:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80",
    lessons: 17,
    duration: "2 hours 16 mins",
    comments: 59,
    rating: 4.5,
    level: "Beginner",
    price: 25,
  },
  {
    id: 5,
    title: "Mastering Money Manage...",
    author: "purepearl studio",
    image:
      "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?auto=format&fit=crop&w=800&q=80",
    lessons: 17,
    duration: "2 hours 16 mins",
    comments: 59,
    rating: 4.5,
    level: "Beginner",
    price: 25,
  },
  {
    id: 6,
    title: "From Idea to Startup Succ...",
    author: "purepearl studio",
    image:
      "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80",
    lessons: 17,
    duration: "2 hours 16 mins",
    comments: 59,
    rating: 4.5,
    level: "Beginner",
    price: 25,
  },
];

export default function CourseExplorer() {
  return (
    <section className="w-full bg-white px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Title Header */}
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-[#040819] sm:text-4xl lg:text-[44px] lg:leading-[1.15]">
            Discover Your Passion, <br className="hidden sm:inline" />
            Build Your Skills
          </h2>
          <p className="mt-6 text-xs sm:text-[18px] my-8 leading-relaxed text-[#82868E] max-w-full mx-auto">
            At Bytespace Courses, we bring you closer to life-changing
            knowledge. Explore a variety of courses across different fields,
            from technology to the arts, and make a difference in your career
            and life.
          </p>
        </div>

        {/* Category Pills */}
        <div className="mt-8 mb-20 flex flex-col items-center gap-4 max-w-8xl mx-auto">
          {CATEGORY_ROWS.map((row, rowIndex) => (
            <div
              key={row[0]}
              className="flex flex-wrap items-center justify-center gap-4"
            >
              {row.map((category) => {
                return (
                  <button
                    key={category}
                    type="button"
                    className={`rounded-full px-4 py-1.5 text-[16px] font-medium transition-all duration-150 ${"bg-[#F5F5F6] text-[#4B4C53] hover:text-[#242528] hover:bg-[#D4FB20]"}`}
                  >
                    {category}
                  </button>
                );
              })}

              {/* Append "+ More" directly to the last row */}
              {rowIndex === CATEGORY_ROWS.length - 1 && (
                <button
                  type="button"
                  className="text-xs font-semibold text-blue-600 hover:underline px-2 py-1.5"
                >
                  + More
                </button>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {COURSES.map((course) => (
            <Link
              key={course.id}
              href={`/courses/${course.id}`}
              className="group flex flex-col justify-between overflow-hidden rounded-[32px] border border-[#CED0D3] bg-white p-5 transition-all duration-200 hover:-translate-y-1 hover:shadow-lg"
            >
              <div>
                {/* Thumbnail Image Container */}
                <div className="relative h-56 w-full overflow-hidden rounded-[24px] bg-slate-100">
                  <Image
                    src={course.image}
                    alt={course.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />

                  {/* Three Separate Floating Frosted Glass Pills */}
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between gap-1">
                    <span className="rounded-full bg-[#F6F6F699] px-2 md:px-3 py-1.5 text-[12px] font-medium text-[#4F4F4F] backdrop-blur-md">
                      {course.lessons} Lessons
                    </span>
                    <span className="rounded-full bg-[#F6F6F699] px-2 md:px-3  py-1.5 text-[12px] font-medium text-[#4F4F4F] backdrop-blur-md">
                      {course.duration}
                    </span>
                    <span className="rounded-full bg-[#F6F6F699] px-2 md:px-3  py-1.5 text-[12px] font-medium text-[#4F4F4F] backdrop-blur-md">
                      {course.comments} Comments
                    </span>
                  </div>
                </div>

                {/* Title, Rating & Author */}
                <div className="mt-5 px-1">
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="text-xl font-semibold tracking-tight text-[#000000]  ">
                      {course.title}
                    </h3>
                    <div className="flex items-center space-x-1 text-[18px] font-normal text-[#4F4F4F] shrink-0">
                      <span>{course.rating}</span>
                      <svg
                        className="h-5 w-5 text-[#CED0D3] fill-current"
                        aria-hidden="true"
                        focusable="false"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    </div>
                  </div>

                  <p className="mt-1 text-sm text-[#4F4F4F]">
                    by{" "}
                    <span className="text-[#003BE2] hover:underline">
                      {course.author}
                    </span>
                  </p>
                </div>
              </div>

              {/* Middle Row: Level Tag & Overlapping Student Avatars */}
              <div className="mt-6 flex items-center space-x-3 px-1">
                {/* Beginner Pill with Bar Chart Icon */}
                <span className="flex items-center space-x-1.5 rounded-full bg-[#F5F5F6] px-3.5 py-1.5 text-xs font-semibold text-[#4B4C53]">
                  <svg
                    className="h-3.5 w-3.5 text-slate-700"
                    aria-hidden="true"
                    focusable="false"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2.5}
                      d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                    />
                  </svg>
                  <span>{course.level}</span>
                </span>

                {/* Overlapping Student Avatars */}
                <div className="flex -space-x-2">
                  <Image
                    className="inline-block h-8 w-8 rounded-full ring-2 ring-white object-cover"
                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=64&q=80"
                    alt="Student"
                    width={28}
                    height={28}
                  />
                  <Image
                    className="inline-block h-8 w-8 rounded-full ring-2 ring-white object-cover"
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=64&q=80"
                    alt="Student"
                    width={28}
                    height={28}
                  />
                  <Image
                    className="inline-block h-8 w-8 rounded-full ring-2 ring-white object-cover"
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=64&q=80"
                    alt="Student"
                    width={28}
                    height={28}
                  />
                  <Image
                    className="inline-block h-8 w-8 rounded-full ring-2 ring-white object-cover"
                    src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=64&q=80"
                    alt="Student"
                    width={28}
                    height={28}
                  />
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#D4FB20] text-xs font-bold text-slate-900 ring-2 ring-white">
                    26+
                  </span>
                </div>
              </div>

              {/* Bottom Price Row */}
              <div className="mt-5 px-1">
                <span className="text-xl font-semibold text-[#003BE2]">
                  ${course.price}
                </span>
                <span className="text-xs text-[#4F4F4F] font-medium">
                  /lifetime
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
