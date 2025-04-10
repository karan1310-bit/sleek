'use client'

import gsap from 'gsap/all';
import React, { useEffect, useRef, useState } from 'react'
import { useWindowScroll } from 'react-use';

const Navbar = () => {

    const navContainerRef = useRef(null);

    const { y: currentScrollY } = useWindowScroll();
    const [isNavVisible, setIsNavVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    useEffect(() => {
        if (currentScrollY === 0) {
          setIsNavVisible(true);
          navContainerRef.current.classList.remove("floating-nav");
        } else if (currentScrollY > lastScrollY) {
          setIsNavVisible(false);
          navContainerRef.current.classList.add("floating-nav");
        } else if (currentScrollY < lastScrollY) {
          setIsNavVisible(true);
          navContainerRef.current.classList.add("floating-nav");
        }
    
        setLastScrollY(currentScrollY);
      }, [currentScrollY, lastScrollY]);
    
      useEffect(() => {
        gsap.to(navContainerRef.current, {
          y: isNavVisible ? 0 : -100,
          opacity: isNavVisible ? 1 : 0,
          duration: 0.2,
        });
      }, [isNavVisible]);

    const navItems = ["Home", "Services", "About", "Contact"]

  return (
    <div
      ref={navContainerRef}
      className="fixed inset-x-0 top-2 sm:top-2 z-40 h-12 sm:h-16 border-none transition-all duration-700 sm:inset-x-6"
    >
      <header className="absolute top-1/2 w-full -translate-y-1/2">
    <nav className='flex justify-between items-center text-white py-4 md:py-6 px-6 md:px-6 font-variable'>
        <a href='#home'><h2 className='font-medium text-base sm:text-lg'>SleekFrame Studio</h2></a>
            <div className="hidden md:flex h-full items-center gap-1">
              {navItems.map((item, index) => (
                <a
                  key={index}
                  href={`#${item.toLowerCase()}`}
                  className="font-normal nav-hover-btn text-base"
                >
                  {item}
                </a>
              ))}
        </div>
        <a href='mailto:contact.sleekframe@gmail.com'>
        <h2 className='font-normal text-sm sm:text-base nav-hover-btn'>Let's Talk <span className="ml-2 group-hover:ml-3 transition-all">→</span></h2>
        </a>
    </nav>
    </header>
    </div>
  )
}

export default Navbar