import React from 'react'

export default function Content() {
    return (
      <div className='bg-zinc-900 py-6 h-full w-full flex flex-col justify-end'>
          
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
          <div className='flex px-6 md:px-12 flex-col md:flex-row bottom-0 justify-between items-start gap-4 overflow-hidden'>
              <h1 className='text-[8vw] font-extrabold md:text-[8vw] uppercase leading-tight'>SleekFrameStudios
              </h1>
              <p className='font-extralight'>©copyright 2025</p>
          </div>
      )
  }
  
  const Nav = () => {
      return (
          <div className='flex shrink-0 gap-10 md:gap-20 px-6 md:px-12 mb-10 md:mb-12'>
              <div className='flex flex-col font-light gap-2'>
                  <h3 className='mb-2 hover-btn uppercase w-fit text-[#ffffff80]'>About</h3>
                  <p className='font-extralight'>Home</p>
                  <p className='font-extralight'>Projects</p>
                  <p className='font-extralight'>Our Mission</p>
              </div>
              <div className='flex flex-col gap-2'>
                  <h3 className='mb-2 hover-btn uppercase w-fit text-[#ffffff80]'>Contact</h3>
                  <p className='font-extralight'>+65 9989298981</p>
                  <p className='font-extralight'>yo@gmail.com</p>
                  <p className='font-extralight'>Linkedin</p>
                  <p className='font-extralight'>Instagram</p>
              </div>
          </div>
      )
  }