
import { useState, useEffect, useRef } from 'react';
import { X } from 'lucide-react';

interface GalleryImage {
  src: string;
  alt: string;
  caption?: string;
}

const Gallery = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);
  
  const images: GalleryImage[] = [
    {
      src: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/19171107_Lenin-Smolny-by-Nikitin.jpg/800px-19171107_Lenin-Smolny-by-Nikitin.jpg",
      alt: "Lenin at Smolny Institute",
      caption: "Lenin at Smolny Institute, the Bolshevik headquarters during the October Revolution, 1917."
    },
    {
      src: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Trotsky-lenin-zinoviev-kalinin-kamenev-pre-congress-1920.jpg/800px-Trotsky-lenin-zinoviev-kalinin-kamenev-pre-congress-1920.jpg",
      alt: "Bolshevik leaders",
      caption: "Bolshevik leaders: Trotsky, Lenin, Zinoviev, Kalinin, and Kamenev, 1920."
    },
    {
      src: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Russian_Provisional_Government_1917.jpg/800px-Russian_Provisional_Government_1917.jpg",
      alt: "Russian Provisional Government",
      caption: "Members of the Russian Provisional Government, 1917."
    },
    {
      src: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Tsar_Nicholas_II_-reviewing_the_troops_1916.jpg/800px-Tsar_Nicholas_II_-reviewing_the_troops_1916.jpg",
      alt: "Tsar Nicholas II reviewing troops",
      caption: "Tsar Nicholas II reviewing troops during World War I, 1916."
    },
    {
      src: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Red_Army_soldiers_1919.jpg/800px-Red_Army_soldiers_1919.jpg",
      alt: "Red Army soldiers",
      caption: "Red Army soldiers during the Russian Civil War, 1919."
    },
    {
      src: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/19191007-lenin_second_anniversary_october_revolution_speech_red_square.jpg/800px-19191007-lenin_second_anniversary_october_revolution_speech_red_square.jpg",
      alt: "Lenin speech in Red Square",
      caption: "Lenin giving a speech in Red Square on the second anniversary of the October Revolution, 1919."
    },
    {
      src: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Romanov_family_1913.jpg/800px-Romanov_family_1913.jpg",
      alt: "Romanov family",
      caption: "The Romanov family in 1913, four years before the revolution."
    },
    {
      src: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/Saint_Petersburg_1917.jpg/800px-Saint_Petersburg_1917.jpg",
      alt: "Petrograd demonstrations",
      caption: "Demonstrations in Petrograd (St. Petersburg) during the February Revolution, 1917."
    },
    {
      src: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Protopopov_1916_in_cabinet_and_duma.jpg/800px-Protopopov_1916_in_cabinet_and_duma.jpg",
      alt: "Imperial Russian cabinet and Duma",
      caption: "Imperial Russian cabinet and Duma (parliament) meeting, 1916."
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
    setCurrentImage(index);
    setLightboxOpen(true);
    document.body.style.overflow = 'hidden';
  };
  
  const closeLightbox = () => {
    setLightboxOpen(false);
    document.body.style.overflow = 'auto';
  };
  
  const navigateImage = (direction: number) => {
    const newIndex = (currentImage + direction + images.length) % images.length;
    setCurrentImage(newIndex);
  };
  
  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!lightboxOpen) return;
      
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') navigateImage(1);
      if (e.key === 'ArrowLeft') navigateImage(-1);
    };
    
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxOpen, currentImage]);
  
  return (
    <section id="gallery" className="section-container bg-charcoal relative">
      <div className="absolute inset-0 bg-purple/5 z-0"></div>
      <div 
        ref={sectionRef} 
        className="container mx-auto z-10 opacity-0 translate-y-10 transition-all duration-1000"
      >
        <h2 className="section-title">Historical Gallery</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mt-12">
          {images.map((image, index) => (
            <div 
              key={index}
              className="glass-card overflow-hidden cursor-pointer group"
              onClick={() => openLightbox(index)}
            >
              <div className="aspect-w-16 aspect-h-12 overflow-hidden relative">
                <img 
                  src={image.src} 
                  alt={image.alt} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal-dark to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-4 w-full">
                    <p className="text-sm text-gray-200 line-clamp-2">{image.caption || image.alt}</p>
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
              onClick={() => navigateImage(-1)}
            >
              &larr;
            </button>
            
            <button 
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white z-10 p-3 rounded-full bg-charcoal/50 hover:bg-purple/30 transition-colors duration-300"
              onClick={() => navigateImage(1)}
            >
              &rarr;
            </button>
            
            <div className="max-w-5xl max-h-[80vh] w-full flex flex-col items-center animate-fade-in">
              <div className="relative w-full max-h-[70vh] overflow-hidden">
                <img 
                  src={images[currentImage].src} 
                  alt={images[currentImage].alt}
                  className="mx-auto max-h-[70vh] max-w-full object-contain"
                />
              </div>
              
              <div className="glass-card p-4 mt-4 w-full">
                <p className="text-center text-gray-100">{images[currentImage].caption || images[currentImage].alt}</p>
                <p className="text-center text-sm text-gray-400 mt-2">{currentImage + 1} / {images.length}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;
