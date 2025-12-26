import dynamic from "next/dynamic";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Footer from "@/components/layout/Footer";

// Lazy load below-the-fold sections for better initial page load
const Experience = dynamic(() => import("@/components/sections/Experience"));
const Education = dynamic(() => import("@/components/sections/Education"));
const Certifications = dynamic(
  () => import("@/components/sections/Certifications")
);
const Skills = dynamic(() => import("@/components/sections/Skills"));
const Contact = dynamic(() => import("@/components/sections/Contact"));

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Experience />
      <Education />
      <Certifications />
      <Skills />
      <Contact />
      <Footer />
    </>
  );
}
