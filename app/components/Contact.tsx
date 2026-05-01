import React from "react";
import {Mail, Linkedin, Github, Twitter} from "lucide-react";
const contactItems = [
  {
    icon: Mail,
    label: "Email",
    value: "dikehprosper@gmail.com",
    href: "mailto:dikehprosper@gmail.com",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/dikeprosper",
    href: "https://www.linkedin.com/in/dikeprosper",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/dikehprosper",
    href: "https://github.com/dikehprosper",
  },
  {
    icon: Twitter,
    label: "Twitter",
    value: "@DikeProsper_",
    href: "https://x.com/DikeProsper_",
  },
];

const Contact: React.FC = () => {
  return (
    <section
      id='contact'
      className='py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300'
    >
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='text-center mb-16'>
          <h2 className='text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4'>
            Get In Touch
          </h2>
          <div className='w-20 h-1 bg-emerald-600 dark:bg-emerald-400 mx-auto'></div>
          <p className='mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto'>
            Interested in working with me? Feel free to reach out for
            collaborations.
          </p>
        </div>

        <div className='w-full mx-auto '>
          <div className='rounded-xl shadow-md lg:px-8 lg:py-8 px-4 py-4 border border-gray-100 dark:border-gray-700'>
            <h3 className='text-2xl font-bold text-gray-900 dark:text-white mb-6 justify-center flex'>
              Contact Information
            </h3>

            <div className='flex flex-col lg:flex-row lg:gap-10 gap-6 justify-between'>
              {contactItems.map((item, index) => {
                const Icon = item.icon;

                return (
                  <div key={index} className='flex items-center gap-4'>
                    <Icon className='w-6 h-6 text-emerald-600 dark:text-emerald-400 mt-1' />
                    <div>
                      <h4 className='text-lg font-medium text-gray-900 dark:text-white'>
                        {item.label}
                      </h4>

                      <a
                        href={item.href}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='text-gray-600 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors underline break-all'
                      >
                        {item.value}
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
