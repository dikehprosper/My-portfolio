"use client";

import React, { useState, useEffect } from "react";
import { Menu, X, Moon, Sun } from "lucide-react";

interface NavbarProps {
  theme: "light" | "dark";
  toggleTheme: () => void;
}

const navLinks = [
  { name: "About", href: "#about", id: "about" },
  { name: "Skills", href: "#skills", id: "skills" },
  { name: "Projects", href: "#projects", id: "projects" },
  { name: "Contact", href: "#contact", id: "contact" },
];

const Navbar: React.FC<NavbarProps> = ({ theme, toggleTheme }) => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Highlight the section currently in view
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: "-45% 0px -50% 0px" }
    );
    navLinks.forEach((l) => {
      const el = document.getElementById(l.id);
      if (el) io.observe(el);
    });
    return () => io.disconnect();
  }, []);

  const ThemeIcon = theme === "dark" ? Sun : Moon;
  const themeLabel =
    theme === "dark" ? "Switch to light mode" : "Switch to dark mode";

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-bg/80 backdrop-blur-md border-b border-line"
          : "border-b border-transparent"
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-5xl items-center justify-between px-6">
        <a
          href="#home"
          className="font-serif text-xl tracking-tight text-ink"
          aria-label="Prosper Dike, back to top"
        >
          Prosper Dike
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((l) => (
            <a
              key={l.id}
              href={l.href}
              className={`link-line pb-0.5 text-sm transition-colors ${
                active === l.id ? "text-ink" : "text-muted hover:text-ink"
              }`}
              style={active === l.id ? { backgroundSize: "100% 1px" } : undefined}
            >
              {l.name}
            </a>
          ))}
          <button
            onClick={toggleTheme}
            aria-label={themeLabel}
            className="grid h-9 w-9 place-items-center rounded-full text-muted transition-colors hover:bg-accent-soft hover:text-ink"
          >
            <ThemeIcon size={17} />
          </button>
        </div>

        <div className="flex items-center gap-1 md:hidden">
          <button
            onClick={toggleTheme}
            aria-label={themeLabel}
            className="grid h-9 w-9 place-items-center rounded-full text-muted"
          >
            <ThemeIcon size={17} />
          </button>
          <button
            onClick={() => setOpen(!open)}
            aria-expanded={open}
            aria-label="Toggle menu"
            className="grid h-9 w-9 place-items-center rounded-full text-ink"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      <div
        className={`grid overflow-hidden transition-all duration-500 md:hidden ${
          open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="min-h-0 overflow-hidden bg-bg/95 backdrop-blur-md">
          <div className="flex flex-col px-6 pb-4">
            {navLinks.map((l) => (
              <a
                key={l.id}
                href={l.href}
                onClick={() => setOpen(false)}
                className="border-t border-line py-3 text-base text-muted transition-colors hover:text-ink"
              >
                {l.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
