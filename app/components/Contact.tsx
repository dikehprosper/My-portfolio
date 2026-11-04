import React from "react";
import { Mail, Linkedin, Github, Twitter } from "lucide-react";
import Reveal from "./Reveal";

const items = [
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
    <section id="contact" className="border-t border-line py-28">
      <div className="mx-auto max-w-5xl px-6">
        <div className="grid gap-10 md:grid-cols-[1fr_2fr] md:gap-16">
          <Reveal>
            <h2 className="font-serif text-3xl tracking-tight md:text-4xl">
              Contact
            </h2>
            <p className="mt-4 max-w-xs leading-relaxed text-muted">
              Have a project in mind or want to collaborate? Send me a message.
            </p>
          </Reveal>

          <ul className="divide-y divide-line border-y border-line">
            {items.map((item, i) => {
              const Icon = item.icon;
              return (
                <li key={item.label}>
                  <Reveal delay={i * 70}>
                    <a
                      href={item.href}
                      target={item.href.startsWith("mailto") ? undefined : "_blank"}
                      rel="noopener noreferrer"
                      className="group flex items-center justify-between gap-4 py-5 transition-[padding] duration-300 hover:pl-2"
                    >
                      <span className="flex items-center gap-4">
                        <Icon
                          size={18}
                          className="text-muted transition-colors duration-300 group-hover:text-accent"
                        />
                        <span className="text-sm text-muted">{item.label}</span>
                      </span>
                      <span className="break-all text-right">{item.value}</span>
                    </a>
                  </Reveal>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Contact;
