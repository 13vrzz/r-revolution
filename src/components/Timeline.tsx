
import { useEffect, useRef, useState } from 'react';
import { Calendar, Flag, Users, MapPin, Landmark, Target, Swords } from 'lucide-react';

interface TimelineEvent {
  year: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const Timeline = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeEvent, setActiveEvent] = useState<number | null>(null);
  
  const events: TimelineEvent[] = [
    {
      year: "1905",
      title: "Bloody Sunday & First Revolution",
      description: "Peaceful protestors were fired upon by Imperial forces, triggering the first Russian Revolution. Tsar Nicholas II agreed to create the State Duma, Russia's first elected legislature.",
      icon: <Users size={48} className="text-purple-light" />
    },
    {
      year: "Feb 1917",
      title: "February Revolution",
      description: "Food shortages and worker strikes in Petrograd escalated into a revolution. The Tsar abdicated and a Provisional Government was formed.",
      icon: <Flag size={48} className="text-purple-light" />
    },
    {
      year: "Apr 1917",
      title: "Lenin Returns to Russia",
      description: "Vladimir Lenin returned from exile, publishing his 'April Theses' calling for 'Peace, Land, and Bread' and 'All Power to the Soviets.'",
      icon: <MapPin size={48} className="text-purple-light" />
    },
    {
      year: "Jul 1917",
      title: "July Days",
      description: "Failed Bolshevik uprising in Petrograd led to Lenin fleeing to Finland and other Bolshevik leaders being arrested.",
      icon: <Calendar size={48} className="text-purple-light" />
    },
    {
      year: "Oct 1917",
      title: "October Revolution",
      description: "Bolsheviks led by Lenin seized power from the Provisional Government. The Winter Palace was stormed and the Soviet government was established.",
      icon: <Landmark size={48} className="text-purple-light" />
    },
    {
      year: "1918-22",
      title: "Civil War",
      description: "The Red Army (Bolsheviks) fought against the White Army (anti-Bolshevik forces). The war ended with a Bolshevik victory, leading to the formation of the Soviet Union in 1922.",
      icon: <Swords size={48} className="text-purple-light" />
    },
  ];
  
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
    <section id="timeline" className="section-container bg-charcoal relative">
      <div className="absolute inset-0 bg-purple/5 z-0"></div>
      <div 
        ref={sectionRef} 
        className="container mx-auto z-10 opacity-0 translate-y-10 transition-all duration-1000"
      >
        <h2 className="section-title">Key Events Timeline</h2>
        
        <div className="relative mt-16">
          {/* Vertical line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-1 bg-purple/30"></div>
          
          {events.map((event, index) => (
            <div 
              key={index}
              className={`relative mb-16 transition-all duration-500 ${
                index % 2 === 0 ? 'md:ml-auto md:pr-12 md:pl-0 pl-12' : 'md:mr-auto md:pl-12 md:pr-0 pl-12'
              } md:w-1/2 w-full`}
              onMouseEnter={() => setActiveEvent(index)}
              onMouseLeave={() => setActiveEvent(null)}
            >
              {/* Timeline marker */}
              <div className="absolute left-0 md:left-0 md:right-0 top-0 transform md:translate-x-0 -translate-x-1/2 md:translate-x-0">
                <div className={`timeline-marker transform md:translate-x-${index % 2 === 0 ? '' : '-'}1/2 -translate-x-1/2 transition-all duration-300 ${activeEvent === index ? 'scale-150' : ''}`}></div>
              </div>
              
              {/* Content */}
              <div className="glass-card overflow-hidden transition-all duration-300 hover:shadow-[0_0_25px_rgba(91,75,125,0.3)]">
                <div className="w-full h-48 flex items-center justify-center bg-charcoal-dark/50">
                  {event.icon}
                </div>
                <div className="p-5">
                  <div className="text-purple-light font-barlow font-bold text-xl mb-1">{event.year}</div>
                  <h3 className="font-barlow text-2xl mb-3">{event.title}</h3>
                  <p className="text-gray-300">{event.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;
