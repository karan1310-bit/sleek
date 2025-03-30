'use client';
import React from 'react'

export default function Project({index, title, setModal}) {

    return (
        <div 
        onMouseEnter={() => {setModal({active: true, index})}} 
        onMouseLeave={() => {setModal({active: false, index})}} 
        className="group font-variable flex w-full items-center justify-between border-t border-t-slate-800 overflow-hidden gap-6 sm:gap-1 py-[20px] px-[20px] sm:py-[25px] sm:px-[30px] lg:py-[50px] lg:px-[100px] transition-all duration-200 cursor-pointer last:border-b last:border-b-slate-800 hover:opacity-50"
      >
        <h2 className="transform text-[30px] lg:text-[60px] m-0 font-light font-variable transition-all duration-400 group-hover:-translate-x-[10px] lg:group-hover:-translate-x-[10px]">
          {title}
        </h2>
        <p className='transform font-light font-variable transition-all duration-400 group-hover:translate-x-[10px] lg:group-hover:translate-x-[10px]'>
          Design & Development
        </p>
      </div>
    )
}