
import { useEffect, useRef } from 'react';
import { Globe, BookOpen, Landmark } from 'lucide-react';

const Legacy = () => {
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
    <section id="legacy" className="section-container bg-charcoal-dark relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-charcoal to-charcoal-dark z-0"></div>
      <div className="absolute inset-0 bg-purple/10 z-0"></div>
      
      {/* Background pattern with icons */}
      <div className="absolute inset-0 z-0 opacity-5">
        <div className="grid grid-cols-4 grid-rows-4 gap-16 p-8">
          {Array.from({ length: 16 }).map((_, index) => (
            <div key={index} className="flex items-center justify-center">
              {index % 3 === 0 ? (
                <Globe size={64} className="text-purple-light" />
              ) : index % 3 === 1 ? (
                <BookOpen size={64} className="text-purple-light" />
              ) : (
                <Landmark size={64} className="text-purple-light" />
              )}
            </div>
          ))}
        </div>
      </div>
      
      <div 
        ref={sectionRef} 
        className="container mx-auto z-10 opacity-0 translate-y-10 transition-all duration-1000"
      >
        <h2 className="section-title">Impact & Legacy</h2>
        
        <div className="glass-card p-6 md:p-8 lg:p-10 max-w-4xl mx-auto">
          <p className="text-lg mb-5 leading-relaxed">
            The Russian Revolution fundamentally transformed global politics and inspired revolutionary movements worldwide. It established the world's first socialist state, challenging capitalism as the dominant economic system.
          </p>
          <p className="text-lg mb-5 leading-relaxed">
            The establishment of the Soviet Union created a powerful new player in international relations, eventually leading to the Cold War division of the world into competing ideological blocs that would shape the 20th century.
          </p>
          <p className="text-lg leading-relaxed">
            Though the Soviet system ultimately collapsed in 1991, the revolution's legacy endures in ongoing debates about economic systems, political authority, and the role of the state in society. It remains one of history's most consequential events, continuing to influence political movements and social theory worldwide.
          </p>
        </div>
        
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="glass-card p-6 animate-float">
            <div className="flex justify-center mb-4">
              <Landmark size={48} className="text-purple-light" />
            </div>
            <h3 className="font-barlow text-xl font-semibold mb-3 text-glow-purple text-center">Political Legacy</h3>
            <p className="text-gray-300 text-center">Introduction of a one-party state model that influenced communist systems worldwide, from China to Cuba.</p>
          </div>
          
          <div className="glass-card p-6 animate-float [animation-delay:1s]">
            <div className="flex justify-center mb-4">
              <Globe size={48} className="text-purple-light" />
            </div>
            <h3 className="font-barlow text-xl font-semibold mb-3 text-glow-purple text-center">Economic Legacy</h3>
            <p className="text-gray-300 text-center">Implementation of a centrally planned economy that challenged market capitalism and influenced economic policies globally.</p>
          </div>
          
          <div className="glass-card p-6 animate-float [animation-delay:2s]">
            <div className="flex justify-center mb-4">
              <BookOpen size={48} className="text-purple-light" />
            </div>
            <h3 className="font-barlow text-xl font-semibold mb-3 text-glow-purple text-center">Cultural Legacy</h3>
            <p className="text-gray-300 text-center">Revolutionary aesthetics and propaganda techniques that influenced art, film, and design throughout the 20th century.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Legacy;
