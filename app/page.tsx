import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import Stats from "@/components/sections/Stats";
import Features from "@/components/sections/Features";

export default function Home() {
  return (
    <main className="overflow-x-hidden bg-[#050816] text-white">
      <Navbar />
      <Hero />
      <Stats />
      <Features />
    </main>
  );
}
