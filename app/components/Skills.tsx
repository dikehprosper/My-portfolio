import React from 'react';
import { Code2, Server, Cog, Blocks } from 'lucide-react';

interface SkillCategory {
  name: string;
  icon: React.ReactNode;
  skills: string[];
  description: string;
}

const Skills: React.FC = () => {
  const skillCategories: SkillCategory[] = [
    {
      name: 'Frontend Development',
      icon: <Code2 className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />,
      description: 'Building responsive and interactive user interfaces with modern frameworks and tools.',
      skills: ['React', 'TypeScript', 'Next.js', 'Redux', 'React Native', 'HTML', 'CSS', 'SCSS', 'Tailwind', 'Material UI']
    },
    {
      name: 'Backend Development',
      icon: <Server className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />,
      description: 'Developing robust server-side applications and APIs for scalable solutions.',
      skills: ['Node.js', 'Express.js', 'MongoDB', 'PostgreSQL', 'REST', 'GraphQL']
    },
    {
      name: 'DevOps & Tools',
      icon: <Cog className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />,
      description: 'Implementing efficient development workflows and deployment strategies.',
      skills: ['Git', 'Docker', 'AWS', 'Jest', 'SEO']
    }
  ];

  return (
    <section id="skills" className="py-24 bg-gray-50 dark:bg-gray-800 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -right-1/2 w-[800px] h-[800px] rounded-full bg-gradient-to-br from-indigo-50/40 to-purple-50/40 dark:from-indigo-900/10 dark:to-purple-900/10 blur-3xl"></div>
        <div className="absolute -bottom-1/2 -left-1/2 w-[800px] h-[800px] rounded-full bg-gradient-to-br from-blue-50/40 to-cyan-50/40 dark:from-blue-900/10 dark:to-cyan-900/10 blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Technical Expertise</h2>
          <div className="w-20 h-1 bg-indigo-600 dark:bg-indigo-400 mx-auto"></div>
          <p className="mt-6 text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Leveraging modern technologies to build scalable, efficient, and user-centric applications.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {skillCategories.map((category) => (
            <div
              key={category.name}
              className="relative group bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/50 to-purple-50/50 dark:from-indigo-900/5 dark:to-purple-900/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="relative">
                <div className="flex items-center gap-4 mb-6">
                  {category.icon}
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">{category.name}</h3>
                </div>

                <p className="text-gray-600 dark:text-gray-300 mb-8">{category.description}</p>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded-full text-sm font-medium hover:bg-indigo-100 dark:hover:bg-indigo-900/30 hover:text-indigo-800 dark:hover:text-indigo-200 transition-colors duration-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Skills Highlight */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-indigo-50 dark:bg-indigo-900/30 border border-indigo-100 dark:border-indigo-800">
            <Blocks size={16} className="text-indigo-600 dark:text-indigo-400 mr-2" />
            <span className="text-sm font-medium text-indigo-600 dark:text-indigo-400">
              Always learning and exploring new technologies
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;