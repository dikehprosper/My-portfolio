import React from "react";
import Image from "next/image";
import {
  ExternalLink,
  Github,
  Play,
  Smartphone,
  Server,
  Database,
} from "lucide-react";
import Reveal from "./Reveal";

interface Feature {
  title: string;
  text: string;
}

interface Side {
  label: string;
  summary: string;
  icon: React.ReactNode;
  stack: string[];
  features: Feature[];
  /** Leave out until the repo is public; the link simply won't render. */
  repo?: string;
}

interface Project {
  title: string;
  kind?: string;
  overview: string;
  image?: string;
  video?: string;
  livelink?: string;
  frontend: Side;
  backend: Side;
}

/* ------------------------------------------------------------------ */
/* DIGISHELF                                                           */
/* ------------------------------------------------------------------ */

const digishelf: Project = {
  title: "Digishelf",
  kind: "Digital products marketplace",
  livelink: "https://digishelf-five.vercel.app/",
  image: "/digishelf.png",
  overview:
    "I built a full-stack marketplace where customers can discover and purchase digital products, creators can run their storefronts, and admins can manage the platform.",
  frontend: {
    label: "Frontend",
    summary: "The storefront, creator studio and admin console.",
    icon: <Smartphone size={18} />,
    stack: [
      "React 19",
      "React Router",
      "Redux Toolkit",
      "RTK Query",
      "Tailwind CSS",
    ],
    features: [
      {
        title: "Storefront and customer accounts",
        text: "Browse and search products, view creator pages, manage a cart and wishlist, check out, and access purchased downloads from a personal library.",
      },
      {
        title: "Creator dashboard",
        text: "Set up a profile and storefront, manage products and uploads, organize course curriculum, create coupons, and review sales and payouts.",
      },
      {
        title: "Admin dashboard",
        text: "Manage users, moderate products and reviews, oversee orders, refunds, coupons and payouts, and configure reports, banners and platform settings.",
      },
      {
        title: "Authentication",
        text: "Register, sign in, reset passwords and verify email with secure cookie-based sessions.",
      },
    ],
  },
  backend: {
    label: "Backend",
    summary: "The marketplace API and business logic.",
    icon: <Server size={18} />,
    stack: [
      "Node.js",
      "Express 5",
      "MongoDB",
      "Mongoose",
      "Paystack",
      "Cloudinary",
    ],
    features: [
      {
        title: "Catalog and commerce",
        text: "Product discovery, creator storefronts, cart and wishlist, checkout, orders, coupons, reviews and payment verification.",
      },
      {
        title: "Creator services",
        text: "Creator profiles, product and curriculum management, sales reporting, bank details and payout workflows.",
      },
      {
        title: "Admin operations",
        text: "Administrative APIs for users, product and review moderation, orders and refunds, payouts, reports, banners, settings and audit history.",
      },
      {
        title: "Accounts and downloads",
        text: "Secure cookie sessions, refresh-token rotation, email verification, and short-lived signed links for private product downloads.",
      },
    ],
  },
};

/* ------------------------------------------------------------------ */
/* KONFAM                                                              */
/* ------------------------------------------------------------------ */

const konfam: Project = {
  title: "Konfam",
  kind: "Prediction markets platform",
  image: "/konfam.png",
  livelink: "https://konfam-rust.vercel.app/",
  overview:
    "I built Konfam as a full-stack prediction markets platform. Users can explore markets, trade on outcomes, and manage their portfolio through a responsive web app backed by a custom API.",
  frontend: {
    label: "Frontend",
    summary: "The responsive web application.",
    icon: <Smartphone size={18} />,
    stack: [
      "React 19",
      "React Router",
      "Redux Toolkit",
      "TanStack Query",
      "Tailwind CSS",
      "Socket.IO Client",
    ],
    features: [
      {
        title: "Market discovery and trading",
        text: "Browse markets, view market details and trade on outcomes.",
      },
      {
        title: "Portfolio and wallet",
        text: "Review portfolio activity, wallet balances, deposits and transaction history.",
      },
      {
        title: "Accounts and notifications",
        text: "Email and Google sign-in, watchlists, account settings and in-app notifications.",
      },
      {
        title: "Responsive experience",
        text: "Mobile-friendly layouts with light and dark themes.",
      },
    ],
  },
  backend: {
    label: "Backend",
    summary: "The API and platform services.",
    icon: <Server size={18} />,
    stack: [
      "Node.js",
      "Express 5",
      "PostgreSQL",
      "Sequelize",
      "JWT",
      "Google OAuth",
    ],
    features: [
      {
        title: "Authentication",
        text: "Account registration, login, Google sign-in, password recovery and token verification.",
      },
      {
        title: "Markets and trading",
        text: "API services for market data, trades and portfolio activity.",
      },
      {
        title: "Wallet services",
        text: "Wallet balances, deposits and transaction history.",
      },
      {
        title: "Account services",
        text: "Profile, watchlist, settings and notification APIs backed by PostgreSQL.",
      },
    ],
  },
};

/* ------------------------------------------------------------------ */
/* LAMEDCASH                                                           */
/* ------------------------------------------------------------------ */

const lamedcash: Project = {
  title: "LAMEDCASH",
  overview:
    "I designed, built and deployed the whole system: the mobile app and the REST API behind it. It focuses on security, real-time interaction through user posts, list creation and financial transactions.",
  image: "/lamedcash.png",
  video:
    "https://drive.google.com/file/d/18WdJHDzuxKAcB-6T2RUcPjdAjTqPSnYf/view?usp=sharing",
  frontend: {
    label: "Frontend",
    summary: "The mobile app.",
    icon: <Smartphone size={18} />,
    stack: ["React Native", "Tailwind CSS", "Redux"],
    features: [
      {
        title: "Screens",
        text: "Registration, login, PIN setup and password reset.",
      },
      {
        title: "Other Screens",
        text: "Dashboard: deposits and withdrawals with transaction history updating in real time.\n\nCommunity Feed: post updates and interact through comments and likes.\n\nPersonalisation & Feedback: light and dark themes, profile picture updates and language switching, haptic feedback on interactions, and custom toast messages for key actions.",
      },
    ],
    repo: "https://github.com/dikehprosper/lamedcashapp",
  },
  backend: {
    label: "Backend",
    summary: "The API.",
    icon: <Server size={18} />,
    stack: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "Multer",
      "Sharp",
      "Nodemailer",
    ],
    features: [
      {
        title: "Authentication and security",
        text: "JWT sessions, bcrypt.js password hashing and two-factor authentication (TOTP).",
      },
      {
        title: "PIN verification",
        text: "A second security layer using the PIN each user registers.",
      },
      {
        title: "Secure transactions",
        text: "Endpoints for deposits, transfers and withdrawals, with a full transaction history.",
      },
      {
        title: "Referral system",
        text: "Unique referral links that encourage user growth.",
      },
      {
        title: "Community feed",
        text: "Logic for Users to post updates and interact through comments and likes.",
      },
      {
        title: "Notifications and uploads",
        text: "Push notifications, email alerts through Nodemailer, and image handling with Multer and Sharp.",
      },
    ],
    repo: "https://github.com/dikehprosper/TheBetFundrAppBackend",
  },
};

/* ------------------------------------------------------------------ */
/* Core starter templates (one shared frontend, two backends)          */
/* ------------------------------------------------------------------ */

const coreFrontend: Side = {
  label: "Frontend",
  summary:
    "A React app with a landing page, authentication and a dashboard already wired up.",
  icon: <Smartphone size={18} />,
  stack: [
    "React 19",
    "React Router",
    "Redux Toolkit",
    "TanStack Query",
    "Tailwind CSS",
    "Axios",
  ],
  features: [
    {
      title: "Landing page",
      text: "A public landing page that sends signed-in users straight to their dashboard.",
    },
    {
      title: "Authentication screens",
      text: "Register, login, forgot password and reset password, plus Google sign-in.",
    },
    {
      title: "Route guards",
      text: "Public routes redirect signed-in users away. Protected routes keep signed-out users out.",
    },
    {
      title: "Dashboard shell",
      text: "A sidebar layout ready for your own pages.",
    },
    {
      title: "State and data",
      text: "RTK Query for the auth API, with redux-persist keeping the session.",
    },
    {
      title: "Theme, toasts and modals",
      text: "Light and dark theme toggle, with toast and modal providers built in.",
    },
  ],
  repo: "https://github.com/dikehprosper/core",
};

const coreMongo: Project = {
  title: "Core with MongoDB",
  kind: "Starter template",
  overview:
    "A professional-grade, industry-standard full-stack starter template for authentication and user management on a non-relational database. Clone it, add your environment variables and start on your own features instead of rebuilding from scratch.",
  image: "/core.png",
  livelink: "https://job-board-ebon-sigma.vercel.app/",
  frontend: coreFrontend,
  backend: {
    label: "Backend",
    summary: "An Express API on MongoDB.",
    icon: <Database size={18} />,
    stack: ["Node.js", "Express 5", "MongoDB", "Passport", "JWT"],
    features: [
      {
        title: "Auth endpoints",
        text: "Register, login, Google callback, forgot password and reset by token, plus a protected user profile route and a health check.",
      },
      {
        title: "Security middleware",
        text: "Helmet, HPP, CORS, rate limiting and slow-down on the auth routes, with Joi request validation.",
      },
      {
        title: "Feature flags",
        text: "Turn login, signup, Google auth, forgot password and reset on or off from the environment.",
      },
      {
        title: "Email and storage",
        text: "Password-reset emails through AWS SES, with AWS configured for file storage.",
      },
      {
        title: "Clean structure",
        text: "Routes, controllers, services and repositories kept apart, with Pino logging. Current Tests run on Node's built-in runner.",
      },
    ],
    repo: "https://github.com/dikehprosper/core-api-mongodb",
  },
};

const corePostgres: Project = {
  title: "Core with PostgreSQL",
  kind: "Starter template",
  overview:
    "A professional-grade, industry-standard full-stack starter template for authentication and user management on a relational database. Clone it, add your environment variables and start on your own features instead of rebuilding from scratch.",
  image: "/core.png",
  livelink: "https://job-board-ebon-sigma.vercel.app/",
  frontend: coreFrontend,
  backend: {
    label: "Backend",
    summary: "An Express API on PostgreSQL.",
    icon: <Database size={18} />,
    stack: [
      "Node.js",
      "Express 5",
      "PostgreSQL",
      "Sequelize",
      "Passport",
      "JWT",
    ],
    features: [
      {
        title: "Auth endpoints",
        text: "Register, login, Google callback, forgot password and reset by token, plus a protected user profile route and a health check.",
      },
      {
        title: "Security middleware",
        text: "Helmet, HPP, CORS, rate limiting and slow-down on the auth routes, with Joi request validation.",
      },
      {
        title: "Feature flags",
        text: "Turn login, signup, Google auth, forgot password and reset on or off from the environment.",
      },
      {
        title: "Email and storage",
        text: "Password-reset emails through AWS SES, with AWS configured for file storage.",
      },
      {
        title: "Clean structure",
        text: "Routes, controllers, services and repositories kept apart, with Pino logging. Current Tests run on Node's built-in runner plus a PostgreSQL integration test that runs against a dedicated test database.",
      },
    ],
    repo: "https://github.com/dikehprosper/core-api-postgres",
  },
};

const projects: Project[] = [
  digishelf,
  konfam,
  coreMongo,
  corePostgres,
  lamedcash,
];

/* ------------------------------------------------------------------ */
/* UI                                                                  */
/* ------------------------------------------------------------------ */

const SidePanel: React.FC<{ side: Side }> = ({ side }) => (
  <div className="flex h-full flex-col rounded-2xl border border-line bg-surface p-7 transition-colors duration-500 hover:border-accent/50">
    <div className="flex items-center gap-3">
      <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-accent-soft text-accent">
        {side.icon}
      </span>
      <div>
        <h4 className="font-medium leading-tight">{side.label}</h4>
        <p className="text-sm text-muted">{side.summary}</p>
      </div>
    </div>

    <ul className="mt-6 flex flex-wrap gap-2" aria-label={`${side.label} stack`}>
      {side.stack.map((s) => (
        <li
          key={s}
          className="rounded-full bg-accent-soft px-3 py-1 font-mono text-xs text-accent"
        >
          {s}
        </li>
      ))}
    </ul>

    <dl className="mt-6 flex-1 space-y-4">
      {side.features.map((f) => (
        <div key={f.title}>
          <dt className="text-sm font-medium">{f.title}</dt>
          <dd className="whitespace-pre-line text-sm leading-relaxed text-muted">{f.text}</dd>
        </div>
      ))}
    </dl>

    {side.repo && (
      <a
        href={side.repo}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-8 inline-flex w-fit items-center gap-2 text-sm text-ink"
      >
        <Github size={16} />
        <span className="link-line pb-0.5">
          View {side.label.toLowerCase()} code
        </span>
      </a>
    )}
  </div>
);

const ProjectBlock: React.FC<{project: Project; first: boolean}> = ({
  project,
  first,
}) => (
  <article className={first ? "" : "mt-24 border-t border-line pt-24"}>
    <Reveal>
      <div
        className={
          project.image
            ? "grid items-center gap-10 md:grid-cols-2 md:gap-14"
            : "max-w-2xl"
        }
      >
        {project.image && (
          <div className='group overflow-hidden rounded-2xl border border-line bg-surface'>
            <div className='relative aspect-[4/3]'>
              <Image
                src={project.image}
                alt={`${project.title} app screens`}
                fill
                sizes='(min-width: 768px) 480px, 100vw'
                className='object-contain transition-transform duration-[1200ms] ease-out group-hover:scale-[1.03]'
              />
            </div>
          </div>
        )}

        <div>
          {project.kind && (
            <p className='mb-3 text-sm text-accent'>{project.kind}</p>
          )}
          <h3 className='font-serif text-4xl tracking-tight'>
            {project.title}
          </h3>
          <p className='mt-5 leading-relaxed text-muted'>{project.overview}</p>
          {project.video && (
            <a
              href={project.video}
              target='_blank'
              rel='noopener noreferrer'
              className='mt-7 inline-flex items-center gap-2 text-sm'
            >
              <span className='grid h-8 w-8 place-items-center rounded-full bg-ink text-bg transition-transform duration-300 hover:scale-105'>
                <Play size={13} />
              </span>
              <span className='link-line pb-0.5'>Watch the walkthrough</span>
              <ExternalLink size={13} className='text-muted' />
            </a>
          )}
          {project.livelink && (
            <a
              href={project.livelink}
              target='_blank'
              rel='noopener noreferrer'
              className='mt-7 inline-flex items-center gap-2 text-sm'
            >
              <span className='grid h-8 w-8 place-items-center rounded-full bg-ink text-bg transition-transform duration-300 hover:scale-105'>
                <Play size={13} />
              </span>
              <span className='link-line pb-0.5'>See Live Demo</span>
              <ExternalLink size={13} className='text-muted' />
            </a>
          )}
        </div>
      </div>
    </Reveal>

    <div className='mt-12 grid gap-6 md:grid-cols-2'>
      <Reveal>
        <SidePanel side={project.frontend} />
      </Reveal>
      <Reveal delay={120}>
        <SidePanel side={project.backend} />
      </Reveal>
    </div>
  </article>
);

const Projects: React.FC = () => {
  return (
    <section id="projects" className="border-t border-line py-28">
      <div className="mx-auto max-w-5xl px-6">
        <Reveal>
          <h2 className="font-serif text-3xl tracking-tight md:text-4xl">
            Projects
          </h2>
        </Reveal>

        <div className="mt-12">
          {projects.map((p, i) => (
            <ProjectBlock key={p.title} project={p} first={i === 0} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
