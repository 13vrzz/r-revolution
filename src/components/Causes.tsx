
import { useEffect, useRef } from 'react';

const Causes = () => {
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
  
  const causes = [
    {
      title: "Political Oppression",
      description: "The autocratic rule of Tsar Nicholas II and his resistance to political reform created widespread discontent and calls for democratic governance.",
      icon: "👑"
    },
    {
      title: "Economic Crisis",
      description: "Rapid industrialization along with poor working conditions and exploitative labor practices created extreme poverty among the working class.",
      icon: "💰"
    },
    {
      title: "World War I",
      description: "Military defeats, high casualties, and supply shortages devastated morale and highlighted the incompetence of the tsarist government.",
      icon: "⚔️"
    },
    {
      title: "Food Shortages",
      description: "Severe food shortages, particularly in urban areas, intensified public anger and sparked bread riots that fueled revolutionary sentiment.",
      icon: "🍞"
    },
    {
      title: "Class Struggle",
      description: "Deep social divides between the wealthy elite, emerging middle class, and impoverished workers and peasants created revolutionary class consciousness.",
      icon: "⚒️"
    },
    {
      title: "Marxist Ideology",
      description: "Revolutionary ideologies, particularly Marxism, provided an intellectual framework and organized leadership for revolutionary action.",
      icon: "📚"
    }
  ];
  
  return (
    <section id="causes" className="section-container bg-charcoal-dark relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-charcoal to-charcoal-dark z-0"></div>
      <div className="absolute inset-0 bg-purple/10 z-0"></div>
      <div 
        ref={sectionRef} 
        className="container mx-auto z-10 opacity-0 translate-y-10 transition-all duration-1000"
      >
        <h2 className="section-title">Causes of the Revolution</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mt-12">
          {causes.map((cause, index) => (
            <div 
              key={index}
              className="glass-card p-6 hover:bg-purple/20 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(91,75,125,0.3)]"
            >
              <div className="text-4xl mb-4">{cause.icon}</div>
              <h3 className="text-xl font-barlow font-semibold mb-3 text-glow-purple">{cause.title}</h3>
              <p className="text-gray-300">{cause.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Causes;
