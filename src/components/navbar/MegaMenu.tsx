"use client";

import { pagesMenu } from "@/data/navData";
import Link from "next/link";

type Props = {
  open: boolean;
};

export default function MegaMenu({ open }: Props) {
  return (
    <div
      className={`absolute top-[52px] left-1/2 -translate-x-1/2 w-[800px] bg-white text-gray-800 p-9 rounded-b-md shadow-2xl grid grid-cols-4 gap-6 z-50 transition-all duration-300 ${
        open
          ? "opacity-100 visible translate-y-0"
          : "opacity-0 invisible -translate-y-2"
      }`}
    >
      {/* Column 1 */}
      <div className="flex flex-col space-y-3 text-[13px] font-semibold">
        {pagesMenu.col1.map((item) => (
          <Link key={item} href="#" className="hover:text-[#a30000]">
            {item}
          </Link>
        ))}
      </div>

      {/* Column 2 */}
      <div className="flex flex-col space-y-3 text-[13px] font-semibold">
        {pagesMenu.col2.map((item) => (
          <Link key={item} href="#" className="hover:text-[#a30000]">
            {item}
          </Link>
        ))}
      </div>

      {/* Column 3 */}
      <div className="flex flex-col space-y-3 text-[13px] font-semibold">
        {pagesMenu.col3.map((item) => (
          <Link key={item} href="#" className="hover:text-[#a30000]">
            {item}
          </Link>
        ))}
      </div>

      {/* Image */}
      <div className="h-[165px] overflow-hidden rounded-md">
        <img
          src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=400"
          className="w-full h-full object-cover"
          alt="menu"
        />
      </div>
    </div>
  );
}
