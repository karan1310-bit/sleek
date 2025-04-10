import React from 'react'
import Marquee from './Marquee'
import Link from 'next/link'

export default function Content() {
    return (
      <div className='bg-zinc-900 py-6 h-full w-full flex flex-col justify-end'>
          <Marquee />
          <Section1 />
          <Section2 />
      </div>
    )
  }
  
  const Section1 = () => {
      return (
          <div>
              <Nav />
          </div>
      )
  }
  
  const Section2 = () => {
    
      return (
          <div className='flex px-6 md:px-12 lg:px-16 flex-col md:flex-row bottom-0 justify-between items-start gap-2 sm:gap-4 overflow-hidden'>
              <h1 className='text-[8vw] md:text-[7vw] font-extrabold lg:text-[8.5vw] uppercase leading-tight'>SleekFrameStudio
              </h1>
              <p className='font-extralight'>©copyright 2025</p>
          </div>
      )
  }
  
  const Nav = () => {
      return (
          <div className='flex shrink-0 font-variable gap-10 md:gap-20 px-6 md:px-12 lg:px-16 mb-12 md:mb-8'>
              <div className='flex flex-col font-light gap-1 sm:gap-2'>
                  <h3 className='mb-2 hover-btn uppercase w-fit text-[#ffffff80]'>About</h3>
                  <a href='#home'><p className='font-extralight'>Home</p></a>
                  <a href='#projects'><p className='font-extralight'>Projects</p></a>
                  <a href='#about'><p className='font-extralight'>Our Mission</p></a>
              </div>
              <div className='flex flex-col gap-1 sm:gap-2'>
                  <h3 className='mb-2 hover-btn uppercase w-fit text-[#ffffff80]'>Contact</h3>
                  <p className='font-extralight'>+1 (778) 961-0904</p>
                  <p className='font-extralight'>contact.sleekframe@gmail.com</p>
                  <p className='font-extralight'>Surrey BC</p>
                  <p className='font-extralight'>Linkedin</p>
                  <p className='font-extralight'>Instagram</p>
              </div>
          </div>
      )
  }