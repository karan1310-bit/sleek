'use client'

import About from "@/components/About";
import Cursor from "@/components/Cursor";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Preloader from "@/components/Preloader";
import Services from "@/components/Services";
import Showcase from "@/components/Showcase";
import Lenis from "lenis";
import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Heading from "@/components/projects/Heading";
import Contact from "@/components/Contact";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {

  useEffect(() => {
    // Initialize Lenis
    const lenis = new Lenis();

    // Use requestAnimationFrame to continuously update the scroll
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  });

  useEffect(() => {
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 3700);
  }, [])

  return (
  
    <div className="min-h-screen w-full bg-black text-white relative">
      <Cursor />
      <Preloader />
      <Navbar />
      <Hero />
      <About />
      <Heading />
      <Showcase />
      <Services />
      <Contact />
      <Footer />
    </div>
  );
}
