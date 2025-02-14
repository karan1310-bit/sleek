'use client'

import React from 'react';
import Image from 'next/image';

const ResponsiveCard = ({ color, title, description, url, src, i }) => {
  return (
    <div className="min-h-screen flex items-center justify-center font-['Satoshi_Variable'] sticky top-0 p-4">
      <div
        className="flex flex-col relative w-[320px] h-[400px] sm:w-[500px] sm:h-[500px] md:w-[700px] md:h-[500px] lg:w-[900px] lg:h-[500px] xl:w-[1000px] xl:h-[500px] rounded-[25px] p-4 sm:p-6 md:p-[50px] origin-top"
        style={{ 
          backgroundColor: color,
          top: `calc(-5vh + ${i * 25}px)`
        }}
      >
        <h2 className="text-center m-0 text-lg sm:text-xl md:text-[28px]">{title}</h2>
        
        <div className="flex flex-col md:flex-row h-full mt-4 sm:mt-6 md:mt-[50px] gap-4 sm:gap-6 md:gap-[50px]">
          {/* Description Section */}
          <div className="w-full md:w-[40%] relative md:top-[10%]">
            <p className="text-sm sm:text-base first-letter:text-lg sm:first-letter:text-xl md:first-letter:text-[28px] first-letter:font-['Title']">
              {description}
            </p>
            
            <span className="flex items-center gap-[5px] mt-4 md:mt-0">
              <a 
                href={url} 
                target="_blank" 
                className="text-xs underline cursor-pointer"
              >
                See more
              </a>
              <svg 
                width="22" 
                height="12" 
                viewBox="0 0 22 12" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 md:w-[22px]"
              >
                <path 
                  d="M21.5303 6.53033C21.8232 6.23744 21.8232 5.76256 21.5303 5.46967L16.7574 0.696699C16.4645 0.403806 15.9896 0.403806 15.6967 0.696699C15.4038 0.989592 15.4038 1.46447 15.6967 1.75736L19.9393 6L15.6967 10.2426C15.4038 10.5355 15.4038 11.0104 15.6967 11.3033C15.9896 11.5962 16.4645 11.5962 16.7574 11.3033L21.5303 6.53033ZM0 6.75L21 6.75V5.25L0 5.25L0 6.75Z" 
                  fill="black"
                />
              </svg>
            </span>
          </div>

          {/* Image Container */}
          <div className="relative w-full md:w-[60%] h-[200px] sm:h-[250px] md:h-full rounded-[25px] overflow-hidden">
            <div className="w-full h-full relative">
              <Image
                fill
                src={`/images/${src}`}
                alt="image"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResponsiveCard;