import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <main className="relative min-h-screen w-full bg-neutral-950 overflow-x-hidden">
      <Navbar />
      <Hero />
    </main>
  );
}
