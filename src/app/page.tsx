import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Portfolio } from "@/components/sections/Portfolio";
import { Services } from "@/components/sections/Services";
import { Process } from "@/components/sections/Process";
import { BeforeAfter } from "@/components/sections/BeforeAfter";
import { Testimonials } from "@/components/sections/Testimonials";
import { LeadForm } from "@/components/sections/LeadForm";
import { FAQ } from "@/components/sections/FAQ";
import { FinalCTA } from "@/components/sections/FinalCTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Portfolio />
      <Services />
      <Process />
      <BeforeAfter
        beforeImage="/images/projects/sr5.webp"
        afterImage="/images/projects/penthouse-1.jpg"
        label="Palm Jumeirah Villa — 8 Month Transformation"
      />
      <Testimonials />
      <LeadForm />
      <FAQ />
      <FinalCTA />
    </>
  );
}
