"use client";

import Image from "next/image";
import { useState } from "react";

const navItems = [
  "About Us",
  "Our Technology",
  "Product Overview",
  "Our Solution",
  "Channel Partner",
  "Our Team",
  "Career",
  "Contact Us",
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="border-b border-black/10">
      <div className="section-width flex items-center justify-between py-4">
        <div className="flex items-center gap-3">
          <Image
            src="/logo.svg"
            alt="Easy Lane"
            width={100}
            height={100}
            className="h-12 w-auto"
            priority
          />
        </div>
        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center text-[#1E1E2F] lg:hidden"
          aria-label="Toggle navigation"
          aria-expanded={isOpen}
          onClick={() => setIsOpen((open) => !open)}
        >
          <span className="relative block h-5 w-6">
            <span
              className={`absolute left-0 top-0 h-0.5 w-6 bg-current transition ${
                isOpen ? "translate-y-2.5 rotate-45" : ""
              }`}
            />
            <span
              className={`absolute left-0 top-2.5 h-0.5 w-6 bg-current transition ${
                isOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`absolute left-0 top-5 h-0.5 w-6 bg-current transition ${
                isOpen ? "-translate-y-2.5 -rotate-45" : ""
              }`}
            />
          </span>
        </button>
        <nav className="hidden items-center gap-x-6 text-[13px] font-medium text-[#1E1E2F] lg:flex lg:text-sm">
          {navItems.map((item) => (
            <a
              key={item}
              href="#"
              className="transition-colors hover:text-[#6A5AE0]"
            >
              {item}
            </a>
          ))}
        </nav>
      </div>
      <div className={`lg:hidden ${isOpen ? "block" : "hidden"}`}>
        <nav className="section-width flex flex-col gap-3 pb-4 text-sm font-medium text-[#1E1E2F]">
          {navItems.map((item) => (
            <a
              key={item}
              href="#"
              className="transition-colors hover:text-[#6A5AE0]"
              onClick={() => setIsOpen(false)}
            >
              {item}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
