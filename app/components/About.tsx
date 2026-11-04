import React from "react";
import Reveal from "./Reveal";

const About: React.FC = () => {
  return (
    <section id="about" className="border-t border-line py-28">
      <div className="mx-auto grid max-w-5xl gap-10 px-6 md:grid-cols-[1fr_2fr] md:gap-16">
        <Reveal>
          <h2 className="font-serif text-3xl tracking-tight md:text-4xl">
            About
          </h2>
        </Reveal>

        <div className="space-y-6 text-lg leading-relaxed text-muted">
          <Reveal delay={80}>
            <p>
              I&apos;m a result-driven full stack software engineer. I build
              scalable, secure and intuitive web and mobile applications that
              solve real business problems.
            </p>
          </Reveal>
          <Reveal delay={160}>
            <p>
              I work on both the frontend and the backend, using modern tools
              and good engineering habits. I do my best work in teams that care
              about collaboration and attention to detail.
            </p>
          </Reveal>
          <Reveal delay={240}>
            <p>
              I pair technical depth with user-centred design, so what I ship is
              fast, clear and easy to use.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default About;
