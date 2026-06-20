"use client";

export default function Nav() {
  return (
    <nav>
      <div className="nav-inner">
        <div
          className="logo"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <span className="dot"></span>jagpreet.dev
        </div>
        <div className="navlinks">
          <a href="#about">About</a>
          <a href="#experience">Experience</a>
          <a href="#work">Work</a>
          <a href="#skills">Skills</a>
          <a href="#articles">Articles</a>
          <a href="#contact">Contact</a>
        </div>
      </div>
    </nav>
  );
}
