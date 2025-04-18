
import { useEffect, useState } from 'react';
import { Flag, Star, Sword } from 'lucide-react';

const Header = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <header className="h-screen flex flex-col items-center justify-center bg-charcoal-dark relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-charcoal to-charcoal-dark z-0"></div>
      <div className="absolute inset-0 bg-purple-dark/10 z-0"></div>
      
      {/* Background pattern with icons instead of image */}
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute inset-0 grid grid-cols-6 grid-rows-6 gap-8 p-8">
          {Array.from({ length: 12 }).map((_, index) => (
            <div key={index} className="flex items-center justify-center">
              {index % 3 === 0 ? (
                <Flag size={48} className="text-purple-light" />
              ) : index % 3 === 1 ? (
                <Star size={48} className="text-purple-light" />
              ) : (
                <Sword size={48} className="text-purple-light" />
              )}
            </div>
          ))}
        </div>
      </div>
      
      <div className="z-10 text-center px-4">
        <h1 
          className={`font-barlow text-6xl md:text-7xl lg:text-8xl font-bold mb-4 tracking-wider animate-glow-pulse 
            ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} 
            transition-all duration-1000 ease-out`}
        >
          RUSSIAN REVOLUTION
        </h1>
        <h2 
          className={`font-barlow text-xl md:text-2xl font-light tracking-widest text-purple-light
            ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} 
            transition-all duration-1000 delay-300 ease-out`}
        >
          BY OLLIE WILLMOTT
        </h2>
        
        <div className={`mt-12 ${loaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-1000 delay-700`}>
          <a 
            href="#introduction" 
            className="inline-flex items-center px-8 py-3 rounded-full bg-purple/30 border border-purple-light/30 text-white 
              hover:bg-purple/50 transition-all duration-300 group"
          >
            <span>Explore</span>
            <svg 
              className="ml-2 w-5 h-5 transform group-hover:translate-y-1 transition-transform duration-300" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
