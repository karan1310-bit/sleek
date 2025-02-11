import { useGSAP } from '@gsap/react'
import gsap from 'gsap/all'
import React, { useRef } from 'react'

const Loader = () => {

    const loaderRef = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline();

    tl.from("#loader h3", {
      duration: 1.5,
      opacity: 0,
      delay: 0.1,
      x: 80,
      stagger: 0.1,
      ease: "power2.out",
    })
      .to("#loader h3", {
        duration: 1.5,
        opacity: 0,
        x: -80,
        stagger: 0.1,
        ease: 'power2.inOut',
      })
      .to("#loader", {
        duration: 1,
        opacity: 0,
        onComplete: () => {
          if (loaderRef.current) {
            loaderRef.current.style.display = "none";
          }
        },
      });
  }, []);

  return (
    <div
      id="loader"
      ref={loaderRef}
      className="h-screen w-full flex justify-center items-center gap-2 bg-black font-['Satoshi_Variable'] fixed top-0 z-50"
    >
      <h3 className="text-xl sm:text-2xl text-white">Next-gen</h3>
      <h3 className="text-xl sm:text-2xl text-white">Brands,</h3>
      <h3 className="text-xl sm:text-2xl text-white">Here Today.</h3>
    </div>
  )
}

export default Loader;