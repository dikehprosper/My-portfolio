import React from "react";
import Reveal from "./Reveal";

interface SkillGroup {
  name: string;
  description: string;
  skills: string[];
}

const groups: SkillGroup[] = [
  {
    name: "Frontend",
    description:
      "Responsive, interactive interfaces for the web and for mobile.",
    skills: [
      "React",
      "TypeScript",
      "Next.js",
      "Redux",
      "React Native",
      "HTML",
      "CSS",
      "SCSS",
      "Tailwind",
      "Material UI",
    ],
  },
  {
    name: "Backend",
    description: "Server-side applications and APIs that scale.",
    skills: ["Node.js", "Express.js", "MongoDB", "PostgreSQL", "REST", "GraphQL"],
  },
  {
    name: "DevOps and tools",
    description: "Workflows and deployment that keep releases calm.",
    skills: ["Git", "Docker", "AWS", "Jest", "SEO"],
  },
];

const Skills: React.FC = () => {
  return (
    <section id="skills" className="border-t border-line py-28">
      <div className="mx-auto max-w-5xl px-6">
        <div className="grid gap-10 md:grid-cols-[1fr_2fr] md:gap-16">
          <Reveal>
            <h2 className="font-serif text-3xl tracking-tight md:text-4xl">
              Skills
            </h2>
          </Reveal>

          <div className="space-y-12">
            {groups.map((g, i) => (
              <Reveal
                key={g.name}
                delay={i * 90}
                className="relative before:absolute before:-top-6 before:inset-x-0 before:border-t before:border-line first:before:hidden"
              >
                <div className="grid gap-4 sm:grid-cols-[10rem_1fr] sm:gap-8">
                  <div>
                    <h3 className="font-medium">{g.name}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-muted">
                      {g.description}
                    </p>
                  </div>
                  <ul className="flex flex-wrap content-start gap-2">
                    {g.skills.map((s) => (
                      <li
                        key={s}
                        className="rounded-full border border-line px-3 py-1 text-sm text-muted transition-colors duration-300 hover:border-accent hover:text-accent"
                      >
                        {s}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
