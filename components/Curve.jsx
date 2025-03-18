import React from 'react'
import { useRef, useEffect } from 'react';

const Curve = () => {

    const path = useRef(null);
    const animationRef = useRef(null);
    const progressRef = useRef(0);
    const timeRef = useRef(Math.PI / 2);
    const xRef = useRef(0.5);
  
    useEffect(() => {
      // Set initial path on mount
      const initialPath = calculatePath(0);
      if (path.current) {
        path.current.setAttribute('d', initialPath);
      }
  
      return () => {
        if (animationRef.current) {
          cancelAnimationFrame(animationRef.current);
        }
      };
    }, []);
  
    const calculatePath = (progress) => {
      const width = window.innerWidth * 0.7;
      return `M0 50 Q${width * xRef.current} ${50 + progress}, ${width} 50`;
    };
  
    const setPath = (progress) => {
      if (!path.current) return;
      const newPath = calculatePath(progress);
      path.current.setAttribute('d', newPath);
    };
  
    const lerp = (x, y, a) => x * (1 - a) + y * a;
  
    const manageMouseEnter = () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
        resetAnimation();
      }
    };
  
    const manageMouseMove = (e) => {
      const { movementY, clientX } = e;
      const pathBound = path.current?.getBoundingClientRect();
      if (!pathBound) return;
  
      xRef.current = (clientX - pathBound.left) / pathBound.width;
      progressRef.current += movementY;
      setPath(progressRef.current);
    };
  
    const manageMouseLeave = () => {
      animateOut();
    };
  
    const animateOut = () => {
      const newProgress = progressRef.current * Math.sin(timeRef.current);
      progressRef.current = lerp(progressRef.current, 0, 0.025);
      timeRef.current += 0.2;
      setPath(newProgress);
  
      if (Math.abs(progressRef.current) > 0.1) {
        animationRef.current = requestAnimationFrame(animateOut);
      } else {
        resetAnimation();
      }
    };
  
    const resetAnimation = () => {
      timeRef.current = Math.PI / 2;
      progressRef.current = 0;
      setPath(0);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
        animationRef.current = null;
      }
    };
  
    return (
      <div className="relative hidden sm:block sm:w-[87vw] lg:mx-auto lg:w-[84vw] h-[6vh] my-8">
        {/* Interaction area */}
        <div 
          onMouseEnter={manageMouseEnter}
          onMouseMove={manageMouseMove}
          onMouseLeave={manageMouseLeave}
          className="absolute inset-0 cursor-pointer z-10"
        />
        
        {/* SVG container */}
        <svg 
          className="w-full h-full" 
          viewBox="0 0 1000 100" 
          preserveAspectRatio="none"
        >
          <path
            ref={path}
            className="stroke-[3] stroke-white fill-none"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    );
  };

export default Curve