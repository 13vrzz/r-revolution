
import { useEffect, useRef, useState } from 'react';

interface Figure {
  name: string;
  role: string;
  description: string;
  image: string;
}

const KeyFigures = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [selectedFigure, setSelectedFigure] = useState<number | null>(null);
  
  const figures: Figure[] = [
    {
      name: "Vladimir Lenin",
      role: "Bolshevik Leader",
      description: "Leader of the Bolshevik Party who led the October Revolution and became the first head of the Soviet state. His political theories, known as Leninism, emphasized the need for a vanguard party to lead the proletariat revolution.",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Vladimir_Lenin.jpg/330px-Vladimir_Lenin.jpg"
    },
    {
      name: "Leon Trotsky",
      role: "Revolutionary Leader",
      description: "A leading Bolshevik and creator of the Red Army. Trotsky played a crucial role in the October Revolution and the subsequent Civil War. He later opposed Stalin's leadership and was exiled from the Soviet Union.",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Leon_Trotsky_1924_metafilter.jpg/330px-Leon_Trotsky_1924_metafilter.jpg"
    },
    {
      name: "Tsar Nicholas II",
      role: "Last Emperor of Russia",
      description: "The last Emperor of Russia, ruling from 1894 until his forced abdication in March 1917. His ineffective leadership during World War I and resistance to political reform contributed to the collapse of the Russian Empire.",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Mikol%C3%A1%C5%A1_II.jpg/330px-Mikol%C3%A1%C5%A1_II.jpg"
    },
    {
      name: "Alexandra Feodorovna",
      role: "Last Empress of Russia",
      description: "The Empress consort of Russia as the spouse of Nicholas II. Her German origin and influence on her husband, especially through the controversial figure of Rasputin, made her increasingly unpopular during World War I.",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/AlexandraFyodorovna1906..jpg/330px-AlexandraFyodorovna1906..jpg"
    },
    {
      name: "Alexander Kerensky",
      role: "Provisional Government Leader",
      description: "A key political figure who served as Minister of Justice, then as Minister of War, and finally as Minister-Chairman of the Russian Provisional Government until it was overthrown by the Bolsheviks.",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Kerenski%C3%AF.jpg/330px-Kerenski%C3%AF.jpg"
    },
    {
      name: "Joseph Stalin",
      role: "Bolshevik Revolutionary",
      description: "A Bolshevik revolutionary who rose to power after Lenin's death. While not a central figure in the 1917 revolutions, he played an important role in the civil war and later became the leader of the Soviet Union.",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/Stalin_1945.jpg/330px-Stalin_1945.jpg"
    }
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
    <section id="figures" className="section-container bg-charcoal-dark relative">
      <div className="absolute inset-0 bg-gradient-to-b from-charcoal to-charcoal-dark z-0"></div>
      <div className="absolute inset-0 bg-purple/10 z-0"></div>
      <div 
        ref={sectionRef} 
        className="container mx-auto z-10 opacity-0 translate-y-10 transition-all duration-1000"
      >
        <h2 className="section-title">Key Figures</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {figures.map((figure, index) => (
            <div 
              key={index}
              className="glass-card overflow-hidden group cursor-pointer"
              onClick={() => setSelectedFigure(index)}
            >
              <div className="h-72 overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal-dark to-transparent z-10"></div>
                <img 
                  src={figure.image} 
                  alt={figure.name} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute bottom-0 left-0 right-0 p-5 z-20">
                  <h3 className="font-barlow text-2xl font-bold text-glow">{figure.name}</h3>
                  <p className="text-purple-light">{figure.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Modal for figure details */}
        {selectedFigure !== null && (
          <div className="fixed inset-0 flex items-center justify-center z-50 p-4">
            <div 
              className="absolute inset-0 bg-black/70 backdrop-blur-sm"
              onClick={() => setSelectedFigure(null)}
            ></div>
            <div className="glass-card p-5 md:p-8 max-w-3xl w-full z-10 animate-fade-in">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="md:w-1/3">
                  <img 
                    src={figures[selectedFigure].image} 
                    alt={figures[selectedFigure].name} 
                    className="w-full rounded-lg shadow-lg"
                  />
                </div>
                <div className="md:w-2/3">
                  <h3 className="font-barlow text-3xl font-bold text-glow mb-1">
                    {figures[selectedFigure].name}
                  </h3>
                  <p className="text-purple-light mb-4">{figures[selectedFigure].role}</p>
                  <p className="text-gray-200 leading-relaxed">
                    {figures[selectedFigure].description}
                  </p>
                  <button 
                    className="mt-6 px-5 py-2 bg-purple/30 hover:bg-purple/50 border border-purple-light/30 rounded-full transition-colors duration-300"
                    onClick={() => setSelectedFigure(null)}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default KeyFigures;
