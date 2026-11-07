
import { Link } from "react-router-dom";

import {
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

import {
  FiArrowUpRight,
  FiArrowRight,
  FiMail,
} from "react-icons/fi";

import styles from "./Footer.module.css";

const footerNavigation = [
  {
    title: "Navigation",
    links: [
      { name: "Home", path: "/" },
      { name: "About Me", path: "/about" },
      { name: "My Projects", path: "/projects" },
      { name: "Services", path: "/services" },
      { name: "Contact", path: "/contact" },
    ],
  },
];

const socialLinks = [
  {
    name: "GitHub",
    url: "https://github.com/",
    icon: FaGithub,
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/",
    icon: FaLinkedin,
  },
];

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      {/* Main Footer */}
      <div className={styles.footerMain}>
        <div className={styles.container}>
          <div className={styles.footerGrid}>

            {/* Brand Information */}
            <div className={styles.brandColumn}>
              <Link to="/" className={styles.logo}>
                Nabeel<span>.</span>
              </Link>

              <p className={styles.brandDescription}>
                Frontend Web Developer focused on building
                modern, responsive and user-friendly digital
                experiences.
              </p>

              <div className={styles.availability}>
                <span className={styles.statusDot}></span>

                <span>
                  Open to freelance opportunities
                </span>
              </div>

              {/* Social Links */}
              <div className={styles.socialLinks}>
                {socialLinks.map((social) => {
                  const Icon = social.icon;

                  return (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Visit ${social.name} profile`}
                      className={styles.socialLink}
                    >
                      <Icon size={19} />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Navigation Links */}
            {footerNavigation.map((group) => (
              <div
                key={group.title}
                className={styles.linkColumn}
              >
                <h3>{group.title}</h3>

                <ul>
                  {group.links.map((link) => (
                    <li key={link.path}>
                      <Link to={link.path}>
                        {link.name}
                        <FiArrowUpRight size={14} />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            {/* Services Column */}
            <div className={styles.linkColumn}>
              <h3>What I Do</h3>

              <ul>
                <li>
                  <Link to="/services">
                    React Development
                    <FiArrowUpRight size={14} />
                  </Link>
                </li>

                <li>
                  <Link to="/services">
                    Responsive Websites
                    <FiArrowUpRight size={14} />
                  </Link>
                </li>

                <li>
                  <Link to="/services">
                    Landing Pages
                    <FiArrowUpRight size={14} />
                  </Link>
                </li>

                <li>
                  <Link to="/services">
                    UI Development
                    <FiArrowUpRight size={14} />
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact Column */}
            <div className={styles.contactColumn}>
              <h3>Have a project?</h3>

              <p>
                Let's discuss your ideas and create something
                meaningful together.
              </p>

              <Link
                to="/contact"
                className={styles.contactButton}
              >
                Start a Conversation
                <FiArrowRight size={17} />
              </Link>

              <a
                href="mailto:your-email@example.com"
                className={styles.emailLink}
              >
                <FiMail size={16} />
                nabeelahmadtk550@gmail.com
              </a>
            </div>

          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className={styles.footerBottom}>
        <div className={styles.container}>
          <p>
            © {currentYear} Nabeel Ahmad.
            All rights reserved.
          </p>

          <div className={styles.bottomLinks}>
            <Link to="/">Home</Link>
            <Link to="/contact">Get in touch</Link>
          </div>

          <a href="#root" className={styles.backToTop}>
            Back to top
            <FiArrowUpRight size={16} />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
