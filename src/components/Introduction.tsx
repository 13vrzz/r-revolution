
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
    <section id="introduction" className="section-container bg-charcoal-dark relative">
      <div className="absolute inset-0 bg-gradient-to-b from-charcoal to-charcoal-dark z-0"></div>
      <div className="absolute inset-0 bg-purple/10 z-0"></div>
      
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0 opacity-10">
        <img 
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Soviet-Union-1927-1956.jpg/800px-Soviet-Union-1927-1956.jpg" 
          alt="Soviet Russia Map" 
          className="w-full h-full object-cover"
        />
      </div>
      
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
          
          {/* Image */}
          <div className="glass-card overflow-hidden">
            <div className="relative h-full">
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Lenin_addressing_a_crowd.jpg/800px-Lenin_addressing_a_crowd.jpg" 
                alt="Lenin addressing a crowd during the revolution" 
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-charcoal-dark to-transparent">
                <p className="text-sm text-gray-300">
                  Vladimir Lenin addressing a crowd in Petrograd (now St. Petersburg), 1917.
                </p>
              </div>
            </div>
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
