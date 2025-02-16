'use client'

import About from "@/components/About";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Loader from "@/components/Loader";
import Navbar from "@/components/Navbar";
import Services from "@/components/Services";
import Showcase from "@/components/Showcase";
import Lenis from "lenis";
import { useEffect } from "react";

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
    }, 4100);
  }, [])

  return (
    <div className="container h-screen w-full bg-black text-white relative">
      <Loader />
      <Navbar />
      <Hero />
      <About />
      <Showcase />
      <Services />
      <Footer />
    </div>
  );
}
