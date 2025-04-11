
import { useEffect, useRef } from 'react';

const Introduction = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100');
          entry.target.classList.remove('opacity-0', 'translate-y-10');
        }
      },
      { threshold: 0.1 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);
  
  return (
    <section id="introduction" className="section-container bg-charcoal relative">
      <div className="absolute inset-0 bg-purple/5 z-0"></div>
      <div 
        ref={sectionRef} 
        className="container mx-auto z-10 opacity-0 translate-y-10 transition-all duration-1000"
      >
        <h2 className="section-title">Introduction</h2>
        <div className="glass-card p-6 md:p-8 lg:p-10 max-w-4xl mx-auto">
          <p className="text-lg mb-5 leading-relaxed">
            The Russian Revolution of 1917 was one of the most significant events of the 20th century, a seismic political upheaval that ended centuries of tsarist rule and established the world's first socialist state.
          </p>
          <p className="text-lg mb-5 leading-relaxed">
            What began as a response to the hardships of World War I, economic collapse, and political oppression transformed into a radical restructuring of Russian society. The February Revolution toppled Tsar Nicholas II, while the October Revolution brought Vladimir Lenin and the Bolsheviks to power.
          </p>
          <p className="text-lg leading-relaxed">
            The revolution sent shockwaves across the globe, inspiring revolutionary movements worldwide and fundamentally altering the course of modern history. Its legacy continues to shape our understanding of politics, economics, and social change to this day.
          </p>
        </div>
        
        <div className="mt-16 relative max-w-5xl mx-auto">
          <div className="glass-card p-5 text-xl italic text-center relative z-10">
            "The revolution does not need historians."
            <div className="mt-2 text-sm text-purple-light">— Vladimir Lenin</div>
          </div>
          <div className="absolute -top-5 -left-5 text-8xl text-purple-light/20">"</div>
          <div className="absolute -bottom-10 -right-5 text-8xl text-purple-light/20">"</div>
        </div>
      </div>
    </section>
  );
};

export default Introduction;
