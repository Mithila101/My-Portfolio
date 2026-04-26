import { useEffect, useState } from "react";
import lab1 from "../assets/lab1.png";
import lab2 from "../assets/lab2.png";
import lab3 from "../assets/lab3.png";
import Contact from "./contact";
import "./home.css";

function Home() {
  const [activeSlide, setActiveSlide] = useState(0);
  const slides = [lab1, lab2, lab3];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("reveal-visible");
          }
        });
      },
      { threshold: 0.1 }
    );
    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const skills = [
    { name: "HTML", level: 90, color: "#e34c26" },
    { name: "CSS", level: 85, color: "#264de4" },
    { name: "Bootstrap", level: 85, color: "#7952b3" },
    { name: "JavaScript", level: 75, color: "#f0db4f" },
    { name: "Python", level: 80, color: "#4584b6" },
    { name: "Django", level: 75, color: "#44b78b" },
    { name: "React", level: 70, color: "#61dafb" },
  ];

  return (
    <>
      {/* ===== HERO ===== */}
      <section className="h-hero">
        <div className="h-hero-grid" />
        <div className="h-glow h-glow-1" />
        <div className="h-glow h-glow-2" />

        <div className="h-container" style={{ position: "relative", zIndex: 1 }}>
          

          <h1 className="h-hero-title">
            Hi, I'm <span className="h-accent">Tania</span>
          </h1>

          <p className="h-hero-sub">Junior Fullstack Developer</p>

          <p className="h-hero-text">
            I craft modern, responsive and scalable web applications using
            React, Python Django, and clean UI design — focused on performance
            and great user experience.
          </p>

          <div className="h-hero-btns">
            <a href="#h-contact" className="h-btn-primary">Hire Me →</a>
            <a href="#h-projects" className="h-btn-outline">View Projects</a>
          </div>
        </div>

        <div className="h-scroll-hint">
          <div className="h-scroll-line" />
          <span>scroll</span>
        </div>
      </section>

      {/* ===== ABOUT ===== */}
      <section className="h-about" id="h-about">
        <div className="h-container">
          <div className="h-about-grid">

            <div className="reveal">
              <p className="h-eyebrow">About Me</p>
              <h2 className="h-heading">Passionate about<br />building the web</h2>
              <div className="h-divider" />
              <p className="h-about-text">
                I'm a web developer with a strong eye for design and a love for
                clean, semantic code. My frontend skills span HTML, CSS,
                Bootstrap, and JavaScript — focused on building responsive,
                user-friendly interfaces.
              </p>
              <p className="h-about-text">
                On the backend, I work with Python and Django to build secure,
                scalable web applications. I'm constantly learning and pushing
                toward becoming a complete full-stack developer.
              </p>
              <div className="h-badge-row">
                {["HTML", "CSS", "Bootstrap", "JavaScript", "Python", "Django", "React", "REST API"].map((s) => (
                  <span key={s} className="h-badge">{s}</span>
                ))}
              </div>
            </div>

            <div className="reveal h-reveal-2">
              <div className="h-strengths-card">
                <h4 className="h-strengths-title">My Strengths</h4>
                {[
                  { icon: "📱", title: "Responsive Web Design", desc: "Pixel-perfect layouts across all screen sizes" },
                  { icon: "✦", title: "Clean & Structured Code", desc: "Maintainable, readable code architecture" },
                  { icon: "⚡", title: "REST API Integration", desc: "Seamless frontend-backend communication" },
                  { icon: "🔍", title: "Problem Solving", desc: "Analytical approach to complex challenges" },
                ].map(({ icon, title, desc }) => (
                  <div key={title} className="h-strength-item">
                    <div className="h-strength-icon">{icon}</div>
                    <div>
                      <div className="h-strength-title">{title}</div>
                      <div className="h-strength-desc">{desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ===== SKILLS ===== */}
      <section className="h-skills" id="h-skills">
        <div className="h-container">
          <div className="reveal" style={{ textAlign: "center" }}>
            <p className="h-eyebrow">My Skills</p>
            <h2 className="h-heading">Technologies I Work With</h2>
            <div className="h-divider" style={{ margin: "1.25rem auto 0" }} />
          </div>

          <div className="h-skills-grid">
            {skills.map((skill, i) => (
              <div key={skill.name} className="reveal h-skill-card">
                <div className="h-skill-header">
                  <span className="h-skill-name">{skill.name}</span>
                  <span className="h-skill-pct">{skill.level}%</span>
                </div>
                <div className="h-bar-track">
                  <div
                    className="h-bar-fill"
                    style={{
                      width: `${skill.level}%`,
                      background: `linear-gradient(90deg, ${skill.color}88, ${skill.color})`,
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== PROJECTS ===== */}
      <section className="h-projects" id="h-projects">
        <div className="h-container">
          <div className="reveal">
            <p className="h-eyebrow">Portfolio</p>
            <h2 className="h-heading">Projects I've Built</h2>
            <div className="h-divider" />
          </div>

          <div className="reveal h-project-card">
            <div className="h-slider">
              {slides.map((src, i) => (
                <img
                  key={i}
                  src={src}
                  alt={`Screenshot ${i + 1}`}
                  className={`h-slide ${i === activeSlide ? "h-slide-active" : ""}`}
                />
              ))}
              <div className="h-dots">
                {slides.map((_, i) => (
                  <button
                    key={i}
                    className={`h-dot ${i === activeSlide ? "h-dot-active" : ""}`}
                    onClick={() => setActiveSlide(i)}
                  />
                ))}
              </div>
            </div>

            <div className="h-project-info">
              <span className="h-project-tag">Full Stack</span>
              <h3 className="h-project-title">
                Online Diagnostic Lab Management System
              </h3>
              <p className="h-project-desc">
                A comprehensive laboratory management system where admins
                can manage employees, medical tests, reports, and patient
                records through a secure, role-based dashboard.
              </p>
              <div className="h-tech-row">
                {["Python", "Django", "HTML", "CSS", "Bootstrap", "JavaScript"].map((t) => (
                  <span key={t} className="h-tech-pill">{t}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== CONTACT ===== */}
      <div id="h-contact">
        <Contact />
      </div>

      {/* ===== FOOTER ===== */}
      <footer className="h-footer">
        <div className="h-container">
          <div className="h-footer-grid">
            <div>
              <h4 className="h-footer-name">Tania Akhtar</h4>
              <p className="h-footer-desc">
                Web developer passionate about creating responsive,
                user-friendly and scalable web applications.
              </p>
              <a href="/CV Of Mithila.pdf" download className="h-footer-btn">
                ↓ Download CV
              </a>
            </div>

            <div>
              <h5 className="h-connect-title">Connect With Me</h5>
              <div className="h-social-list">
                {[
  { icon: "GH", name: "GitHub", handle: "@Mithila101", url: "https://github.com/Mithila101" },
  { icon: "LI", name: "LinkedIn", handle: "Tania Akhtar", url: "#" },
  { icon: "FB", name: "Facebook", handle: "Tania Akhtar", url: "#" },
].map(({ icon, name, handle, url }) => (
  <a href={url} key={name} className="h-social-item" target="_blank" rel="noreferrer">
    <div className="h-social-icon">{icon}</div>
    <div>
      <div className="h-social-name">{name}</div>
      <div className="h-social-handle">{handle}</div>
    </div>
  </a>
))}
              </div>
            </div>
          </div>

          <div className="h-footer-bottom">
            <p className="h-copyright">© 2025 Tania Akhtar — All Rights Reserved</p>
            <div className="h-footer-nav">
              {["#h-about", "#h-skills", "#h-projects", "#h-contact"].map((href, i) => (
                <a key={href} href={href} className="h-footer-link">
                  {["About", "Skills", "Projects", "Contact"][i]}
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Home;