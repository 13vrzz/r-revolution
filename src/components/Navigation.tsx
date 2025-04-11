
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const navLinks = [
    { name: 'Introduction', href: '#introduction' },
    { name: 'Causes', href: '#causes' },
    { name: 'Timeline', href: '#timeline' },
    { name: 'Figures', href: '#figures' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Legacy', href: '#legacy' }
  ];
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <>
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-charcoal-dark/80 backdrop-blur-md py-3 shadow-lg' 
            : 'bg-transparent py-5'
        }`}
      >
        <div className="container mx-auto px-4 flex justify-between items-center">
          <a href="#" className="font-barlow text-xl tracking-wider text-glow">
            <span className="text-purple-light">RUSSIAN</span> REVOLUTION
          </a>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <a 
                key={link.name}
                href={link.href}
                className="text-gray-300 hover:text-purple-light transition-colors duration-300"
              >
                {link.name}
              </a>
            ))}
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-gray-300 hover:text-purple-light transition-colors duration-300"
            onClick={() => setMobileMenuOpen(true)}
          >
            <Menu size={24} />
          </button>
        </div>
      </nav>
      
      {/* Mobile Navigation Menu */}
      <div 
        className={`fixed inset-0 z-50 bg-charcoal-dark/90 backdrop-blur-lg transform transition-transform duration-300 ${
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="container mx-auto px-4 py-8">
          <div className="flex justify-between items-center mb-8">
            <a href="#" className="font-barlow text-xl tracking-wider text-glow">
              <span className="text-purple-light">RUSSIAN</span> REVOLUTION
            </a>
            <button 
              className="text-gray-300 hover:text-purple-light transition-colors duration-300"
              onClick={() => setMobileMenuOpen(false)}
            >
              <X size={24} />
            </button>
          </div>
          
          <div className="flex flex-col space-y-6">
            {navLinks.map((link) => (
              <a 
                key={link.name}
                href={link.href}
                className="text-gray-300 hover:text-purple-light transition-colors duration-300 text-2xl font-barlow"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
          </div>
          
          <div className="mt-16">
            <div className="glass-card p-4 flex items-center">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/1917_October_Revolution_Red_guard_Petrograd.jpg/600px-1917_October_Revolution_Red_guard_Petrograd.jpg"
                alt="Red Guards in Petrograd during the October Revolution"
                className="w-16 h-16 rounded-full object-cover mr-4"
              />
              <p className="text-sm text-gray-300">
                Red Guards in Petrograd during the October Revolution, 1917
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navigation;
