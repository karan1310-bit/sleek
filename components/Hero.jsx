import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

const textArray = "SleekFrameStudios".split(""); // Split text into an array of letters

const Hero = () => {
  const heroRef = useRef(null);

  useGSAP(() => {
    gsap.from("#hero h1 span", {
      opacity: 0,
      duration: 0.1,
      y: 30, // Animate each letter from y: 100
      stagger: 0.06, // Animate one by one
      ease: "power3.out",
      delay: 4,
    });
  }, []);

  return (
    <div className='min-h-screen w-full relative overflow-hidden font-variable'>
      <div className="w-full px-[9%] pt-40 md:pt-32 md:px-[22%]">
        <div className="w-[90%] md:w-[41%]">
          <h3 className="text-4xl md:text-3xl">
          At SleekFrameStudios, we create immersive digital experiences that bring purposeful brands to life.
          </h3>
          <p className="text-lg w-[100%] md:leading-5.5 md:text-sm mt-8 font-normal">
          As a boutique production studio specializing in design, motion, and creative technology, we continuously push the boundaries of digital craft to elevate modern advertising and campaigns.
          </p>
          <p className="mt-6">Scroll</p>
        </div>
      </div>
      <div id="hero" className="w-full absolute bottom-8 sm:bottom-2 left-0">
        <h1 className="overflow-hidden text-7xl px-2 sm:p-1 sm:text-[12rem] font-normal tracking-tight leading-none whitespace-nowrap">
          {textArray.map((letter, index) => (
            <span key={index} className="inline-block">
              {letter}
            </span>
          ))}
        </h1>
      </div>
    </div>
  );
};

export default Hero;
