'use client'

import About from "@/components/About";
import Hero from "@/components/Hero";
import Loader from "@/components/Loader";
import Navbar from "@/components/Navbar";
import Lenis from "lenis";
import { useEffect } from "react";

export default function Home() {

  useEffect(() => {
    // Initialize Lenis
    const lenis = new Lenis();

    lenis.on("scroll", (e) => {
      console.log(e);
    });

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
    }, 4500);
  }, [])

  return (
    <div className="container h-screen w-full bg-black text-white relative">
      <Loader />
      <Navbar />
      <Hero />
      <About />
      <div className="h-screen w-full bg-black"></div>
    </div>
  );
}
