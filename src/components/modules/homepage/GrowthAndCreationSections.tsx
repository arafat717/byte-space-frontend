"use client";

import Image from "next/image";
import heroImage from "../../../../public/heroImages/hero-image.png";
import spring from "../../../../public/heroImages/Frame (10).png";
import femaleImage from "../../../../public/heroImages/female.png";
import spring2 from "../../../../public/heroImages/Mask Group (1).png";

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
    src: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=64&q=80",
  },
  {
    id: "student-5",
    src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=64&q=80",
  },
  {
    id: "student-6",
    src: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=64&q=80",
  },
];

function AvatarStack({
  count,
  size = "h-6 w-6",
  badge,
}: {
  count: number;
  size?: string;
  badge: string;
}) {
  return (
    <div className="flex items-center -space-x-1.5">
      {AVATARS.slice(0, count).map((avatar) => (
        <Image
          key={avatar.id}
          className={`inline-block ${size} rounded-full ring-2 ring-white object-cover`}
          src={avatar.src}
          alt="Student"
          width={28}
          height={28}
        />
      ))}
      <span
        className={`flex ${size} items-center justify-center rounded-full bg-[#D4FB20] text-[10px] font-bold text-slate-900 ring-2 ring-white`}
      >
        {badge}
      </span>
    </div>
  );
}

export default function GrowthAndCreationSections() {
  return (
    <div className="relative w-full overflow-hidden bg-[#FAFAFC] text-slate-900 py-16 lg:py-24">
      <div className="pointer-events-none absolute -top-24 left-[28%] h-[420px] w-[620px] -translate-x-1/2 rounded-full bg-[#CBFC01]/45 blur-[130px]" />
      <div className="pointer-events-none absolute top-0 right-0 h-[480px] w-[480px] translate-x-1/4 rounded-full bg-[#C9D3FF]/60 blur-[140px]" />
      <div className="pointer-events-none absolute top-[48%] -left-24 h-[380px] w-[380px] rounded-full bg-[#C9D3FF]/40 blur-[130px]" />
      <div className="pointer-events-none absolute -bottom-10 -left-20 h-[520px] w-[520px] rounded-full bg-[#CBFC01]/45 blur-[130px]" />
      <div className="pointer-events-none absolute bottom-0 -right-[12%] h-[520px] w-[520px] rounded-full bg-[#B8C6FF]/65 blur-[140px]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-12 space-y-24 lg:space-y-32">
        <div className="grid grid-cols-1 items-center justify-center gap-12 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-6 space-y-8">
            <h1 className="text-3xl sm:text-[44px] font-semibold tracking-tight leading-[1.2] text-[#242528]">
              Your Path to Professional <br className="hidden sm:inline" />
              Growth Starts Here!
            </h1>

            <p className="text-base sm:text-[18px] leading-relaxed text-[#4B4C53] max-w-md">
              Explore our curated selection of courses tailored to enhance your
              capabilities and accelerate your career journey. Whether you are
              looking to sharpen specific skills, gain industry expertise, or
              embark on a new career path entirely, we have the resources you
              need.
            </p>

            <div className="pt-3 flex items-center space-x-10 sm:space-x-12">
              {[
                { value: "12K", label: "Students" },
                { value: "70+", label: "Courses" },
                { value: "16", label: "Creators" },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="text-2xl sm:text-4xl font-medium text-[#003BE2]">
                    {stat.value}
                  </p>
                  <p className="text-xs sm:text-[18px] text-[#4B4C53] mt-0.5">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-6 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[560px] aspect-square">
              <div className="absolute left-0 top-0 z-0 w-[66%] rounded-[28px] border border-[#CED0D3] bg-white p-3.5 shadow-sm">
                <div className="relative h-32 sm:h-48 w-full overflow-hidden rounded-[20px] bg-slate-100">
                  <Image
                    src="https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?auto=format&fit=crop&w=800&q=80"
                    alt="Course Thumbnail"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute bottom-2.5 left-2.5 right-2.5 flex items-center justify-between gap-1">
                    <span className="rounded-full bg-white/60 px-2.5 py-1 text-[10px] font-medium text-[#4F4F4F] backdrop-blur-md">
                      17 Lessons
                    </span>
                    <span className="rounded-full bg-white/60 px-2.5 py-1 text-[10px] font-medium text-[#4F4F4F] backdrop-blur-md">
                      2 hours 16 mins
                    </span>
                    <span className="hidden sm:inline rounded-full bg-white/60 px-2.5 py-1 text-[10px] font-medium text-[#4F4F4F] backdrop-blur-md">
                      59 Comments
                    </span>
                  </div>
                </div>
                <div className="mt-4 px-1">
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="text-base sm:text-lg font-semibold tracking-tight text-slate-900">
                      Learn Figma from Basic
                    </h3>
                    <div className="flex items-center space-x-1 text-sm text-[#4F4F4F] shrink-0">
                      <span>4.5</span>
                      <svg
                        className="h-4 w-4 text-[#CED0D3] fill-current"
                        aria-hidden="true"
                        focusable="false"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    </div>
                  </div>
                  <p className="mt-0.5 text-xs text-[#4F4F4F]">
                    by <span className="text-[#003BE2]">purepearl studio</span>
                  </p>
                </div>
                <div className="mt-3 flex items-center space-x-3 px-1">
                  <span className="flex items-center space-x-1.5 rounded-full bg-[#F5F5F6] px-3 py-1 text-[11px] font-semibold text-[#4B4C53]">
                    <svg
                      className="h-3 w-3 text-slate-700"
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
                    <span>Beginner</span>
                  </span>
                  <AvatarStack count={3} badge="26+" />
                </div>
                <div className="mt-3 px-1">
                  <span className="text-lg font-bold text-[#003BE2]">$25</span>
                  <span className="text-[11px] text-[#4F4F4F] font-medium">
                    /lifetime
                  </span>
                </div>
              </div>

              {/* Student: % values on mobile, original values from sm up */}
              <div className="absolute bottom-[10.7%] right-[2.9%] z-10 h-[98%] w-[88%] sm:bottom-15 sm:right-4">
                <Image
                  src={heroImage}
                  alt="Student holding laptop"
                  fill
                  priority
                  className="object-contain object-bottom drop-shadow-xl"
                />
              </div>

              {/* Spring: % width on mobile, original 215px from sm up */}
              <div className="absolute right-[-7%] top-[15%] z-50 h-[36%] w-[38%] sm:w-[215px]">
                <Image
                  src={spring}
                  alt="3D Green Spring"
                  fill
                  className="object-contain"
                />
              </div>

              <div className="absolute right-0 top-[40%] z-30 w-[40%] rounded-2xl border border-slate-100 bg-white p-3 sm:p-4 shadow-xl">
                <p className="text-[10px] sm:text-xs font-medium text-slate-500">
                  Learning Progress
                </p>
                <p className="text-2xl sm:text-3xl font-medium text-slate-900 mt-1">
                  55%
                </p>
                <div className="mt-2 h-1.5 w-full rounded-full bg-slate-100 overflow-hidden">
                  <div className="h-full w-[55%] rounded-full bg-[#D4FB20]" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-6 order-2 lg:order-1 flex justify-center lg:justify-start">
            <div className="relative w-full max-w-[520px] aspect-[1/1.05]">
              <div className="absolute left-0 top-[3%] z-0 w-[44%] rounded-2xl bg-[#003BE2] p-3 sm:p-4 text-white shadow-xl">
                <p className="text-[10px] sm:text-xs text-blue-100">
                  Total Revenue{" "}
                  <span className="text-[8px] sm:text-[9px] text-blue-200">
                    July 1-26
                  </span>
                </p>
                <p className="text-lg sm:text-2xl font-semibold mt-1">
                  $120.29
                </p>
                <div className="mt-2 h-1.5 w-full rounded-full bg-blue-400/50 overflow-hidden">
                  <div className="h-full w-[55%] bg-white rounded-full" />
                </div>
              </div>
              <div className="absolute left-0 top-[27%] z-5  rounded-2xl bg-[#003BE2] py-3 px-1 sm:p-4  text-white shadow-xl">
                <p className="text-[10px] sm:text-xs text-blue-100">
                  Year to Date
                </p>
                <p className="text-[8px] sm:text-[9px] text-blue-200">2023</p>
                <p className="text-lg sm:text-2xl font-semibold mt-1">
                  $1,200.38
                </p>
                <span className="inline-block mt-2 rounded-full bg-[#D4FB20] px-2 py-0.5 text-[10px] font-bold text-slate-900">
                  +125
                </span>
              </div>

              {/* Instructor: % values on mobile, original px values from sm up */}
              <div className="absolute bottom-[9.5%] -left-[6%] z-[5] h-[91.6%] w-[105.8%] sm:bottom-13 sm:h-[500px] sm:w-[550px]">
                <Image
                  src={femaleImage}
                  alt="Instructor with tablet"
                  fill
                  className="object-contain object-bottom drop-shadow-xl"
                />
              </div>

              <div className="absolute left-[52%] top-[10%] z-20 h-[34%] w-[36%]">
                <Image
                  src={spring2}
                  alt="3D Green Spring"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="absolute right-0 bottom-[8%] z-30 w-[50%] rounded-2xl border border-slate-100 bg-white p-3 sm:p-4 shadow-xl">
                <p className="text-[10px] sm:text-xs font-medium text-slate-500">
                  Happy Students
                </p>
                <p className="text-[10px] sm:text-xs font-semibold text-slate-800">
                  4.5{" "}
                  <span className="text-[9px] text-slate-400 font-normal">
                    (24)
                  </span>{" "}
                  <span className="text-[#D4FB20]">★</span>
                </p>
                <div className="mt-2">
                  <AvatarStack
                    count={6}
                    size="h-6 w-6 sm:h-7 sm:w-7"
                    badge="2K+"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="lg:col-span-6 order-1 lg:order-2 space-y-6">
            <h2 className="text-3xl sm:text-[44px] font-semibold tracking-tight leading-[1.2] text-[#242528]">
              Create & Manage <br />
              Courses Easily.
            </h2>

            <p className="text-base sm:text-[18px] leading-relaxed text-[#4B4C53] max-w-2xl">
              <span className="font-bold text-slate-800">ByteSpace</span>{" "}
              supports individuals or entities in the creation, publication, and
              administration of educational courses.
            </p>

            <div className="pt-2 space-y-3.5">
              {[
                "Share Your Expertise",
                "Monetize Your Passion",
                "Flexibility and Autonomy",
                "Build a Community",
              ].map((item) => (
                <div key={item} className="flex items-center space-x-3">
                  <div className="flex h-5 w-5 items-center justify-center rounded-full bg-[#003BE2] text-white shrink-0">
                    <svg
                      className="h-3 w-3"
                      aria-hidden="true"
                      focusable="false"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={3}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <span className="text-base sm:text-[18px] font-medium text-[#242528]">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
