import React from 'react';
import { motion } from 'framer-motion';
import { socialProfiles } from '../data/data';
import { Mail, Send, Github as GitHub, Linkedin, Code, Code2 } from 'lucide-react';

const iconMap: Record<string, React.ReactNode> = {
  github: <GitHub className="w-5 h-5" />,
  linkedin: <Linkedin className="w-5 h-5" />,
  mail: <Mail className="w-5 h-5" />,
  code: <Code className="w-5 h-5" />,
  'code-2': <Code2 className="w-5 h-5" />,
};

const Contact: React.FC = () => {
  return (
    <section 
      id="contact" 
      className="py-20 bg-gray-50 dark:bg-gray-800"
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
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-blue-700 dark:bg-blue-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Feel free to reach out for collaboration opportunities or to discuss potential projects.
          </p>
        </motion.div>
        
        <div className="max-w-5xl mx-auto md:flex gap-8">
          <motion.div 
            className="md:w-1/2 mb-8 md:mb-0"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="bg-white dark:bg-gray-900 rounded-xl shadow-md p-8 border border-gray-100 dark:border-gray-700 h-full">
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                {socialProfiles.map((profile) => (
                  <a 
                    key={profile.name}
                    href={profile.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center p-4 bg-gray-50 dark:bg-gray-800 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors group"
                  >
                    <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mr-4 text-blue-700 dark:text-blue-400">
                      {iconMap[profile.icon]}
                    </div>
                    <div className="flex-grow">
                      <h4 className="text-md font-medium text-gray-800 dark:text-white group-hover:text-blue-700 dark:group-hover:text-blue-400 transition-colors">
                        {profile.name}
                      </h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {profile.url.replace('mailto:', '')}
                      </p>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            className="md:w-1/2"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="bg-white dark:bg-gray-900 rounded-xl shadow-md p-8 border border-gray-100 dark:border-gray-700">
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">Send a Message</h3>
              
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Your Name
                  </label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                    placeholder="John Doe"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Your Email
                  </label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                    placeholder="john@example.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Subject
                  </label>
                  <input 
                    type="text" 
                    id="subject" 
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                    placeholder="Job Opportunity"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Message
                  </label>
                  <textarea 
                    id="message" 
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                    placeholder="I'd like to discuss a potential opportunity..."
                  ></textarea>
                </div>
                
                <button 
                  type="submit" 
                  className="w-full py-3 px-6 bg-blue-700 hover:bg-blue-800 text-white rounded-lg flex items-center justify-center gap-2 transition-colors"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Message</span>
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;