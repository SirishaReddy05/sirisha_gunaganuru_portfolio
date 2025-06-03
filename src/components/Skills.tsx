import React from 'react';
import { motion } from 'framer-motion';
import { skillCategories } from '../data/data';
import { Code, Database, Globe, PenTool as Tool } from 'lucide-react';

const iconMap: Record<string, React.ReactNode> = {
  "Programming Languages": <Code className="w-6 h-6" />,
  "Web Development": <Globe className="w-6 h-6" />,
  "Machine Learning": <Database className="w-6 h-6" />,
  "Tools & Platforms": <Tool className="w-6 h-6" />,
};

const Skills: React.FC = () => {
  return (
    <section 
      id="skills" 
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
            Technical Skills
          </h2>
          <div className="w-24 h-1 bg-blue-600 dark:bg-blue-400 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise and proficiency in various technologies.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div 
              key={category.name}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 border border-gray-100 dark:border-gray-700"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/50 rounded-xl flex items-center justify-center mr-4">
                  <div className="text-blue-600 dark:text-blue-400">
                    {iconMap[category.name]}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-800 dark:text-white">
                  {category.name}
                </h3>
              </div>
              
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div 
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: skillIndex * 0.1 }}
                    viewport={{ once: true }}
                    className="group"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                      <div className="flex-grow">
                        <div className="flex items-center">
                          <h4 className="font-medium text-gray-800 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                            {skill.name}
                          </h4>
                          {skill.description && (
                            <span className="ml-2 px-2 py-1 text-xs bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300 rounded-full">
                              {skill.description}
                            </span>
                          )}
                        </div>
                      </div>
                      <span className="text-sm font-medium text-gray-600 dark:text-gray-400">
                        {skill.proficiency}%
                      </span>
                    </div>
                    
                    <div className="h-2 bg-gray-100 dark:bg-gray-700 rounded-full overflow-hidden">
                      <motion.div 
                        className="h-full rounded-full bg-gradient-to-r from-blue-600 to-blue-400 dark:from-blue-500 dark:to-blue-300"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.proficiency}%` }}
                        transition={{ duration: 1, delay: 0.2 }}
                        viewport={{ once: true }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;