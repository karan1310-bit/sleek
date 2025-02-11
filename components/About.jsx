import React from 'react'
import Curve from './Curve'

const About = () => {
  return (
    <div className="h-screen bg-black mt-8 sm:mt-12 text-white p-8">
        
    <div className="max-w-7xl mx-auto font-['Satoshi_Variable']">
        <h1 className="text-3xl md:text-5xl lg:text-5xl font-light leading-none mb-12 sm:mb-12">
          We combine the power of strategy, design, and innovation to transform visionary ideas into extraordinary brands.
            Explore our approach.
        </h1>
        <div className='sm:hidden h-[1px] w-[84vw] mx-auto bg-white'></div>
        <Curve />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-24 mt-8 sm:mt-0">
          {/* Left Column */}
          <div>
            <h2 className="text-xl md:text-2xl font-light sm:mb-8">
              Building tomorrow's success, today.
            </h2>
          </div>

          {/* Right Column */}
          <div className="space-y-7">
            <div>
              <h3 className="text-lg md:text-xl mb-4">We are an innovation catalyst.</h3>
              <p className="text-gray-300 text-sm md:text-base">
                Since our founding, we've been recognized globally for helping visionaries build market-defining brands that drive sustainable growth and shape industry narratives.
              </p>
            </div>

            <div>
              <p className="text-gray-300 text-sm md:text-base mb-4">
                We launched our Strategic Partnership Program to provide dedicated support to forward-thinking entrepreneurs.
              </p>
            </div>

            <div>
              <p className="text-gray-300 text-sm md:text-base mb-6">
                We collaborate with a select group of clients annually, ensuring each receives the focused attention and strategic guidance they deserve.
              </p>
              <a href="#learn-more" className="flex items-center w-fit group text-sm md:text-base hover-btn">
                Learn more 
                <span className="ml-2 group-hover:ml-3 transition-all">→</span>
              </a>
            </div>
          </div>
        </div>
    </div>
    </div>
  )
}

export default About