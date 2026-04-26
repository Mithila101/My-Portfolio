import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import "./navbar.css";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`nb-nav ${scrolled ? "nb-scrolled" : ""}`}>
      <div className="nb-container">

        {/* Logo */}
        <NavLink to="/" className="nb-logo">
          <span className="nb-logo-bracket">&lt;</span>
          Tania
          <span className="nb-logo-bracket">/&gt;</span>
        </NavLink>

        {/* Desktop Links */}
        <ul className="nb-links">
          <li>
            <NavLink to="/" className={({ isActive }) => `nb-link ${isActive ? "nb-active" : ""}`}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/blog" className={({ isActive }) => `nb-link ${isActive ? "nb-active" : ""}`}>
              Blog
            </NavLink>
          </li>
          <li>
            <NavLink to="/login" className="nb-btn-login">
              Login
            </NavLink>
          </li>
        </ul>

        {/* Mobile Toggle */}
        <button
          className={`nb-toggle ${menuOpen ? "nb-toggle-open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`nb-mobile ${menuOpen ? "nb-mobile-open" : ""}`}>
        <NavLink to="/" className="nb-mobile-link" onClick={() => setMenuOpen(false)}>Home</NavLink>
        <NavLink to="/blog" className="nb-mobile-link" onClick={() => setMenuOpen(false)}>Blog</NavLink>
        <NavLink to="/login" className="nb-mobile-btn" onClick={() => setMenuOpen(false)}>Login</NavLink>
      </div>
    </nav>
  );
}

export default Navbar;