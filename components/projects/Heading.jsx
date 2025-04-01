'use client';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Heading = () => {
  const lineRefs = useRef([]);
  const containerRef = useRef(null);

  const h1Lines = [
    "Projects Showcase"
  ];

  const pLines = [
    "From thoughtful design to seamless development, we turn ideas into digital experiences.",
    "Explore the projects that bring bold ideas to life.",
  ];

  useEffect(() => {
    gsap.from(lineRefs.current, {
      y: 100,
      opacity: 0,
      duration: 1,
      ease: 'power3.out',
      stagger: 0.2,
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 80%',
        toggleActions: 'play none none none',
      },
    });
  }, []);

  return (
    <div ref={containerRef} className="w-full mt-12 px-6 md:px-20 sm:mt-12">
      {/* h1 */}
      {h1Lines.map((line, index) => (
        <div key={index} className="overflow-hidden">
          <h1
            className="text-3xl md:text-5xl text-left font-light mb-2 font-variable"
            ref={(el) => (lineRefs.current[index] = el)}
          >
            {line}
          </h1>
        </div>
      ))}

      {/* paragraph lines */}
      {pLines.map((line, index) => (
        <div key={index + h1Lines.length} className="overflow-hidden">
          <p
            className="font-variable text-gray-300 text-sm md:text-base"
            ref={(el) =>
              (lineRefs.current[index + h1Lines.length] = el)
            }
          >
            {line}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Heading;