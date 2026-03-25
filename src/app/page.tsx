import { Hero } from "@/components/sections/Hero";
import { TrustBar } from "@/components/sections/TrustBar";
import { Services } from "@/components/sections/Services";
import { Portfolio } from "@/components/sections/Portfolio";
import { Process } from "@/components/sections/Process";
import { Testimonials } from "@/components/sections/Testimonials";
import { About } from "@/components/sections/About";
import { FAQ } from "@/components/sections/FAQ";
import { TrustGuarantees } from "@/components/sections/TrustGuarantees";
import { FinalCTA } from "@/components/sections/FinalCTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustBar />
      <Services />
      <Portfolio />
      <Process />
      <Testimonials />
      <About />
      <FAQ />
      <TrustGuarantees />
      <FinalCTA />
    </>
  );
}
