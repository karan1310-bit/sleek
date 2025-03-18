"use client";
import { useEffect, useState, useRef } from "react";
import gsap from "gsap";

const Preloader = () => {
  const [isVisible, setIsVisible] = useState(true);
  const preloaderRef = useRef(null);

  useEffect(() => {
    setTimeout(() => {
      gsap.to(preloaderRef.current, {
        opacity: 0,
        duration: 1,
        ease: "power2.out",
        onComplete: () => setIsVisible(false),
      });
    }, 3700);
  }, []);

  return (
    isVisible && (
      <div ref={preloaderRef} className="fixed inset-0 flex items-center justify-center bg-black z-50">
        <svg viewBox="0 0 1320 300" className="w-full h-full">
          <text x="50%" y="50%" dy=".35em" textAnchor="middle" className="uppercase animate-stroke">
            sleekframe
          </text>
        </svg>
        <style>
          {`
            @import url('https://fonts.googleapis.com/css2?family=Russo+One&display=swap');
            svg {
              font-family: 'Russo One', sans-serif;
            }
            text {
              font-size: 6rem;
              text-transform: uppercase;
              animation: strokeAnimation 4s infinite alternate;
              stroke-width: 2;
              stroke: white;
              fill: transparent;
            }
            @keyframes strokeAnimation {
              0% {
                fill: transparent;
                stroke: rgba(255, 255, 255, 1);
                stroke-dashoffset: 25%;
                stroke-dasharray: 0 50%;
                stroke-width: 2;
              }
              70% {
                fill: transparent;
                stroke: rgba(255, 255, 255, 1);
              }
              80% {
                fill: transparent;
                stroke: rgba(255, 255, 255, 1);
                stroke-width: 3;
              }
              100% {
                fill: rgba(255, 255, 255, 1);
                stroke: rgba(255, 255, 255, 0);
                stroke-dashoffset: -25%;
                stroke-dasharray: 50% 0;
                stroke-width: 0;
              }
            }
          `}
        </style>
      </div>
    )
  );
};

export default Preloader;