import type { MouseEvent } from "react";

export const Navbar = () => {
  const scrollToTop = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToSection = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const targetId = e.currentTarget.getAttribute("href")?.substring(1);
    if (targetId) {
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  };

  return (
    <header className="navbar">
      <div className="navbar-inner">
        <div className="brand">
          <span className="brand-mark" />
          <span className="brand-text">
            Foundation for Muslim <span>Empowerment</span>
          </span>
        </div>
        <nav className="nav-links">
          <a href="#" onClick={scrollToTop}>
            HOME
          </a>
          <a href="#about" onClick={scrollToSection}>
            About
          </a>
          <a href="#services" onClick={scrollToSection}>
            Services
          </a>
          <a href="#contact" onClick={scrollToSection}>
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
};
