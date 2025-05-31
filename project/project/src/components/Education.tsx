import React from 'react';
import { motion } from 'framer-motion';
import { education } from '../data/data';
import { BookOpen, Calendar, MapPin, Award, Check, GraduationCap, Trophy, Star } from 'lucide-react';

const Education: React.FC = () => {
  return (
    <section 
      id="education" 
      className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-blue-900/20"
    >
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">
            Education
          </h2>
          <div className="w-24 h-1 bg-blue-600 dark:bg-blue-400 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            My academic journey and achievements in computer science and Engineering.
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          <motion.div 
            className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden border border-gray-100 dark:border-gray-700"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="md:flex">
              <div className="md:w-1/3 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-gray-800 dark:to-blue-900/20 p-8 flex flex-col items-center justify-center border-r border-gray-100 dark:border-gray-700">
                <div className="w-32 h-32 rounded-2xl overflow-hidden mb-6 border-4 border-white dark:border-gray-700 shadow-lg transform hover:scale-105 transition-transform duration-300">
                  <img 
                    src={education.logo} 
                    alt={education.institution} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white text-center mb-3">
                  {education.institution}
                </h3>
                <div className="flex items-center text-gray-600 dark:text-gray-400 mb-2">
                  <MapPin className="w-4 h-4 mr-2" />
                  <span>{education.location}</span>
                </div>
                <div className="flex items-center text-gray-600 dark:text-gray-400 mb-4">
                  <Calendar className="w-4 h-4 mr-2" />
                  <span>{education.duration}</span>
                </div>
                <div className="flex items-center px-4 py-2 bg-blue-100 dark:bg-blue-900/50 rounded-full text-blue-700 dark:text-blue-300 font-medium">
                  <Trophy className="w-4 h-4 mr-2" />
                  <span>CGPA: {education.gpa}</span>
                </div>
              </div>
              
              <div className="md:w-2/3 p-8">
                <div className="flex items-center mb-6">
                  <GraduationCap className="w-6 h-6 text-blue-600 dark:text-blue-400 mr-3" />
                  <h4 className="text-2xl font-bold text-gray-800 dark:text-white">
                    {education.degree}
                  </h4>
                </div>
                
                <div className="mb-8">
                  <h5 className="text-lg font-semibold text-gray-800 dark:text-white mb-4 flex items-center">
                    <BookOpen className="w-5 h-5 text-blue-600 dark:text-blue-400 mr-2" />
                    Core Coursework
                  </h5>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {education.courses.map((course, index) => (
                      <div 
                        key={index} 
                        className="flex items-center bg-gray-50 dark:bg-gray-700/50 rounded-lg p-3 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors"
                      >
                        <Check className="w-4 h-4 text-blue-600 dark:text-blue-400 mr-2 flex-shrink-0" />
                        <span className="text-gray-700 dark:text-gray-300">{course}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-6 border border-blue-100 dark:border-blue-800">
                  <h5 className="text-lg font-semibold text-gray-800 dark:text-white mb-3 flex items-center">
                    <Star className="w-5 h-5 text-blue-600 dark:text-blue-400 mr-2" />
                    Academic Highlights
                  </h5>
                  <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full mr-2"></div>
                      Active member of college student success center  
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full mr-2"></div>
                      Technical Team Lead for college real time project
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full mr-2"></div>
                      Active member of the College Rotaract and NSS Club
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Education;