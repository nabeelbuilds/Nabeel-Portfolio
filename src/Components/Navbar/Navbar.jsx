
import { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";

import {
  FiMenu,
  FiX,
  FiArrowUpRight,
} from "react-icons/fi";

import styles from "./Navbar.module.css";

const navigationLinks = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "About",
    path: "/about",
  },
  {
    name: "Projects",
    path: "/projects",
  },
  {
    name: "Services",
    path: "/services",
  },
  {
    name: "Contact",
    path: "/contact",
  },
];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  // Prevent background scrolling when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  // Close menu using Escape key
  useEffect(() => {
    function handleEscape(event) {
      if (event.key === "Escape") {
        setMenuOpen(false);
      }
    }

    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  return (
    <header className={styles.header}>
      <nav
        className={styles.navbar}
        aria-label="Main navigation"
      >
        <div className={styles.container}>
          {/* Brand Logo */}
          <Link
            to="/"
            className={styles.logo}
            aria-label="Nabeel Ahmad - Home"
            onClick={() => setMenuOpen(false)}
          >
            <span className={styles.logoName}>
              Nabeel<span>.</span>
            </span>

            <span className={styles.logoLabel}>
              FRONTEND DEVELOPER
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className={styles.desktopNavigation}>
            {navigationLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                end={link.path === "/"}
                onClick={() => setMenuOpen(false)}
                className={({ isActive }) =>
                  `${styles.navLink} ${
                    isActive ? styles.activeLink : ""
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </div>

          {/* Desktop Contact Button */}
          <Link
            to="/contact"
            className={styles.contactButton}
            onClick={() => setMenuOpen(false)}
          >
            Let's Talk
            <FiArrowUpRight size={17} />
          </Link>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className={styles.menuButton}
            onClick={() => setMenuOpen((previous) => !previous)}
            aria-label={
              menuOpen
                ? "Close navigation menu"
                : "Open navigation menu"
            }
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
          >
            {menuOpen ? (
              <FiX size={25} />
            ) : (
              <FiMenu size={25} />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          id="mobile-navigation"
          className={`${styles.mobileNavigation} ${
            menuOpen ? styles.mobileNavigationOpen : ""
          }`}
          aria-hidden={!menuOpen}
          inert={!menuOpen}
        >
          <div className={styles.mobileNavigationInner}>
            <div className={styles.mobileNavigationHeading}>
              <span>Explore</span>
              <span className={styles.mobileNavigationLine}></span>
            </div>

            <div className={styles.mobileLinks}>
              {navigationLinks.map((link, index) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  end={link.path === "/"}
                  className={({ isActive }) =>
                    `${styles.mobileLink} ${
                      isActive ? styles.mobileActiveLink : ""
                    }`
                  }
                  style={{
                    transitionDelay: menuOpen
                      ? `${index * 50}ms`
                      : "0ms",
                  }}
                  onClick={() => setMenuOpen(false)}
                >
                  <span className={styles.mobileLinkNumber}>
                    0{index + 1}
                  </span>

                  <span>{link.name}</span>

                  <FiArrowUpRight size={19} />
                </NavLink>
              ))}
            </div>

            <div className={styles.mobileNavigationFooter}>
              <p>Have a project in mind?</p>

              <Link
                to="/contact"
                className={styles.mobileContactButton}
                onClick={() => setMenuOpen(false)}
              >
                Let's Work Together
                <FiArrowUpRight size={18} />
              </Link>

              <span className={styles.mobileCopyright}>
                © {new Date().getFullYear()} Nabeel Ahmad
              </span>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
