import React from 'react';
import { ArrowRight, Code2, Sparkles } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="min-h-screen relative overflow-hidden bg-gradient-to-br from-gray-50 to-white dark:from-gray-950 dark:to-gray-900">
      {/* Animated background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -right-1/2 w-[1000px] h-[1000px] rounded-full bg-gradient-to-br from-indigo-100/30 via-purple-100/30 to-blue-100/30 dark:from-indigo-900/20 dark:via-purple-900/20 dark:to-blue-900/20 blur-3xl animate-gradient"></div>
        <div className="absolute -bottom-1/2 -left-1/2 w-[1000px] h-[1000px] rounded-full bg-gradient-to-br from-blue-100/30 via-cyan-100/30 to-indigo-100/30 dark:from-blue-900/20 dark:via-cyan-900/20 dark:to-indigo-900/20 blur-3xl animate-gradient"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-32">
        <div className="flex flex-col items-center text-center space-y-12">
          {/* Animated badge */}
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-900/30 border border-indigo-100 dark:border-indigo-800 animate-fadeInUp [animation-delay:200ms]">
            <Code2 size={14} className="text-indigo-600 dark:text-indigo-400 mr-2" />
            <span className="text-sm font-medium text-indigo-600 dark:text-indigo-400">Full Stack Developer</span>
          </div>

          {/* Animated main heading */}
          <div className="max-w-4xl space-y-6">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white leading-tight animate-fadeInUp [animation-delay:400ms]">
              Crafting Digital <span className="relative inline-block">
                Experiences
                <Sparkles className="absolute -top-8 -right-8 text-indigo-600 dark:text-indigo-400 animate-float" size={24} />
              </span> with Code
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto animate-fadeInUp [animation-delay:600ms]">
              Transforming complex challenges into elegant solutions through modern web technologies and innovative thinking.
            </p>
          </div>

          {/* Animated CTA buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 animate-fadeInUp [animation-delay:800ms]">
            <a 
              href="#projects" 
              className="group flex items-center gap-2 px-8 py-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-full text-lg font-semibold transition-all duration-300 hover:gap-4 hover:scale-105"
            >
              View Projects
              <ArrowRight className="transition-transform group-hover:translate-x-1" size={20} />
            </a>
            <a 
              href="#contact" 
              className="group px-8 py-4 border-2 border-gray-900 dark:border-white hover:bg-gray-900 dark:hover:bg-white text-gray-900 dark:text-white hover:text-white dark:hover:text-gray-900 rounded-full text-lg font-semibold transition-all duration-300 hover:scale-105"
            >
              Let&apos;s Connect
            </a>
          </div>

          {/* Animated tech stack */}
          <div className="w-full max-w-3xl mt-16 animate-fadeInUp [animation-delay:1000ms]">
            <p className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-6">Trusted Technologies</p>
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-8 items-center justify-items-center">
              {['React', 'Node.js', 'TypeScript', 'AWS', 'MongoDB', 'Docker'].map((tech, index) => (
                <span 
                  key={tech} 
                  className="text-sm font-mono text-gray-600 dark:text-gray-300 opacity-0 animate-fadeInRight"
                  style={{ animationDelay: `${1200 + index * 100}ms`, animationFillMode: 'forwards' }}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Animated scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-fadeInUp [animation-delay:1800ms]">
          <div className="w-6 h-10 border-2 border-gray-400 dark:border-gray-500 rounded-full p-1">
            <div className="w-1.5 h-1.5 bg-gray-400 dark:bg-gray-500 rounded-full animate-scroll"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;