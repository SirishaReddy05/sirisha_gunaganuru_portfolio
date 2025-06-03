import React from 'react';
import { ArrowUp } from 'lucide-react';
import { Link } from 'react-scroll';
import { personalInfo } from '../data/data';


const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="mb-6 md:mb-0">
            <h3 className="text-2xl font-bold mb-2">{personalInfo.name}</h3>
            <p className="text-gray-400 max-w-md">{personalInfo.title}</p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-6">
            <Link
              to="home"
              spy={true}
              smooth={true}
              duration={500}
              className="text-gray-300 hover:text-white transition-colors cursor-pointer"
            >
              Home
            </Link>
            <Link
              to="skills"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="text-gray-300 hover:text-white transition-colors cursor-pointer"
            >
              Skills
            </Link>
            <Link
              to="projects"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="text-gray-300 hover:text-white transition-colors cursor-pointer"
            >
              Projects
            </Link>
            <Link
              to="education"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="text-gray-300 hover:text-white transition-colors cursor-pointer"
            >
              Education
            </Link>
            <Link
              to="achievements"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="text-gray-300 hover:text-white transition-colors cursor-pointer"
            >
              Achievements
            </Link>
            <Link
              to="contact"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="text-gray-300 hover:text-white transition-colors cursor-pointer"
            >
              Contact
            </Link>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
          </p>
          
          <Link
            to="home"
            spy={true}
            smooth={true}
            duration={500}
            className="p-2 bg-blue-700 hover:bg-blue-800 rounded-full cursor-pointer transition-colors"
          >
            <ArrowUp className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
