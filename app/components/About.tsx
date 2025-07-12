import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">About Me</h2>
          <div className="w-20 h-1 bg-indigo-600 dark:bg-indigo-400 mx-auto"></div>
        </div>
        
        <div className="flex mx-auto items-center w-[60%] text-center">
          <div className="space-y-6">
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              I&apos;m a <span className="font-semibold text-indigo-600 dark:text-indigo-400">result-driven Full Stack Software Engineer</span> passionate about building scalable and efficient web applications that solve real-world problems.
            </p>
            
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              With expertise spanning both frontend and backend development, I bring ideas to life using modern technologies and best practices. I thrive in collaborative environments where innovation and attention to detail are valued.
            </p>
            
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              My approach combines technical excellence with user-centered design principles to create intuitive, high-performing applications that exceed expectations.
            </p>
            
            <div className="pt-4">
              <a 
                href="#contact" 
                className="inline-flex items-center px-6 py-3 rounded-md bg-indigo-600 hover:bg-indigo-700 text-white font-medium transition-colors duration-300"
              >
                Get in Touch
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;