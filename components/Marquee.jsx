import React from 'react';

const Marquee = () => {
    return (
      <div className="bg-zinc-900 w-full mb-16 sm:mb-16">
        {/* Top Border */}
        <div className="border-t border-gray-500 w-full" />
        <div className="border-b border-gray-500 w-full mt-[2px]" />
  
        {/* Marquee Content */}
        <div className="overflow-hidden py-4">
          <div className="flex whitespace-nowrap text-white text-6xl md:text-[5vw] font-light font-variable uppercase px-6">
            <div className="flex animate-marquee items-center">
              {[...Array(16)].map((_, i) => (
                <React.Fragment key={i}>
                  <span className="mx-4 tracking-tighter">Luxury</span>
                  <span className="mx-4">—</span>
                  <span className="mx-4 tracking-tighter">Design</span>
                  <span className="mx-4">—</span>
                  <span className="mx-4 tracking-tighter">Innovative</span>
                  <span className="mx-4">—</span>
                  <span className="mx-4 tracking-tighter">Technology</span>
                  <span className="mx-4">—</span>
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
  
        {/* Bottom Border */}
        <div className="border-b border-gray-500 w-full" />
        <div className="border-b border-gray-500 w-full mt-[2px]" />
  
        <style jsx global>{`
          @keyframes marquee {
            0% { transform: translateX(0%); }
            100% { transform: translateX(-100%); }
          }
          .animate-marquee {
            animation: marquee 300s linear infinite;
          }
        `}</style>
      </div>
    );
  };
  
  export default Marquee;
