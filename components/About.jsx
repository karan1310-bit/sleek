"use client";
import Curve from "./Curve";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const lineRefs = useRef([]);
  const containerRef = useRef(null);

  const h1Lines = [
    "We combine the power of strategy, design, and innovation to",
    "transform visionary ideas into extraordinary brands. Explore our",
    "approach.",
  ];

  const h2Line = "Building tomorrow's success, today.";

  const pLines = [
    "Since our founding, we've been recognized globally for helping visionaries build market-defining brands that drive sustainable growth and shape industry narratives.",
    "We launched our Strategic Partnership Program to provide dedicated support to forward-thinking entrepreneurs.",
    "We collaborate with a select group of clients annually, ensuring each receives the focused attention and strategic guidance they deserve.",
  ];

  useEffect(() => {
    if (!containerRef.current) return;

    gsap.from(lineRefs.current, {
      y: 100,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
      stagger: 0.2,
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%",
        toggleActions: "play none none none",
      },
    });
  }, []);
  return (
    <div
      className="max-h-screen mt-2 sm:mt-12 text-white px-6 lg:p-8"
      ref={containerRef}
    >
      <div className="w-full md:px-12 relative mx-auto font-variable">
        {/* H1 Lines */}
        {h1Lines.map((line, index) => (
          <div key={index} className="overflow-hidden">
            <h1
              className="text-3xl md:text-5xl lg:text-5xl font-light leading-none"
              ref={(el) => (lineRefs.current[index] = el)}
            >
              {line}
            </h1>
          </div>
        ))}

        <div className="sm:hidden mt-8 h-[1px] w-full mx-auto bg-white"></div>
        <Curve />

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-24 mt-8 sm:mt-0">
          {/* Left Column */}
          <div className="overflow-hidden">
            <h2
              className="text-xl md:text-2xl font-light sm:mb-8"
              ref={(el) => (lineRefs.current[h1Lines.length] = el)}
            >
              {h2Line}
            </h2>
          </div>

          {/* Right Column */}
          <div className="space-y-7">
            {pLines.map((line, index) => (
              <div key={index} className="overflow-hidden">
                <p
                  className="text-gray-300 text-sm md:text-base"
                  ref={(el) =>
                    (lineRefs.current[h1Lines.length + 1 + index] = el)
                  }
                >
                  {line}
                </p>
              </div>
            ))}

            <div className="overflow-hidden">
              <a
                href="#learn-more"
                className="flex items-center w-fit group text-sm md:text-base hover-btn"
                ref={(el) =>
                  (lineRefs.current[h1Lines.length + 1 + pLines.length] = el)
                }
              >
                Learn more
                <span className="ml-2 group-hover:ml-3 transition-all">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
