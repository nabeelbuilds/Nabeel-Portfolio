
import { Link } from "react-router-dom";

import {
  FiArrowDown,
  FiArrowRight,
  FiArrowUpRight,
  FiCode,
  FiLayers,
  FiStar,
} from "react-icons/fi";

import styles from "./Hero.module.css";

const technologies = [
  "React.js",
  "Next.js",
  "JavaScript",
  "CSS3",
  "HTML5",
  "Git",
];

function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.backgroundShape}></div>

      <div className={styles.container}>
        <div className={styles.heroGrid}>

          {/* LEFT CONTENT */}
          <div className={styles.heroContent}>

            {/* Availability Badge */}
            <div className={styles.introBadge}>
              <span className={styles.statusDot}></span>
              <span>Frontend Developer</span>
              <span className={styles.badgeDivider}></span>
              <FiStar size={14} />
              <span>Creative Web Solutions</span>
            </div>

            {/* Main Heading */}
            <h1 className={styles.heading}>
              Building
              <span className={styles.headingHighlight}>
                {" "}Digital Experiences 
              </span>
              That Make an Impact.
            </h1>

            {/* Introduction */}
            <p className={styles.description}>
              Hi, I'm{" "}
              <strong>Nabeel Ahmad</strong>, a frontend
              web developer with 3 years of web development
              experience. I build modern, responsive and
              user-friendly websites that help businesses
              create a strong digital presence.
            </p>

            {/* CTA Buttons */}
            <div className={styles.actions}>
              <Link
                to="/contact"
                className={styles.primaryButton}
              >
                Hire Me
                <FiArrowUpRight size={19} />
              </Link>

              <Link
                to="/projects"
                className={styles.secondaryButton}
              >
                View My Work
                <FiArrowRight size={18} />
              </Link>
            </div>

            {/* Technologies */}
            <div className={styles.technologySection}>
              <span className={styles.technologyLabel}>
                TECHNOLOGIES I WORK WITH
              </span>

              <div className={styles.technologyList}>
                {technologies.map((technology) => (
                  <span
                    key={technology}
                    className={styles.technologyBadge}
                  >
                    {technology}
                  </span>
                ))}
              </div>
            </div>

            {/* Bottom Statistics */}
            <div className={styles.heroStats}>
              <div className={styles.statItem}>
                <span className={styles.statNumber}>
                  03+
                </span>

                <span className={styles.statLabel}>
                  Years of Experience
                </span>
              </div>

              <div className={styles.statDivider}></div>

              <div className={styles.statItem}>
                <span className={styles.statNumber}>
                  09+
                </span>

                <span className={styles.statLabel}>
                  Core Technologies
                </span>
              </div>

              <div className={styles.statDivider}></div>

              <div className={styles.statItem}>
                <span className={styles.statNumber}>
                  100%
                </span>

                <span className={styles.statLabel}>
                  Focus on Quality
                </span>
              </div>
            </div>

          </div>

          {/* RIGHT VISUAL */}
          <div className={styles.heroVisual}>

            {/* Decorative Background */}
            <div className={styles.visualBackground}></div>

            <div className={styles.dotPattern}></div>

            {/* Main Profile Card */}
            <div className={styles.profileCard}>

              <div className={styles.profileTop}>
                <div className={styles.profileTopIcon}>
                  <FiCode size={19} />
                </div>

                <span>DEVELOPER PROFILE</span>

                <span className={styles.profileMenu}>
                  •••
                </span>
              </div>

              {/* Profile Placeholder */}
              <div className={styles.profileImage}>
          <div className={styles.profileImageInner}></div>

          <div className={styles.profileImageDecoration}></div>
                <div className={styles.profileImageDecoration}></div>
              </div>

              <div className={styles.profileInfo}>
                <h2>Nabeel Ahmad</h2>

                <p>Frontend Web Developer</p>
              </div>

              <div className={styles.profileDivider}></div>

              {/* Profile Skills */}
              <div className={styles.profileSkills}>
                <span>
                  <FiCode size={15} />
                  Modern Development
                </span>

                <span>
                  <FiLayers size={15} />
                  Responsive Interfaces
                </span>
              </div>

              <div className={styles.profileFooter}>
                <span className={styles.profileFooterDot}></span>
                Focused on creating better web experiences
              </div>
            </div>

            {/* Floating Technology Card */}
            <div className={styles.floatingCard}>
              <div className={styles.floatingIcon}>
                <FiCode size={21} />
              </div>

              <div>
                <strong>Clean Code</strong>
                <span>Modern web development</span>
              </div>
            </div>

            {/* Floating Experience Card */}
            <div className={styles.experienceCard}>
              <span className={styles.experienceNumber}>
                3+
              </span>

              <div>
                <strong>Years</strong>
                <span>Experience</span>
              </div>
            </div>

            {/* Decorative Circle */}
            <div className={styles.decorativeCircle}></div>

          </div>
        </div>

        {/* Scroll Indicator */}
        <div className={styles.scrollIndicator}>
          <span>SCROLL TO EXPLORE</span>

          <div className={styles.scrollIcon}>
            <FiArrowDown size={15} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
