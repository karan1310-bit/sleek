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
import { useLayoutEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

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

  const containerRef = useRef(null);
  const heroRef = useRef(null);
  const aboutRef = useRef(null);
  const servicesRef = useRef(null);

  useLayoutEffect(() => {
    if (!containerRef.current || !heroRef.current || !aboutRef.current) return;

    // Animation when reaching the Hero section
    gsap.timeline({
      scrollTrigger: {
        trigger: heroRef.current, // Hero Section as Trigger
        start: "top 50%",
        end: "top 20%",
        scrub: 2,
      },
    }).to(containerRef.current, {
      backgroundColor: "#000",
      color: "#fff",
    });

    // Animation when reaching the About section
    gsap.timeline({
      scrollTrigger: {
        trigger: aboutRef.current, // About Section as Trigger
        start: "top 50%",
        end: "top 20%",
        scrub: 2,
      },
    }).to(containerRef.current, {
      backgroundColor: "#F5F5F5",
      color: "#000",
    });

    gsap.timeline({
      scrollTrigger: {
        trigger: servicesRef.current, // Hero Section as Trigger
        start: "top 50%",
        end: "top 20%",
        scrub: 2,
      },
    }).to(containerRef.current, {
      backgroundColor: "#000",
      color: "#fff",
    });

    return () => ScrollTrigger.getAll().forEach(trigger => trigger.kill());
  }, []);

  return (
  
    <div ref={containerRef} className="container min-h-screen w-full bg-black text-white relative transition-colors ease-linear duration-100">
      <Cursor />
      <Preloader />
      <Navbar />
      <div ref={heroRef}>
        <Hero />
      </div>
      <About />
      <div ref={aboutRef}>
      <Showcase />
      </div>
      <div ref={servicesRef}>
      <Services />
      </div>
      <Footer />
    </div>
  );
}
