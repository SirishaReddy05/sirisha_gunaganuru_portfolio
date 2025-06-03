import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { achievements, certifications } from '../data/data';
import { Award, ExternalLink, Calendar, Medal, FileCheck, Trophy, Star, AlignCenterVertical as Certificate } from 'lucide-react';

const Achievements: React.FC = () => {
  const [tab, setTab] = useState<'achievements' | 'certifications'>('achievements');
  
  return (
    <section 
      id="achievements" 
      className="py-20 bg-white dark:bg-gray-900"
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
            Achievements & Certifications
          </h2>
          <div className="w-24 h-1 bg-blue-600 dark:bg-blue-400 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-8">
            Notable accomplishments and professional certifications that showcase my expertise and continuous learning journey.
          </p>
          
          <div className="flex justify-center mb-12">
            <div className="inline-flex bg-gray-100 dark:bg-gray-800 p-1 rounded-xl">
              <button
                onClick={() => setTab('achievements')}
                className={`px-6 py-3 rounded-lg text-sm font-medium transition-all duration-300 ${
                  tab === 'achievements'
                    ? 'bg-white dark:bg-gray-700 text-blue-600 dark:text-blue-400 shadow-md'
                    : 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400'
                }`}
              >
                <div className="flex items-center">
                  <Trophy className="w-4 h-4 mr-2" />
                  <span>Achievements</span>
                </div>
              </button>
              <button
                onClick={() => setTab('certifications')}
                className={`px-6 py-3 rounded-lg text-sm font-medium transition-all duration-300 ${
                  tab === 'certifications'
                    ? 'bg-white dark:bg-gray-700 text-blue-600 dark:text-blue-400 shadow-md'
                    : 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400'
                }`}
              >
                <div className="flex items-center">
                  <Certificate className="w-4 h-4 mr-2" />
                  <span>Certifications</span>
                </div>
              </button>
            </div>
          </div>
        </motion.div>

        {tab === 'achievements' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {achievements.map((achievement, index) => (
              <motion.div 
                key={achievement.id} 
                className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-shadow duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex items-start">
                  <div className="flex-shrink-0 mr-4">
                    <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/50 rounded-xl flex items-center justify-center">
                      <Trophy className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                    </div>
                  </div>
                  
                  <div className="flex-grow">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-xl font-bold text-gray-800 dark:text-white pr-4">{achievement.title}</h3>
                      {achievement.badge && (
                        <span className="inline-flex items-center bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300 text-xs font-medium px-3 py-1 rounded-full">
                          <Star className="w-3 h-3 mr-1" />
                          {achievement.badge}
                        </span>
                      )}
                    </div>
                    
                    <p className="text-gray-600 dark:text-gray-300 mb-4">{achievement.description}</p>
                    
                    <div className="flex justify-between items-center">
                      <div className="flex items-center text-gray-500 dark:text-gray-400 text-sm">
                        <Calendar className="w-4 h-4 mr-1" />
                        <span>{achievement.date}</span>
                      </div>
                      
                      {achievement.link && (
                        <a 
                          href={achievement.link} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 text-sm font-medium transition-colors"
                        >
                          <span className="mr-1">View Details</span>
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}

        {tab === 'certifications' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {certifications.map((certification, index) => (
              <motion.div 
                key={certification.id} 
                className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-shadow duration-300 flex"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="w-32 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-gray-800 dark:to-blue-900/20 flex items-center justify-center p-6">
                  <img 
                    src={certification.logo} 
                    alt={certification.issuer} 
                    className="w-full h-auto rounded-lg shadow-md"
                  />
                </div>
                
                <div className="flex-grow p-6">
                  <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">{certification.name}</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-3">{certification.issuer}</p>
                  
                  <div className="flex items-center text-gray-500 dark:text-gray-400 text-sm mb-4">
                    <Calendar className="w-4 h-4 mr-1" />
                    <span>Issued: {certification.date}</span>
                  </div>
                  
                  <a 
                    href={certification.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300 rounded-lg text-sm font-medium hover:bg-blue-200 dark:hover:bg-blue-800 transition-colors"
                  >
                    <FileCheck className="w-4 h-4 mr-2" />
                    <span>View Certificate</span>
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Achievements;