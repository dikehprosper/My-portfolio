import React from 'react';
import { Mail, Linkedin, Github, Twitter } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Get In Touch</h2>
          <div className="w-20 h-1 bg-indigo-600 dark:bg-indigo-400 mx-auto"></div>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Interested in working together? Feel free to reach out for collaborations or just a friendly hello.
          </p>
        </div>
        
        <div className="w-full mx-auto ">
          <div className="bg-white dark:bg-gray-900 rounded-lg shadow-md p-8 border border-gray-100 dark:border-gray-700">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Contact Information</h3>
            
            <div className="flex flex-col lg:flex-row gap-4">
              <div className="flex items-center space-x-4">
                <Mail className="w-6 h-6 text-indigo-600 dark:text-indigo-400 mt-0.5" />
                <div>
                  <h4 className="text-lg font-medium text-gray-900 dark:text-white">Email</h4>
                  <a href="mailto:amadichibuike72@gmail.com" className="text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                    amadichibuike72@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <Linkedin className="w-6 h-6 text-indigo-600 dark:text-indigo-400 mt-0.5" />
                <div>
                  <h4 className="text-lg font-medium text-gray-900 dark:text-white">LinkedIn</h4>
                  <a href="https://www.linkedin.com/in/chibuike-amadi-b21009230/" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                  https://www.linkedin.com/in/chibuike-amadi-b21009230
                  </a>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <Github className="w-6 h-6 text-indigo-600 dark:text-indigo-400 mt-0.5" />
                <div>
                  <h4 className="text-lg font-medium text-gray-900 dark:text-white">GitHub</h4>
                  <a href="https://github.com/amadijeffrey" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                    github.com/amadijeffrey
                  </a>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <Twitter className="w-6 h-6 text-indigo-600 dark:text-indigo-400 mt-0.5" />
                <div>
                  <h4 className="text-lg font-medium text-gray-900 dark:text-white">Twitter</h4>
                  <a href="https://x.com/I_amjeffree" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                    @I_amjeffree
                  </a>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Contact;