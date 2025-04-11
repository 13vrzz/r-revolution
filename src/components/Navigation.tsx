
import { useState, useEffect } from 'react';
import { Menu, X, Info, Clock, Users, Image, BookOpen } from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Introduction', href: '#introduction', icon: <Info size={18} /> },
    { name: 'Causes', href: '#causes', icon: <BookOpen size={18} /> },
    { name: 'Timeline', href: '#timeline', icon: <Clock size={18} /> },
    { name: 'Key Figures', href: '#figures', icon: <Users size={18} /> },
    { name: 'Gallery', href: '#gallery', icon: <Image size={18} /> },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-charcoal-dark/90 backdrop-blur-md py-3 shadow-lg' : 'bg-transparent py-5'}`}>
      <div className="container mx-auto flex justify-between items-center px-4">
        <a href="#" className="text-white font-barlow text-xl tracking-wider">
          <span className="text-purple-light">R</span>evolution
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-gray-300 hover:text-purple-light flex items-center space-x-1 transition-colors duration-300"
            >
              {link.icon}
              <span>{link.name}</span>
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white hover:text-purple-light transition-colors duration-300"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 bg-charcoal/95 backdrop-blur-lg transition-transform duration-300 ease-in-out z-40 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        } md:hidden flex flex-col items-center justify-center`}
      >
        <div className="flex flex-col space-y-8 items-center">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-gray-200 hover:text-purple-light text-xl flex items-center space-x-2 transition-all duration-300 hover:scale-105"
            >
              {link.icon}
              <span>{link.name}</span>
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
