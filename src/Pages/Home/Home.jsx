
import { Link } from "react-router-dom";

import {
  FiArrowRight,
  FiArrowUpRight,
  FiCheckCircle,
  FiCode,
  FiMessageCircle,
  FiSend,
  FiStar,
} from "react-icons/fi";

import Hero from "../../Components/Hero/Hero";
import Button from "../../Components/Button/Button";
import SectionHeading from "../../Components/SectionHeading/SectionHeading";
import SkillCard from "../../Components/SkillCard/SkillCard";
import ProjectCard from "../../Components/ProjectCard/ProjectCard";
import ServiceCard from "../../Components/ServiceCard/ServiceCard";

import { skills } from "../../data/skills";
import { projects } from "../../data/projects";
import { services } from "../../data/services";

import styles from "./Home.module.css";

function Home() {
  const reasons = [
    "Responsive and user-friendly interfaces",
    "Reusable and organized React components",
    "Attention to design and usability",
    "Focus on clean and maintainable code",
  ];

  const process = [
    {
      number: "01",
      title: "Understand",
      description:
        "First, I understand your requirements, goals, and project expectations.",
      icon: FiMessageCircle,
    },
    {
      number: "02",
      title: "Plan & Design",
      description:
        "I organize the structure and plan the interface before development.",
      icon: FiStar,
    },
    {
      number: "03",
      title: "Develop",
      description:
        "I build the website using suitable technologies and reusable components.",
      icon: FiCode,
    },
    {
      number: "04",
      title: "Review",
      description:
        "I review the result, check responsiveness, and improve the experience.",
      icon: FiSend,
    },
  ];

  return (
    <main className={styles.home}>
      {/* Hero Section */}
      <Hero />

      {/* Introduction Section */}
      <section className={`section ${styles.introSection}`}>
        <div className={`container ${styles.introGrid}`}>
          <div className={styles.introContent}>
            <span className={styles.eyebrow}>
              <span className={styles.dot}></span>
              INTRODUCTION
            </span>

            <h2>
              Turning ideas into
              <span> modern web experiences.</span>
            </h2>
          </div>

          <div className={styles.introDescription}>
            <p>
              I'm Nabeel Ahmad, a frontend web developer with
              3 years of web development experience. I enjoy
              creating modern, responsive, and user-friendly
              websites using current frontend technologies.
            </p>

            <Link to="/about" className={styles.textLink}>
              More About Me
              <FiArrowUpRight size={17} />
            </Link>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className={`section ${styles.skillsSection}`}>
        <div className="container">
          <SectionHeading
            eyebrow="MY EXPERTISE"
            title="Technologies & Skills"
            description="The tools and technologies I use to build modern web experiences."
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

          <div className={styles.sectionAction}>
            <Button
              to="/about"
              variant="outline"
              icon={<FiArrowRight size={17} />}
            >
              Explore My Skills
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className={`section ${styles.projectsSection}`}>
        <div className="container">
          <SectionHeading
            eyebrow="MY WORK"
            title="Featured Projects"
            description="A selection of projects demonstrating my approach to frontend development and interface design."
          />

          {projects.length > 0 ? (
            <div className={styles.projectsGrid}>
              {projects.map((project) => (
                <ProjectCard
                  key={project.title}
                  {...project}
                />
              ))}
            </div>
          ) : (
            <div className={styles.emptyProjects}>
              <div className={styles.emptyIcon}>
                <FiCode size={30} />
              </div>

              <h3>Projects Coming Soon</h3>

              <p>
                I'm preparing my project showcase. Check back
                soon to explore my work and development projects.
              </p>

              <Link to="/contact" className={styles.textLink}>
                Discuss a project with me
                <FiArrowUpRight size={17} />
              </Link>
            </div>
          )}

          <div className={styles.sectionAction}>
            <Button
              to="/projects"
              variant="outline"
              icon={<FiArrowRight size={17} />}
            >
              View All Projects
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className={`section ${styles.servicesSection}`}>
        <div className="container">
          <SectionHeading
            eyebrow="WHAT I OFFER"
            title="Services I Can Provide"
            description="Frontend development services focused on responsive design, clean code, and user-friendly experiences."
          />

          <div className={styles.servicesGrid}>
            {services.map((service) => {
              const Icon = service.icon;

              return (
                <ServiceCard
                  key={service.title}
                  icon={<Icon size={27} />}
                  title={service.title}
                  description={service.description}
                  features={service.features}
                  link="/contact"
                />
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Work With Me Section */}
      <section className={`section ${styles.whySection}`}>
        <div className={`container ${styles.whyGrid}`}>
          <div className={styles.whyContent}>
            <SectionHeading
              eyebrow="WHY WORK WITH ME"
              title="Focused on quality and useful experiences."
              description="My approach is centered on building websites that are functional, responsive, and easy to use."
              alignment="left"
            />

            <ul className={styles.reasonsList}>
              {reasons.map((reason) => (
                <li key={reason}>
                  <FiCheckCircle size={20} />
                  <span>{reason}</span>
                </li>
              ))}
            </ul>

            <Button
              to="/about"
              variant="primary"
              icon={<FiArrowRight size={17} />}
            >
              Get to Know Me
            </Button>
          </div>

          <div className={styles.whyVisual}>
            <div className={styles.visualCard}>
              <div className={styles.visualIcon}>
                <FiCode size={32} />
              </div>

              <span className={styles.visualLabel}>
                MY DEVELOPMENT APPROACH
              </span>

              <h3>Thoughtful code. Meaningful experiences.</h3>

              <div className={styles.visualDivider}></div>

              <div className={styles.visualTags}>
                <span>Responsive</span>
                <span>Modern</span>
                <span>Functional</span>
                <span>Maintainable</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Development Process Section */}
      <section className={`section ${styles.processSection}`}>
        <div className="container">
          <SectionHeading
            eyebrow="HOW I WORK"
            title="My Development Process"
            description="A straightforward approach to turning project requirements into working web experiences."
          />

          <div className={styles.processGrid}>
            {process.map((step) => {
              const Icon = step.icon;

              return (
                <article
                  className={styles.processCard}
                  key={step.number}
                >
                  <div className={styles.processTop}>
                    <span>{step.number}</span>

                    <Icon size={24} />
                  </div>

                  <h3>{step.title}</h3>

                  <p>{step.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className={`section ${styles.ctaSection}`}>
        <div className={`container ${styles.ctaContainer}`}>
          <div className={styles.ctaContent}>
            <span className={styles.ctaEyebrow}>
              HAVE A PROJECT IN MIND?
            </span>

            <h2>
              Let's build something
              <span> meaningful together.</span>
            </h2>

            <p>
              Have a website idea, freelance opportunity, or
              development project? I'd be happy to hear about it.
            </p>

            <Button
              to="/contact"
              variant="secondary"
              size="large"
              icon={<FiArrowUpRight size={19} />}
            >
              Let's Talk
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Home;
