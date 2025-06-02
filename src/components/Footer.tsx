import React from 'react';
import { Link } from 'react-router-dom';
import { Ghost, Github, Twitter, Linkedin, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black/80 border-t border-[#0ff]/20 mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <Link to="/" className="flex items-center">
              <Ghost className="h-6 w-6 text-[#0ff] mr-2" />
              <h1 className="text-xl font-bold">
                <span className="text-white">GHOST</span>
                <span className="text-[#0ff]">.LOG</span>
              </h1>
            </Link>
            <p className="mt-4 text-gray-400 text-sm leading-relaxed">
              Exploring the boundaries between humanity and technology in the digital age.
            </p>
          </div>
          
          <div className="md:col-span-1">
            <h4 className="text-white text-lg font-semibold mb-4">Navigation</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-[#0ff] text-sm transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-[#0ff] text-sm transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link to="/?category=featured" className="text-gray-400 hover:text-[#0ff] text-sm transition-colors">
                  Featured
                </Link>
              </li>
              <li>
                <Link to="#" className="text-gray-400 hover:text-[#0ff] text-sm transition-colors">
                  Archive
                </Link>
              </li>
            </ul>
          </div>
          
          <div className="md:col-span-1">
            <h4 className="text-white text-lg font-semibold mb-4">Categories</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/?category=cybernetics" className="text-gray-400 hover:text-[#0ff] text-sm transition-colors">
                  Cybernetics
                </Link>
              </li>
              <li>
                <Link to="/?category=ai" className="text-gray-400 hover:text-[#0ff] text-sm transition-colors">
                  Artificial Intelligence
                </Link>
              </li>
              <li>
                <Link to="/?category=cyberspace" className="text-gray-400 hover:text-[#0ff] text-sm transition-colors">
                  Cyberspace
                </Link>
              </li>
              <li>
                <Link to="/?category=security" className="text-gray-400 hover:text-[#0ff] text-sm transition-colors">
                  Security
                </Link>
              </li>
            </ul>
          </div>
          
          <div className="md:col-span-1">
            <h4 className="text-white text-lg font-semibold mb-4">Connect</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-[#0ff]" aria-label="GitHub">
                <Github className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#0ff]" aria-label="Twitter">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#0ff]" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#0ff]" aria-label="Email">
                <Mail className="h-5 w-5" />
              </a>
            </div>
            <div className="mt-6">
              <h5 className="text-white text-sm font-semibold mb-2">Subscribe to our newsletter</h5>
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="bg-gray-900 text-white px-3 py-2 text-sm border border-[#0ff]/30 focus:border-[#0ff] focus:outline-none flex-grow"
                />
                <button className="cyber-button text-xs">
                  SEND
                </button>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-[#0ff]/20 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-xs">
            &copy; {new Date().getFullYear()} GHOST.LOG. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0">
            <ul className="flex space-x-6">
              <li>
                <Link to="#" className="text-gray-500 hover:text-[#0ff] text-xs">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="#" className="text-gray-500 hover:text-[#0ff] text-xs">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link to="#" className="text-gray-500 hover:text-[#0ff] text-xs">
                  Cookie Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;