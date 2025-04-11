
import { useEffect, useRef } from 'react';
import { Book, Globe, History } from 'lucide-react';

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
    <section id="introduction" className="section-container bg-charcoal-dark relative">
      <div className="absolute inset-0 bg-gradient-to-b from-charcoal to-charcoal-dark z-0"></div>
      <div className="absolute inset-0 bg-purple/10 z-0"></div>
      
      <div 
        ref={sectionRef} 
        className="container mx-auto z-10 opacity-0 translate-y-10 transition-all duration-1000"
      >
        <h2 className="section-title">The Revolution</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Text content */}
          <div className="glass-card p-6 md:p-8">
            <p className="text-lg md:text-xl leading-relaxed mb-6">
              The Russian Revolution was one of the most significant events of the 20th century, leading to the collapse of the Russian Empire and the establishment of the world's first socialist state.
            </p>
            <p className="text-lg leading-relaxed mb-6">
              Beginning with the February Revolution of 1917, which overthrew Tsar Nicholas II and established the Provisional Government, the revolution culminated in the October Revolution when the Bolsheviks, led by Vladimir Lenin, seized power.
            </p>
            <p className="text-lg leading-relaxed">
              The revolution was followed by the Russian Civil War (1918-1922), which ultimately led to the creation of the Soviet Union in 1922, transforming Russia from an imperial monarchy to a communist republic.
            </p>
          </div>
          
          {/* Icon display instead of image */}
          <div className="glass-card p-8 flex flex-col items-center justify-center">
            <div className="relative h-48 w-48 flex items-center justify-center mb-6">
              <History size={120} className="text-purple-light opacity-80" />
              <Globe size={64} className="text-purple-light opacity-60 absolute top-0 right-0" />
              <Book size={64} className="text-purple-light opacity-60 absolute bottom-0 left-0" />
            </div>
            <p className="text-center text-sm text-gray-300">
              The revolution transformed global politics and inspired revolutionary movements worldwide.
            </p>
          </div>
        </div>
        
        {/* Quote */}
        <div className="mt-16 glass-card p-6 md:p-8 max-w-3xl mx-auto backdrop-blur-xl border-purple-light/20 border transform hover:-translate-y-1 transition-transform duration-300">
          <blockquote className="text-xl md:text-2xl italic font-light text-gray-200">
            "The revolution is not an apple that falls when it is ripe. You have to make it fall."
            <footer className="text-right mt-4 text-purple-light font-barlow">— Che Guevara, reflecting on Lenin's revolutionary theory</footer>
          </blockquote>
        </div>
      </div>
    </section>
  );
};

export default Introduction;
