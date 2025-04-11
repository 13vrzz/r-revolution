
import { Github, Twitter, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-charcoal-dark py-12 relative border-t border-purple/20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h2 className="font-barlow text-xl tracking-wider text-glow mb-2">
              <span className="text-purple-light">RUSSIAN</span> REVOLUTION
            </h2>
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Ollie Willmott. Educational purposes only.
            </p>
          </div>
          
          <div className="flex flex-col items-center md:items-end">
            <div className="flex space-x-4 mb-4">
              <a href="#" className="text-gray-400 hover:text-purple-light transition-colors duration-300">
                <Github size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-purple-light transition-colors duration-300">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-purple-light transition-colors duration-300">
                <Mail size={20} />
              </a>
            </div>
            <p className="text-gray-500 text-xs text-center md:text-right">
              Images sourced from public domain collections.
              <br />
              Made with Lovable AI.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
