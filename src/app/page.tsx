import { FeaturedCourses } from "@/components/FeaturedCourses";
import HeroSection from "@/components/HeroSection";
import ReviewCards from "@/components/ReviewCards";
import { WhyChoseUs } from "@/components/WhyChoseUs";
import Image from "next/image";

export default function Home() {
  return (
      <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
       <HeroSection />
       <FeaturedCourses/>
       <WhyChoseUs />
       <ReviewCards />
       
      </main>
  );
}
