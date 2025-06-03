import React from 'react';
import { motion } from 'framer-motion';
import { socialProfiles } from '../data/data';
import { ArrowUpRight, Github as GitHub, Linkedin, Mail, Code, Code2 } from 'lucide-react';

const iconMap: Record<string, React.ReactNode> = {
  github: <GitHub className="w-5 h-5" />,
  linkedin: <Linkedin className="w-5 h-5" />,
  mail: <Mail className="w-5 h-5" />,
  code: <Code className="w-5 h-5" />,
  'code-2': <Code2 className="w-5 h-5" />,
};

const Profiles: React.FC = () => {
  return (
    <section 
      id="profiles" 
      className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-900 dark:to-blue-900"
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
            Coding Profiles
          </h2>
          <div className="w-24 h-1 bg-blue-700 dark:bg-blue-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Track my progress and achievements across various coding platforms and social profiles.
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          {socialProfiles.map((profile, index) => (
            <motion.a 
              key={profile.name}
              href={profile.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden border border-gray-100 dark:border-gray-700 hover:shadow-lg transition-shadow"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mr-4 text-blue-700 dark:text-blue-400">
                      {iconMap[profile.icon]}
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-800 dark:text-white">{profile.name}</h3>
                      {profile.stats && (
                        <p className="text-sm text-gray-600 dark:text-gray-400">{profile.stats}</p>
                      )}
                    </div>
                  </div>
                  <div className="w-8 h-8 rounded-full flex items-center justify-center bg-gray-100 dark:bg-gray-700 group-hover:bg-blue-100 dark:group-hover:bg-blue-900 transition-colors">
                    <ArrowUpRight className="w-4 h-4 text-gray-600 dark:text-gray-400 group-hover:text-blue-700 dark:group-hover:text-blue-400 transition-colors" />
                  </div>
                </div>
                
                {profile.name === 'GitHub' && (
                  <div className="rounded-lg bg-gray-50 dark:bg-gray-900 p-3 text-sm text-gray-600 dark:text-gray-400 border border-gray-100 dark:border-gray-700">
                    
                    <div className="h-2 bg-gray-200 dark:bg-gray-800 rounded-full overflow-hidden">
                      <div className="h-full bg-green-500 rounded-full w-[70%]"></div>
                    </div>
                  </div>
                )}
                
                {profile.name === 'LeetCode' && (
                  <div className="rounded-lg bg-gray-50 dark:bg-gray-900 p-3 text-sm text-gray-600 dark:text-gray-400 border border-gray-100 dark:border-gray-700">
                    <div className="grid grid-cols-3 gap-2 text-center">
                      <div>
                        <div className="font-bold text-green-500">Easy</div>
                        <div>250+</div>
                      </div>
                      <div>
                        <div className="font-bold text-yellow-500">Medium</div>
                        <div>50+</div>
                      </div>
                    </div>
                  </div>
                )}
                
                {profile.name === 'CodeForces' && (
                  <div className="rounded-lg bg-gray-50 dark:bg-gray-900 p-3 text-sm text-gray-600 dark:text-gray-400 border border-gray-100 dark:border-gray-700">
                    <div className="flex items-center justify-between">
                      <span>Rating:</span>
                      <span className="font-medium text-blue-600 dark:text-blue-400">1300+</span>
                    </div>
                  </div>
                )}
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Profiles;