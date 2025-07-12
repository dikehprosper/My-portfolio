"use client"

import React from 'react';
import { ExternalLink } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  liveUrl: string | null;
}

const Projects: React.FC = () => {
  
  const projects: Project[] = [
    {
      id: 1,
      title: 'Seedfi',
      description: 'A lending platform aimed to revolutionize loan industry by combining alternative data with traditional credit scores.',
      image: '/seedfi.png',
      tags: [ 'TypeScript', 'React', 'Redux', ],
      liveUrl: 'https://app.theseedfi.com/'
    },
    {
      id: 2,
      title: 'Hydra',
      description: 'An Electronic Medical Record for keeping track of patient visit and manageing staff for hospitals.',
      image: '/hydra.png',
      tags: ['React', 'Node.js', 'Postgres', 'Redux'],
      liveUrl: 'https://provider.gethydra.io'
    },
    {
      id: 3,
      title: 'Rigourplus',
      description: 'An interactive dashboard that allow users access health services from the comfort of their homes.',
      image: '/rigourplus.png',
      tags: ['Next.js', 'TypeScript', 'Tailwind', 'SEO'],
      liveUrl: 'https://web.rigourplus.com'
    },
    {
      id: 4,
      title: 'OSC',
      description: 'A mobile-first learning platform with courses related to fashion, a marketplace to shop products and machineries.',
      image: '/osc.png',
      tags: ['React', 'Redux', 'TailwindCSS', 'TypeScript'],
      liveUrl: 'https://osccollegeoffashion.com'
    },
    {
      id: 5,
      title: 'BigCheq Consulting Co',
      description: 'A web based platform empowering businesses to achieve extraordinary growth through insightful strategy and innovative technology.',
      image: '/bigcheq.png',
      tags: ['React', 'Tailwind'],
      liveUrl: 'https://www.bigcheqconsultingco.com'
    },
    // {
    //   id: 6,
    //   title: 'Weather Application',
    //   description: 'A responsive weather application with location-based forecasts, interactive maps, and historical data.',
    //   image: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    //   tags: ['JavaScript', 'React', 'REST API', 'CSS'],
    //   liveUrl: null
    // }
  ];
  

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Recent Projects</h2>
          <div className="w-20 h-1 bg-indigo-600 dark:bg-indigo-400 mx-auto"></div>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Here are some of the projects I&apos;ve worked on. Each one presented unique challenges and opportunities to apply my skills.
          </p>
        </div>
        
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div 
              key={project.id}
              className="bg-gray-50 dark:bg-gray-800 rounded-lg overflow-hidden shadow-md border border-gray-100 dark:border-gray-700 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, index) => (
                    <span 
                      key={index}
                      className="text-xs font-medium px-2 py-1 rounded bg-indigo-100 text-indigo-800 dark:bg-indigo-900/30 dark:text-indigo-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex space-x-3">
               
                  
                  {project.liveUrl && (
                    <a 
                      href={project.liveUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-1 px-3 py-2 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-medium rounded transition-colors duration-300"
                    >
                      <ExternalLink size={16} />
                      <span>Live Demo</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;