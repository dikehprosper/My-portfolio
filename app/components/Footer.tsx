import React from "react";

const Footer: React.FC = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-line py-10">
      <div className="mx-auto flex max-w-5xl flex-col items-start justify-between gap-3 px-6 text-sm text-muted sm:flex-row sm:items-center">
        <p>© {year} Prosper Dike</p>
        <a href="#home" className="link-line pb-0.5 hover:text-ink">
          Back to top
        </a>
      </div>
    </footer>
  );
};

export default Footer;
