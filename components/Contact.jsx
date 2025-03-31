import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { LiaLongArrowAltRightSolid } from "react-icons/lia";

const words = ["project", "idea", "vision", "success"];

export default function Contact() {
    const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const wordContainerRef = useRef(null);

  const splitWordToSpans = (word) => {
    return word.split("").map((char, idx) => (
      <span key={idx} className="inline-block">
        {char}
      </span>
    ));
  };

  useEffect(() => {
    const animateWordChange = () => {
      const letters = wordContainerRef.current.children;

      // Scatter out letters randomly
      gsap.to(letters, {
        x: () => gsap.utils.random(-50, 50),
        y: () => gsap.utils.random(-50, 50),
        rotation: () => gsap.utils.random(-90, 90),
        opacity: 0,
        duration: 0.4,
        ease: "power2.in",
        stagger: 0.04,
        onComplete: () => {
          const nextIndex = (currentWordIndex + 1) % words.length;
          setCurrentWordIndex(nextIndex);

          setTimeout(() => {
            const nextLetters = wordContainerRef.current.children;

            // Set initial scattered state
            gsap.set(nextLetters, {
              x: () => gsap.utils.random(-60, 60),
              y: () => gsap.utils.random(-60, 60),
              rotation: () => gsap.utils.random(-100, 100),
              opacity: 0,
            });

            // Animate them back in
            gsap.to(nextLetters, {
              x: 0,
              y: 0,
              rotation: 0,
              opacity: 1,
              duration: 0.6,
              ease: "power2.out",
              stagger: 0.05,
            });
          }, 10);
        },
      });
    };

    const interval = setInterval(animateWordChange, 3000);
    return () => clearInterval(interval);
  }, [currentWordIndex]);
  return (
    <main className="h-screen bg-black text-white py-8 flex flex-col px-12">
      <div className="text-6xl md:text-[10vw] font-variable font-light tracking-tight leading-[0.9]">
        <p>let’s discuss your</p>
        <p>
          next <LiaLongArrowAltRightSolid className="inline-block text-slate-100 text-[10vw] ml-2" />{" "}
          <span
            ref={wordContainerRef}
            className="inline-block whitespace-nowrap ml-2"
          >
            {splitWordToSpans(words[currentWordIndex])}
          </span>
        </p>
      </div>

      <div className="mt-20 text-xl flex flex-col font-variable justify-center items-center text-white/70">
        <p className="shine-text">Big ambitions?</p>
        <p className="shine-text">We match the energy.</p>
      </div>

      <div className="mt-10 flex flex-col justify-center items-center">
        <button className="fancy-btn px-6 py-4 bg-white font-variable text-black font-semibold rounded-sm tracking-wider text-sm uppercase hover:bg-gray-200 transition-all">
          CONTACT US
        </button>
      </div>
    </main>
  );
}
