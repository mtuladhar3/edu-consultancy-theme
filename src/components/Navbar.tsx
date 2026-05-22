"use client";
import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isPagesOpen, setIsPagesOpen] = useState(true);

  return (
    <header className="w-full absolute top-0 left-0 z-50 font-sans">
      {/* 1. TOP UTILITY BAR LAYER */}
      <div className="w-full">
        <div className="max-w-7xl mx-auto px-6 border-b-2 border-white/20 md:px-12 py-2.5 flex justify-between items-center text-neutral-50 text-[11px]">
          {/* Timing Info */}
          <div className="flex items-center space-x-2">
            <svg className="w-3.5 h-3.5 text-neutral-50" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>Timing: 6:00am - 2:00pm</span>
          </div>
          
          {/* Contact Details & Socials */}
          <div className="flex items-center space-x-6">
            <a href="tel:8881234567" className="hover:text-white transition-colors duration-300 flex items-center gap-1.5">
              <svg className="w-3 h-3 text-neutral-50" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg> 
              (888)123-5678
            </a>
            <a href="mailto:info@example.com" className="hover:text-white transition-colors duration-300 flex items-center gap-1.5">
              <svg className="w-3.5 h-3.5 text-neutral-50" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-15 4.5m19.5 0l-7.5 5.25-7.5-5.25" />
              </svg>
              info@example.com
            </a>
            <div className="flex items-center space-x-3 text-xs border-l border-white/20 pl-4">
              <a href="#" className="hover:text-white transition-colors duration-300">in</a>
              <a href="#" className="hover:text-white transition-colors duration-300">𝕏</a>
              <a href="#" className="hover:text-white transition-colors duration-300">▶</a>
            </div>
          </div>
        </div>
      </div>

      {/* 2. MAIN HEADER NAVIGATION */}
      <div className="w-full bg-transparent relative">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-5 flex justify-between items-center text-white">
          
          {/* LOGO AREA */}
          <div className="flex items-center space-x-3 cursor-pointer group">
            <div className="bg-[#a30000] text-white w-10 h-11 flex flex-col items-center justify-center font-serif font-bold text-xl rounded-b-md shadow-md border-t-2 border-white/20 transform group-hover:scale-105 transition-transform duration-300">
              <span>E</span>
              <span className="text-[6px] tracking-tighter -mt-2">★ ★</span>
            </div>
            <div>
              <div className="text-xl font-black tracking-wider leading-none group-hover:text-gray-200 transition-colors duration-300">EDUVOLV</div>
              <div className="text-[9px] font-bold tracking-widest text-gray-300 mt-0.5">PRIVATE SCHOOL</div>
            </div>
          </div>

          {/* MENU LINKS */}
          <nav className="hidden md:flex items-center space-x-7 text-[14px] font-medium tracking-wide">
            <Link href="#" className="hover:text-gray-300 flex items-center gap-1 transition-colors duration-300">Home <span className="text-[9px] text-neutral-50">▼</span></Link>
            <Link href="#" className="hover:text-gray-300 flex items-center gap-1 transition-colors duration-300">About <span className="text-[9px] text-neutral-50">▼</span></Link>
            
            {/* MEGA MENU LINK */}
            <div 
              className="relative cursor-pointer py-1"
              onMouseEnter={() => setIsPagesOpen(true)}
              onMouseLeave={() => setIsPagesOpen(false)}
            >
              <span className="text-white flex items-center gap-1 relative after:absolute after:bottom-[-24px] after:left-0 after:w-full after:h-[3px] after:bg-[#a30000] after:transition-all after:duration-300">
                Pages <span className="text-[9px] text-white">▲</span>
              </span>

              {/* MEGA MENU CONTAINER WITH SMOOTH OPEN ANIMATION */}
              <div className={`absolute top-[52px] left-1/2 -translate-x-[45%] w-[800px] bg-white text-gray-800 p-9 rounded-b-md shadow-2xl grid grid-cols-4 gap-6 z-50 transition-all duration-300 ease-in-out ${
                isPagesOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-2"
              }`}>
                {/* Column 1 */}
                <div className="flex flex-col space-y-3.5 text-[13px] font-semibold text-slate-700">
                  {["About One", "About Two", "About Three", "Academics One", "Academics Two", "Academics Three", "Admission"].map((item) => (
                    <Link key={item} href="#" className="hover:text-primary hover:translate-x-1 transition-all duration-200">{item}</Link>
                  ))}
                </div>

                {/* Column 2 */}
                <div className="flex flex-col space-y-3.5 text-[13px] font-semibold text-slate-700">
                  {["Campus Life", "Teachers", "Tuition Fees", "Blog One", "Blog Two", "Blog Three", "Blog Details"].map((item) => (
                    <Link key={item} href="#" className="hover:text-[#a30000] hover:translate-x-1 transition-all duration-200">{item}</Link>
                  ))}
                </div>

                {/* Column 3 */}
                <div className="flex flex-col space-y-3.5 text-[13px] font-semibold text-slate-700">
                  {["Contact One", "Contact Two", "Contact Three", "Password Protected", "404"].map((item) => (
                    <Link key={item} href="#" className="hover:text-[#a30000] hover:translate-x-1 transition-all duration-200">{item}</Link>
                  ))}
                </div>

                {/* Image Showcase */}
                <div className="relative rounded-lg overflow-hidden h-[165px] shadow-sm border border-gray-100 group/img">
                  <img 
                    src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=400" 
                    alt="Students in classroom"
                    className="w-full h-full object-cover transform group-hover/img:scale-105 transition-transform duration-500" 
                  />
                </div>
              </div>
            </div>

            <Link href="#" className="hover:text-gray-300 flex items-center gap-1 transition-colors duration-300">Shop <span className="text-[9px] text-neutral-50">▼</span></Link>
            <Link href="#" className="hover:text-gray-300 flex items-center gap-1 transition-colors duration-300">Contact <span className="text-[9px] text-neutral-50">▼</span></Link>
          </nav>

          {/* CTA & LINE-ART CART ICON */}
          <div className="flex items-center space-x-6">
            <Link href="#" className="bg-[#a30000] hover:bg-[#bd0000] text-white text-xs font-bold uppercase tracking-widest px-6 py-3.5 rounded-sm shadow-md transform hover:-translate-y-0.5 transition-all duration-300 active:translate-y-0">
              Admission
            </Link>
            
            {/* Clean Minimalist Line Shopping Bag */}
            <div className="relative cursor-pointer group py-1">
              <svg className="w-5 h-5 text-white group-hover:text-gray-300 transition-colors duration-300" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007z" />
              </svg>
              <span className="absolute -top-1.5 -right-2.5 bg-[#a30000] group-hover:bg-[#bd0000] text-[9px] font-bold text-white rounded-full w-4 h-4 flex items-center justify-center border border-[#11161b] transition-colors duration-300">
                0
              </span>
            </div>
          </div>

        </div>
      </div>
    </header>
  );
}