
import { useState, useEffect, useRef } from 'react';
import { X, Camera, Book, Flag, Award, Landmark, Archive, Globe, Map, FileText } from 'lucide-react';

interface GalleryItem {
  icon: React.ReactNode;
  alt: string;
  caption: string;
}

const Gallery = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentItem, setCurrentItem] = useState(0);
  
  const items: GalleryItem[] = [
    {
      icon: <Flag size={64} className="text-purple-light" />,
      alt: "Revolutionary flag",
      caption: "The flag became a powerful symbol during the Russian Revolution, representing the workers' movement."
    },
    {
      icon: <Book size={64} className="text-purple-light" />,
      alt: "Revolutionary literature",
      caption: "Revolutionary literature, including Lenin's writings, played a crucial role in spreading Bolshevik ideas."
    },
    {
      icon: <Camera size={64} className="text-purple-light" />,
      alt: "Documentary photography",
      caption: "Photography documented key moments of the revolution, becoming powerful historical records."
    },
    {
      icon: <Globe size={64} className="text-purple-light" />,
      alt: "Global impact",
      caption: "The Russian Revolution had a profound impact on global politics and inspired revolutionary movements worldwide."
    },
    {
      icon: <Landmark size={64} className="text-purple-light" />,
      alt: "Winter Palace",
      caption: "The storming of the Winter Palace became an iconic moment in the October Revolution."
    },
    {
      icon: <Archive size={64} className="text-purple-light" />,
      alt: "Historical archives",
      caption: "Archives preserve countless documents and artifacts from the revolutionary period."
    },
    {
      icon: <Award size={64} className="text-purple-light" />,
      alt: "Imperial symbols",
      caption: "Imperial symbols were rejected and replaced with new Soviet emblems after the revolution."
    },
    {
      icon: <Map size={64} className="text-purple-light" />,
      alt: "Map of revolutionary Russia",
      caption: "Maps from the period show the changing territories during the revolutionary years and civil war."
    },
    {
      icon: <FileText size={64} className="text-purple-light" />,
      alt: "Revolutionary decrees",
      caption: "The first decrees of the Soviet government addressed peace, land reform, and workers' rights."
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
  
  const openLightbox = (index: number) => {
    setCurrentItem(index);
    setLightboxOpen(true);
    document.body.style.overflow = 'hidden';
  };
  
  const closeLightbox = () => {
    setLightboxOpen(false);
    document.body.style.overflow = 'auto';
  };
  
  const navigateItem = (direction: number) => {
    const newIndex = (currentItem + direction + items.length) % items.length;
    setCurrentItem(newIndex);
  };
  
  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!lightboxOpen) return;
      
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') navigateItem(1);
      if (e.key === 'ArrowLeft') navigateItem(-1);
    };
    
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxOpen, currentItem]);
  
  return (
    <section id="gallery" className="section-container bg-charcoal relative">
      <div className="absolute inset-0 bg-purple/5 z-0"></div>
      <div 
        ref={sectionRef} 
        className="container mx-auto z-10 opacity-0 translate-y-10 transition-all duration-1000"
      >
        <h2 className="section-title">Historical Gallery</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mt-12">
          {items.map((item, index) => (
            <div 
              key={index}
              className="glass-card overflow-hidden cursor-pointer group flex items-center justify-center p-8"
              onClick={() => openLightbox(index)}
            >
              <div className="aspect-w-16 aspect-h-12 overflow-hidden relative flex flex-col items-center">
                {item.icon}
                <div className="mt-4 text-center">
                  <p className="text-sm text-gray-200">{item.alt}</p>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal-dark to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-4 w-full text-center">
                    <p className="text-sm text-gray-200 line-clamp-2">{item.caption}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Lightbox */}
        {lightboxOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm">
            <button 
              className="absolute top-4 right-4 text-white z-10 p-2 rounded-full bg-charcoal/50 hover:bg-purple/30 transition-colors duration-300"
              onClick={closeLightbox}
            >
              <X size={24} />
            </button>
            
            <button 
              className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white z-10 p-3 rounded-full bg-charcoal/50 hover:bg-purple/30 transition-colors duration-300"
              onClick={() => navigateItem(-1)}
            >
              &larr;
            </button>
            
            <button 
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white z-10 p-3 rounded-full bg-charcoal/50 hover:bg-purple/30 transition-colors duration-300"
              onClick={() => navigateItem(1)}
            >
              &rarr;
            </button>
            
            <div className="max-w-5xl max-h-[80vh] w-full flex flex-col items-center animate-fade-in">
              <div className="relative flex items-center justify-center h-64 mb-8">
                {items[currentItem].icon}
              </div>
              
              <div className="glass-card p-4 mt-4 w-full">
                <p className="text-center text-gray-100">{items[currentItem].caption}</p>
                <p className="text-center text-sm text-gray-400 mt-2">{currentItem + 1} / {items.length}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;
