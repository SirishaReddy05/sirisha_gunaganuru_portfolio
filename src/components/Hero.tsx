import React from 'react';
import { Link } from 'react-scroll';
import { ArrowDown, FileText, FolderKanban, Mail } from 'lucide-react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { personalInfo } from '../data/data';

const Hero: React.FC = () => {
  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center relative bg-gradient-to-br from-primary-50/50 to-accent-50/50 dark:from-secondary-900 dark:to-primary-900/20"
    >
      <div className="absolute inset-0 opacity-20">
        <div className="absolute w-96 h-96 rounded-full bg-primary-300 dark:bg-primary-700 blur-3xl -top-20 -left-20"></div>
        <div className="absolute w-96 h-96 rounded-full bg-accent-300 dark:bg-accent-700 blur-3xl bottom-10 -right-20"></div>
      </div>
      
      <div className="container mx-auto px-4 py-20 flex flex-col md:flex-row items-center justify-between relative z-10">
        <motion.div 
          className="md:w-1/2 md:pr-10 text-center md:text-left"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Hi, I'm <span className="gradient-text">{personalInfo.name}</span>
          </h1>
          
          <div className="text-xl md:text-2xl font-medium text-secondary-600 dark:text-secondary-300 mb-6 h-16">
            <TypeAnimation
              sequence={[
                'Web Developer',
                1000,
                'ML Enthusiast',
                1000,
                'DSA Proficient',
                1000,
                'B.Tech Student',
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="text-primary-600 dark:text-primary-400"
            />
          </div>
          
          <p className="text-lg text-secondary-600 dark:text-secondary-300 mb-8 max-w-lg mx-auto md:mx-0">
            {personalInfo.shortBio}
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4">
            <a
              href={personalInfo.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary flex items-center justify-center gap-2 w-full sm:w-auto"
            >
              <FileText className="w-5 h-5" />
              <span>View Resume</span>
            </a>
            
            <Link
              to="projects"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="btn btn-secondary flex items-center justify-center gap-2 w-full sm:w-auto"
            >
              <FolderKanban className="w-5 h-5" />
              <span>Explore Projects</span>
            </Link>
            
            <Link
              to="contact"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="btn btn-accent flex items-center justify-center gap-2 w-full sm:w-auto"
            >
              <Mail className="w-5 h-5" />
              <span>Get in Touch</span>
            </Link>
          </div>
        </motion.div>
        
        <motion.div 
          className="md:w-1/2 mt-12 md:mt-0"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="relative mx-auto w-64 h-64 md:w-80 md:h-80 animate-float">
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary-500 to-accent-500 blur-lg opacity-70"></div>
            <img 
              src={personalInfo.photo} 
              alt={personalInfo.name}
              className="relative w-full h-full object-cover rounded-full p-2 bg-white dark:bg-secondary-800 shadow-glow"
            />
          </div>
        </motion.div>
      </div>
      
      <motion.div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ 
          duration: 0.5, 
          delay: 0.8,
          repeat: Infinity,
          repeatType: "reverse",
          repeatDelay: 0.2
        }}
      >
        <p className="text-secondary-600 dark:text-secondary-400 mb-2">Scroll Down</p>
        <ArrowDown className="w-6 h-6 text-primary-600 dark:text-primary-400" />
      </motion.div>
    </section>
  );
};

export default Hero;