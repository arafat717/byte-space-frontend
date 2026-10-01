"use client";
import Link from "next/link";
import footerLogo from "../../../../public/heroImages/footer-logo.png";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="w-full bg-white px-6 py-12 text-slate-700 md:px-16 lg:px-24">
      <div className="mx-auto max-w-[1280px]">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-8">
          <div className="flex flex-col space-y-6 lg:col-span-5">
            <Link href="/" className="flex items-center space-x-3 w-fit">
              <Image src={footerLogo} alt="ByteSpace" width={170} height={37} />
            </Link>
            <p className="text-sm text-[#242528] max-w-md leading-relaxed">
              Stay Up to date with our latest features and releases by joining
              our newsletter.
            </p>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2"
            >
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full sm:w-72 rounded-full border border-slate-300 px-5 py-3 text-sm text-slate-800 placeholder-slate-400 outline-none transition focus:border-slate-500 focus:ring-1 focus:ring-slate-500"
                required
              />
              <button
                type="submit"
                className="rounded-full bg-[#D4FB20] px-8 py-3 text-sm font-semibold text-slate-900 transition hover:bg-[#c2ed00] active:scale-95"
              >
                Search
              </button>
            </form>
            <p className="text-[12px] text-[#242528] max-w-xs leading-normal">
              By subscribing, you agree to our Privacy Policy and consent to
              receive updates from our company.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 lg:col-span-7 pt-2">
            <div className="flex flex-col space-y-3.5 text-sm text-[#242528]">
              <Link href="/courses" className="hover:text-slate-900 transition">
                Featured Courses
              </Link>
              <Link
                href="/categories"
                className="hover:text-slate-900 transition"
              >
                Featured Categories
              </Link>
              <Link
                href="/business"
                className="hover:text-slate-900 transition"
              >
                Business
              </Link>
              <Link href="/it" className="hover:text-slate-900 transition">
                IT
              </Link>
              <Link href="/design" className="hover:text-slate-900 transition">
                Design
              </Link>
            </div>
            <div className="flex flex-col space-y-3.5 text-sm text-[#242528]">
              <Link
                href="/development"
                className="hover:text-slate-900 transition"
              >
                Development
              </Link>
              <Link
                href="/marketing"
                className="hover:text-slate-900 transition"
              >
                Marketing
              </Link>
              <Link
                href="/photography"
                className="hover:text-slate-900 transition"
              >
                Photography
              </Link>
              <Link href="/finance" className="hover:text-slate-900 transition">
                Finance
              </Link>
              <Link href="/sport" className="hover:text-slate-900 transition">
                Sport
              </Link>
            </div>
            <div className="flex flex-col space-y-3.5 text-sm text-[#242528]">
              <Link
                href="/become-a-creator"
                className="hover:text-slate-900 transition"
              >
                Become a Creator
              </Link>
              <Link
                href="/affiliate"
                className="hover:text-slate-900 transition"
              >
                Affiliate Program
              </Link>
              <Link href="/contact" className="hover:text-slate-900 transition">
                Contact
              </Link>
              <Link href="/help" className="hover:text-slate-900 transition">
                Help
              </Link>
              <Link href="/about" className="hover:text-slate-900 transition">
                About
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-16 border-t border-slate-200 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#242528]">
          <p>© 2023 ByteSpace. All rights reserved.</p>

          <div className="flex items-center space-x-6">
            <Link href="/privacy" className="hover:text-slate-800 transition">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-slate-800 transition">
              Terms of Service
            </Link>
            <Link href="/cookies" className="hover:text-slate-800 transition">
              Cookies Settings
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
