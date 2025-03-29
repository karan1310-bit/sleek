import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
const Hero = () => {
  const lineRefs = useRef([]);
  const heroRef = useRef(null);

  useEffect(() => {
    gsap.from(lineRefs.current, {
      y: 100,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
      stagger: 0.1,
      delay: 4.2,
    });

    // Animate hero word (SleekFrameStudios)
    gsap.from(heroRef.current, {
      y: 100,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
      delay: 4.3, // optional delay if you want it after the lines
    });
  }, []);

  const h3Lines = [
    "At SleekFrameStudios, we ",
    "create immersive digital ",
    "experiences that bring ",
    "purposeful brands to life.",
  ];

  const pLines = [
    "As a boutique production studio specializing in design,",
    "motion, and creative technology, we continuously push",
    "the boundaries of digital craft to elevate",
    "modern advertising and campaigns.",
  ];

  return (
    <div className="min-h-screen w-full relative overflow-hidden font-variable">
      <div className="w-full px-[9%] pt-40 md:pt-32 md:px-[22%]">
        <div className="w-[90%] md:w-[41%]">
          {/* H3 Lines */}
          {h3Lines.map((line, index) => (
            <div key={index} className="overflow-hidden">
              <h3
                className="text-4xl md:text-3xl leading-tight"
                ref={(el) => (lineRefs.current[index] = el)}
              >
                {line}
              </h3>
            </div>
          ))}
          {/* Paragraph Lines */}
          {pLines.map((line, index) => (
            <div
              key={index + h3Lines.length}
              className={`overflow-hidden ${index === 0 ? "mt-3" : ""}`} // 👈 only line 2 gets margin
            >
              <p
                className="text-lg md:text-sm font-normal leading-tight"
                ref={(el) => (lineRefs.current[index + h3Lines.length] = el)}
              >
                {line}
              </p>
            </div>
          ))}

          {/* Scroll line */}
          <div className="overflow-hidden mt-6">
            <p
              ref={(el) =>
                (lineRefs.current[h3Lines.length + pLines.length] = el)
              }
            >
              Scroll |
            </p>
          </div>
        </div>
      </div>

      <div id="hero" className="w-full absolute bottom-8 sm:bottom-2 left-0">
        <h1
          className="overflow-hidden text-[12vw] px-6 font-normal tracking-tight leading-none whitespace-nowrap"
          ref={heroRef}
        >
          SleekFrameStudios
        </h1>
      </div>
    </div>
  );
};

export default Hero;
