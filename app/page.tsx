import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import Features from "@/components/sections/Features";
import Trust from "@/components/sections/Trust";
import Waitlist from "@/components/sections/Waitlist";
import Newsletter from "@/components/sections/Newsletter";

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#050816] text-white">
      <Navbar />

      <Hero />

      <Features />

      <Trust />

      <Waitlist />

      <Newsletter />
    </main>
  );
}
