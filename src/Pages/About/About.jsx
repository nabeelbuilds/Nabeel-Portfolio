
import { Link } from "react-router-dom";

import {
  FiArrowRight,
  FiArrowUpRight,
  FiCode,
  FiTarget,
  FiUsers,
  FiSun,
  FiCheckCircle,
} from "react-icons/fi";

import Button from "../../Components/Button/Button";
import SectionHeading from "../../Components/SectionHeading/SectionHeading";
import SkillCard from "../../Components/SkillCard/SkillCard";
import { skills } from "../../data/skills";

import styles from "./About.module.css";

function About() {
  const principles = [
    {
      icon: FiCode,
      title: "Clean Development",
      description:
        "I focus on writing organized, reusable, and maintainable code.",
    },
    {
      icon: FiUsers,
      title: "User-focused Thinking",
      description:
        "I believe websites should be easy to navigate and comfortable to use.",
    },
    {
      icon: FiSun,
      title: "Continuous Learning",
      description:
        "I keep improving my skills and exploring modern web technologies.",
    },
    {
      icon: FiTarget,
      title: "Attention to Detail",
      description:
        "I pay attention to responsive layouts, visual consistency, and functionality.",
    },
  ];

  const strengths = [
    "Building responsive website layouts",
    "Creating reusable React components",
    "Developing interactive user interfaces",
    "Working with modern CSS techniques",
    "Organizing frontend project structures",
    "Using Git and GitHub for version control",
  ];

  return (
    <main className={styles.about}>
      {/* Page Hero */}
      <section className={styles.pageHero}>
        <div className="container">
          <span className={styles.breadcrumb}>
            <Link to="/">Home</Link>
            <span>/</span>
            <span>About</span>
          </span>

          <div className={styles.heroContent}>
            <span className={styles.eyebrow}>
              GET TO KNOW ME
            </span>

            <h1>
              A little about
              <span> who I am.</span>
            </h1>

            <p>
              I'm Nabeel Ahmad, a frontend web developer
              passionate about creating modern, responsive,
              and meaningful digital experiences.
            </p>
          </div>
        </div>
      </section>

      {/* Personal Introduction */}
      <section className={`section ${styles.introduction}`}>
          <div className={`container ${styles.introGrid}`}>
            <div className={styles.profileVisual}>
              <div className={styles.profileCard}>
                <div className={styles.profileInitials}>
                  {/* Profile image */}
                </div>

              <span className={styles.profileName}>
                Nabeel Ahmad
              </span>

              <span className={styles.profileRole}>
                FRONTEND WEB DEVELOPER
              </span>

              <div className={styles.profileDivider}></div>

              <div className={styles.profileDetails}>
                <span>React.js</span>
                <span>Next.js</span>
                <span>JavaScript</span>
                <span>CSS3</span>
              </div>
            </div>

            <div className={styles.profileDecoration}></div>
          </div>

          <div className={styles.introContent}>
            <span className={styles.eyebrow}>
              MY INTRODUCTION
            </span>

            <h2>
              Building for the web with
              <span> creativity and purpose.</span>
            </h2>

            <p>
              My name is Nabeel Ahmad. I'm a frontend web
              developer with 3 years of web development
              experience and an interest in building
              professional digital experiences.
            </p>

            <p>
              My work focuses on HTML, CSS, JavaScript,
              React.js, and Next.js. I enjoy transforming
              ideas into responsive interfaces that look
              good and work smoothly across different devices.
            </p>

            <p>
              I'm continuously learning, improving my
              development practices, and exploring better
              ways to build websites.
            </p>

            <Button
              to="/contact"
              variant="primary"
              icon={<FiArrowUpRight size={18} />}
            >
              Let's Connect
            </Button>
          </div>
        </div>
      </section>

      {/* Experience Highlights */}
      <section className={styles.highlights}>
        <div className={`container ${styles.highlightsGrid}`}>
          <div className={styles.highlightItem}>
            <span className={styles.highlightNumber}>3+</span>
            <span className={styles.highlightLabel}>
              Years of Web Development Experience
            </span>
          </div>

          <div className={styles.highlightItem}>
            <span className={styles.highlightNumber}>8</span>
            <span className={styles.highlightLabel}>
              Technical Skill Areas
            </span>
          </div>

          <div className={styles.highlightItem}>
            <span className={styles.highlightNumber}>UI</span>
            <span className={styles.highlightLabel}>
              User-focused Development
            </span>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className={`section ${styles.skillsSection}`}>
        <div className="container">
          <SectionHeading
            eyebrow="MY TECHNICAL EXPERTISE"
            title="Tools I Work With"
            description="The technologies and tools I use while developing modern web interfaces."
          />

          <div className={styles.skillsGrid}>
            {skills.map((skill) => {
              const Icon = skill.icon;

              return (
                <SkillCard
                  key={skill.name}
                  icon={<Icon size={25} />}
                  name={skill.name}
                  description={skill.description}
                />
              );
            })}
          </div>
        </div>
      </section>

      {/* Strengths */}
      <section className={`section ${styles.strengthsSection}`}>
        <div className={`container ${styles.strengthsGrid}`}>
          <div className={styles.strengthsContent}>
            <span className={styles.eyebrow}>
              WHAT I FOCUS ON
            </span>

            <h2>
              Practical skills for
              <span> modern web development.</span>
            </h2>

            <p>
              I aim to combine technical knowledge with
              thoughtful design to create websites that
              are useful, accessible, and maintainable.
            </p>

            <Link
              to="/projects"
              className={styles.textLink}
            >
              Explore My Projects
              <FiArrowRight size={18} />
            </Link>
          </div>

          <div className={styles.strengthsList}>
            {strengths.map((strength) => (
              <div
                className={styles.strengthItem}
                key={strength}
              >
                <FiCheckCircle size={20} />
                <span>{strength}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Development Principles */}
      <section className={`section ${styles.principlesSection}`}>
        <div className="container">
          <SectionHeading
            eyebrow="MY APPROACH"
            title="Principles Behind My Work"
            description="The ideas that guide how I approach frontend development and building digital products."
          />

          <div className={styles.principlesGrid}>
            {principles.map((principle) => {
              const Icon = principle.icon;

              return (
                <article
                  className={styles.principleCard}
                  key={principle.title}
                >
                  <div className={styles.principleIcon}>
                    <Icon size={25} />
                  </div>

                  <h3>{principle.title}</h3>

                  <p>{principle.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className={`section ${styles.ctaSection}`}>
        <div className={`container ${styles.ctaContainer}`}>
          <span>LET'S WORK TOGETHER</span>

          <h2>
            Have an idea?
            <br />
            Let's make it happen.
          </h2>

          <p>
            I'm interested in discussing frontend development
            opportunities, collaborations, and website projects.
          </p>

          <Button
            to="/contact"
            variant="secondary"
            size="large"
            icon={<FiArrowUpRight size={19} />}
          >
            Contact Me
          </Button>
        </div>
      </section>
    </main>
  );
}

export default About;
