"use client"

import React from 'react';
import {ExternalLink, PlayIcon, Github} from "lucide-react";
import {faCircle} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
interface Project {
  id: number;
  title: string;
  description: string;
  title_description1?: string;
  description1?: string;
  title_description2?: string;
  description2?: string;
  title_description3?: string;
  description3?: string;
  title_description4?: string;
  description4?: string;
  title_description5?: string;
  description5?: string;
  title_description6?: string;
  description6?: string;
  title_description7?: string;
  description7?: string;
  image: string;
  tags: string[];
  liveUrl?: string | null;
  Github_Code?: string | null;
  youtube_link?: string | null;
  frontend?: string | null;
  backend?: string | null;
}

const Projects: React.FC = () => {
  const projects: Project[] = [
    {
      id: 1,
      title: "LAMEDCASH",
      description:
        "I designed, developed, and deployed the entire system both the mobile application (frontend) and RESTful backend API to deliver a seamless user experience focused on security, real-time interactions through posts from various users, list creation and financial transactions",
      title_description1: "User Authentication:",
      description1:
        "Secure registration, login, pin and password reset functionality.",
      title_description2: "Pin Authentication:",
      description2:
        "Additional security layer using pin registered by the user.",
      title_description3: "Secure Transaction:",
      description3:
        "View wallet balance, Deposit, transfer and withdraw funds securely while seeing transaction history in realtime.",
      title_description4: "Referral System:",
      description4:
        "Unique referral links to encourage user growth and engagement.",
      title_description5: "Community Feed:",
      description5: "Users can post updates, interact through comments/likes.",
      title_description6: "Prediction Match Engine:",
      description6:
        "Business logic for creating, resolving, and verifying match predictions.",
      title_description7: "Other Features:",
      description7:
        "Supports light/dark themes, profile picture update, Device haptic feedback for UI interactions, Language switch, push noification, alerts via nodemailer, Customised Toast messages for key actions",
      image: "/lamedcash.png",
      tags: [
        "Frontend: React-native, Tailwind CSS, Redux",
        "Backend: Node.js, API Routes, Express.js, MongoDB, Multer, Sharp,JWT, Mongoose, Nodemailer",
        "Authentication & Security: JWT, bcrypt.js, Two-Factor Authentication (TOTP)",
      ],
      frontend: "https://github.com/dikehprosper/lamedcashapp",
      backend: "https://github.com/dikehprosper/TheBetFundrAppBackend",
      youtube_link:
        "https://drive.google.com/file/d/18WdJHDzuxKAcB-6T2RUcPjdAjTqPSnYf/view?usp=sharing",
    },
    {
      id: 2,
      title: "MiniLab OS",
      description:
        "I designed, developed, and deployed a fully responsive laboratory management system featuring mock data and real-time UI interactions",

      title_description1: "Patient Management:",
      description1:
        "Add, search, and manage patients with test assignment, contact info, and payment status tracking.",

      title_description2: "Test & Payment Tracking:",
      description2:
        "Record payments, view paid/partial/unpaid statuses with progress bars, and maintain a full transaction history with references and payment methods.",

      title_description3: "Result Management:",
      description3:
        "Input test results per sample/patient, and view a running result history.",

      title_description7: "Other Features:",
      description7:
        "Fully responsive across mobile, tablet, and desktop. Mobile-first bottom navigation with card layouts. Desktop sidebar with data tables and 2-column grid. Live dashboard charts (bar + doughnut via Chart.js), toast notifications for all key actions, and avatar generation from initials.",

      image: "/minilab-os.png",

      tags: [],

      liveUrl: "https://lab-management-kappa.vercel.app/",
    },
  ];

  return (
    <section
      id='projects'
      className='py-20 bg-white dark:bg-gray-900 transition-colors duration-300'
    >
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='text-center mb-16'>
          <h2 className='text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4'>
            Projects
          </h2>
          <div className='w-20 h-1 bg-emerald-600 dark:bg-emerald-400 mx-auto'></div>
          <p className='mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto'>
            Here are some of the projects I&apos;ve worked on. Each one
            presented unique challenges and opportunities to apply my skills.
          </p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {projects.map((project) => (
            <div
              key={project.id}
              className='bg-gray-50 dark:bg-gray-800 rounded-lg overflow-hidden shadow-md border border-gray-100 dark:border-gray-700 hover:shadow-lg transition-shadow duration-300'
            >
              <div className='relative h-48 overflow-hidden'>
                <img
                  src={project.image}
                  alt={project.title}
                  className='w-full h-full object-cover transition-transform duration-500 hover:scale-110'
                />
              </div>

              <div className='p-6'>
                <h3 className='text-xl font-bold text-gray-900 dark:text-white mb-2'>
                  {project.title}
                </h3>
                <p className='text-gray-600 dark:text-gray-300 mb-4'>
                  {project.description}
                </p>
                {project.description1 && (
                  <p className='mb-4 text-gray-900 dark:text-gray-300'>
                    <FontAwesomeIcon
                      icon={faCircle}
                      style={{
                        fontSize: "6px",
                        marginBottom: "3px",
                        marginRight: "4px",
                      }}
                    />
                    <span className='font-bold text-gray-900 dark:text-white'>
                      {project.title_description1}{" "}
                    </span>{" "}
                    {project.description1}
                  </p>
                )}
                {project.description2 && (
                  <p className='mb-4 text-gray-900 dark:text-gray-300'>
                    <FontAwesomeIcon
                      icon={faCircle}
                      style={{
                        fontSize: "6px",
                        marginBottom: "3px",
                        marginRight: "4px",
                      }}
                    />
                    <span className='font-bold text-gray-900 dark:text-white'>
                      {project.title_description2}{" "}
                    </span>{" "}
                    {project.description2}
                  </p>
                )}
                {project.description3 && (
                  <p className='mb-4 text-gray-900 dark:text-gray-300'>
                    <FontAwesomeIcon
                      icon={faCircle}
                      style={{
                        fontSize: "6px",
                        marginBottom: "3px",
                        marginRight: "4px",
                      }}
                    />
                    <span className='font-bold text-gray-900 dark:text-white'>
                      {project.title_description3}{" "}
                    </span>{" "}
                    {project.description3}
                  </p>
                )}
                {project.description4 && (
                  <p className='mb-4 text-gray-900 dark:text-gray-300'>
                    <FontAwesomeIcon
                      icon={faCircle}
                      style={{
                        fontSize: "6px",
                        marginBottom: "3px",
                        marginRight: "4px",
                      }}
                    />
                    <span className='font-bold text-gray-900 dark:text-white'>
                      {project.title_description4}{" "}
                    </span>{" "}
                    {project.description4}
                  </p>
                )}
                {project.description5 && (
                  <p className='mb-4 text-gray-900 dark:text-gray-300'>
                    <FontAwesomeIcon
                      icon={faCircle}
                      style={{
                        fontSize: "6px",
                        marginBottom: "3px",
                        marginRight: "4px",
                      }}
                    />
                    <span className='font-bold text-gray-900 dark:text-white'>
                      {project.title_description5}{" "}
                    </span>{" "}
                    {project.description5}
                  </p>
                )}
                {project.description6 && (
                  <p className='mb-4 text-gray-900 dark:text-gray-300'>
                    <FontAwesomeIcon
                      icon={faCircle}
                      style={{
                        fontSize: "6px",
                        marginBottom: "3px",
                        marginRight: "4px",
                      }}
                    />
                    <span className='font-bold text-gray-900 dark:text-white'>
                      {project.title_description6}{" "}
                    </span>{" "}
                    {project.description6}
                  </p>
                )}
                {project.description7 && (
                  <p className='mb-4 text-gray-900 dark:text-gray-300'>
                    <FontAwesomeIcon
                      icon={faCircle}
                      style={{
                        fontSize: "6px",
                        marginBottom: "3px",
                        marginRight: "4px",
                      }}
                    />
                    <span className='font-bold text-gray-900 dark:text-white'>
                      {project.title_description7}{" "}
                    </span>{" "}
                    {project.description7}
                  </p>
                )}
                {project.tags &&
                  project.tags.length > 0 && (
                    <div className='flex flex-wrap gap-2 mb-8'>
                      {project.tags.map((tag, index) => (
                        <span
                          key={index}
                          className='text-xs font-medium px-2 py-1 rounded bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-300'
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                <div className='flex justify-between items-center gap-2 w-full max-w-full flex-shrink'>
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='flex-1 min-w-0 flex items-center justify-center gap-1 px-2 py-2 bg-emerald-600 hover:bg-emerald-700 text-white text-xs sm:text-sm font-medium rounded transition-colors duration-300'
                    >
                      <ExternalLink size={12} />
                      <span className='truncate'>Live Demo</span>
                    </a>
                  )}
                  {project.frontend && (
                    <a
                      href={project.frontend}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='flex-1 min-w-0 flex items-center justify-center gap-1 px-2 py-2 bg-gray-800 hover:bg-gray-900 text-white text-xs sm:text-sm font-medium rounded transition-colors duration-300'
                    >
                      <Github size={12} />
                      <span className='truncate'>Frontend</span>
                    </a>
                  )}
                  {project.backend && (
                    <a
                      href={project.backend}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='flex-1 min-w-0 flex items-center justify-center gap-1 px-2 py-2 bg-gray-800 hover:bg-gray-900 text-white text-xs sm:text-sm font-medium rounded transition-colors duration-300'
                    >
                      <Github size={12} />
                      <span className='truncate'>Backend</span>
                    </a>
                  )}

                  {project.Github_Code && (
                    <a
                      href={project.Github_Code}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='flex-1 min-w-0 flex items-center justify-center gap-1 px-2 py-2 bg-gray-800 hover:bg-gray-900 text-white text-xs sm:text-sm font-medium rounded transition-colors duration-300'
                    >
                      <Github size={12} />
                      <span className='truncate'>GitHub Code</span>
                    </a>
                  )}

                  {project.youtube_link && (
                    <a
                      href={project.youtube_link}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='flex-1 min-w-0 flex items-center justify-center gap-1 px-2 py-2 bg-red-600 hover:bg-red-700 text-white text-xs sm:text-sm font-medium rounded transition-colors duration-300'
                    >
                      <span className='truncate'>video</span>
                      <PlayIcon size={12} />
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