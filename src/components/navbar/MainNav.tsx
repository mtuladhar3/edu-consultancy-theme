"use client";

import { useState } from "react";
import Link from "next/link";
import MegaMenu from "./MegaMenu";

export default function MainNav() {
  const [open, setOpen] = useState(false);

  return (
    <div className="w-full relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-5 flex justify-between items-center text-white">
        {/* LOGO */}
        <div className="font-black text-xl">EDUVOLV</div>

        {/* LINKS */}
        <nav className="hidden md:flex items-center space-x-7 text-sm">
          <Link href="#">Home</Link>
          <Link href="#">About</Link>

          {/* MEGA MENU */}
          <div
            className="relative"
            onMouseEnter={() => setOpen(true)}
            onMouseLeave={() => setOpen(false)}
          >
            <span className="cursor-pointer">Pages</span>
            <MegaMenu open={open} />
          </div>

          <Link href="#">Shop</Link>
          <Link href="#">Contact</Link>
        </nav>

        {/* CTA */}
        <button className="bg-[#a30000] px-5 py-2 text-sm font-bold">
          Admission
        </button>
      </div>
    </div>
  );
}
