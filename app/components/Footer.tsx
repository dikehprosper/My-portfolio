import React from "react";
import {Github, Linkedin, Twitter} from "lucide-react";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className='bg-gray-900 text-white py-12'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex flex-col md:flex-row justify-between items-center'>
          <div className='mb-8 md:mb-0'>
            <a
              href='#home'
              className='text-xl font-bold tracking-tighter text-emerald-400'
            >
              DIKE<span className='text-white'>PROSPER</span>
            </a>
            <p className='mt-2 text-gray-400 text-sm'>
              Full Stack Developer specializing in modern web technologies.
            </p>
          </div>

          <div className='w-full flex'>
            <div
              className='flex 
    flex-row 
    gap-16 sm:gap-12 
    w-full sm:w-auto 
    ml-0 sm:ml-auto 
   sm:justify-start'
            >
              {/* Navigation */}
              <div>
                <h3 className='text-sm font-semibold uppercase tracking-wider text-gray-400 mb-4'>
                  Navigation
                </h3>
                <ul className='space-y-3'>
                  <li>
                    <a href='#home' className='text-gray-300 hover:text-white'>
                      Home
                    </a>
                  </li>
                  <li>
                    <a href='#about' className='text-gray-300 hover:text-white'>
                      About
                    </a>
                  </li>
                  <li>
                    <a
                      href='#skills'
                      className='text-gray-300 hover:text-white'
                    >
                      Skills
                    </a>
                  </li>
                  <li>
                    <a
                      href='#projects'
                      className='text-gray-300 hover:text-white'
                    >
                      Projects
                    </a>
                  </li>
                  <li>
                    <a
                      href='#contact'
                      className='text-gray-300 hover:text-white'
                    >
                      Contact
                    </a>
                  </li>
                </ul>
              </div>

              {/* Social */}
              <div>
                <h3 className='text-sm font-semibold uppercase tracking-wider text-gray-400 mb-4'>
                  Social
                </h3>
                <div className='flex space-x-4'>
                  <a
                    href='https://github.com/dikehprosper'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='text-gray-400 hover:text-white transition-colors'
                  >
                    <Github size={20} />
                  </a>
                  <a
                    href='https://www.linkedin.com/in/dikeprosper'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='text-gray-400 hover:text-white transition-colors'
                  >
                    <Linkedin size={20} />
                  </a>
                  <a
                    href='https://x.com/DikeProsper_'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='text-gray-400 hover:text-white transition-colors'
                  >
                    <Twitter size={20} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center'>
          <p className='text-gray-400 text-sm'>
            © {currentYear} All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
