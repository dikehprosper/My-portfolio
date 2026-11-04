import React from "react";
import { ArrowDown } from "lucide-react";

const stack = [
  "React",
  "Next.js",
  "TypeScript",
  "React Native",
  "PostgreSQL",
  "Node.js",
  "MongoDB",
  "AWS",
  "Docker",
];

const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden"
    >
      {/* Soft, slow-moving light. Quiet on purpose. */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="drift absolute -right-40 top-1/4 h-[34rem] w-[34rem] rounded-full bg-accent/10 blur-3xl" />
        <div
          className="drift absolute -left-48 bottom-0 h-[28rem] w-[28rem] rounded-full bg-accent/5 blur-3xl"
          style={{ animationDelay: "-14s" }}
        />
      </div>

      <div className="relative mx-auto w-full max-w-5xl px-6 pb-24 pt-32">
        <p
          className="settle mb-6 text-sm text-muted"
          style={{ animationDelay: "150ms" }}
        >
          Full stack developer
        </p>

        <h1
          className="settle max-w-3xl font-serif text-5xl leading-[1.08] tracking-tight sm:text-6xl md:text-7xl"
          style={{ animationDelay: "350ms" }}
        >
          Crafting Digital Experiences with Code
        </h1>

        <p
          className="settle mt-8 max-w-xl text-lg leading-relaxed text-muted"
          style={{ animationDelay: "600ms" }}
        >
          Transforming complex challenges into elegant solutions through modern
          web technologies and innovative thinking.
        </p>

        <div
          className="settle mt-10 flex flex-wrap items-center gap-x-8 gap-y-4"
          style={{ animationDelay: "850ms" }}
        >
          <a
            href="#projects"
            className="group inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-medium text-bg transition-transform duration-300 hover:-translate-y-0.5"
          >
            See my work
            <ArrowDown
              size={16}
              className="transition-transform duration-300 group-hover:translate-y-0.5"
            />
          </a>
          <a href="#contact" className="link-line pb-0.5 text-sm text-ink">
            Get in touch
          </a>
        </div>

        <ul
          className="settle mt-20 flex max-w-2xl flex-wrap gap-x-6 gap-y-2 text-sm text-muted"
          style={{ animationDelay: "1100ms" }}
          aria-label="Technologies I work with"
        >
          {stack.map((t) => (
            <li key={t}>{t}</li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Hero;
