export default function Hero() {
  return (
    <div className="relative w-full min-h-screen flex items-end justify-start pb-24 pt-40">
      
      {/* BACKGROUND GRAPHIC */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/images/banner.webp" 
          alt="Outdoor Students Campus Layout" 
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/45 to-black/60"></div>
      </div>

      {/* CORE CONTENT CONTAINER */}
      <div className="w-full max-w-7xl mx-auto px-6 md:px-12 relative z-10 text-white font-sans">
        <div className="max-w-4xl">
          {/* Accent Tag */}
          <p className="text-[11px] uppercase tracking-[0.2em] font-extrabold text-white mb-4 flex items-center gap-2">
            Collaborative Learning
          </p>

          {/* Hero Main Heading */}
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-[1.15] mb-5">
            Human Development <br />
            And Learning Theories
          </h1>

          {/* Sub-text Paragraph */}
          <p className="text-xs md:text-[14px] text-gray-300 font-normal leading-relaxed max-w-2xl mb-8 opacity-90">
            Lorem ipsum dolor sit amet consectetur adipiscing elit. Pellentesque cursus utwir egestas <br />
            tristique, felis dui tincidunt metus, et mollis nulla sem in vehicula ipsum rutrum neque.
          </p>

          {/* Action Button with Clean Transitions */}
          <button className="bg-[#a30000] hover:bg-[#bd0000] text-white font-bold text-[11px] uppercase tracking-[0.15em] px-8 py-4 rounded-sm transform hover:-translate-y-0.5 transition-all duration-300 active:translate-y-0 shadow-xl">
            Explore Now
          </button>
        </div>
      </div>

    </div>
  );
}