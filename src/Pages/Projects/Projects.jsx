
import { useMemo, useState } from "react";
import { Link } from "react-router-dom";

import {
  FiArrowRight,
  FiArrowUpRight,
  FiCode,
  FiFolder,
} from "react-icons/fi";

import Button from "../../Components/Button/Button";
import SectionHeading from "../../Components/SectionHeading/SectionHeading";
import ProjectCard from "../../Components/ProjectCard/ProjectCard";

import { projects } from "../../data/projects";

import styles from "./Projects.module.css";

function Projects() {
  const [activeFilter, setActiveFilter] = useState("All");

  const categories = [
    "All",
    ...new Set(
      projects
        .map((project) => project.category)
        .filter(Boolean)
    ),
  ];

  const filteredProjects = useMemo(() => {
    if (activeFilter === "All") {
      return projects;
    }

    return projects.filter(
      (project) => project.category === activeFilter
    );
  }, [activeFilter]);

  return (
    <main className={styles.projects}>
      {/* Page Hero */}
      <section className={styles.pageHero}>
        <div className="container">
          <div className={styles.breadcrumb}>
            <Link to="/">Home</Link>
            <span>/</span>
            <span>Projects</span>
          </div>

          <div className={styles.heroContent}>
            <span className={styles.eyebrow}>
              MY PORTFOLIO
            </span>

            <h1>
              Projects & <span>Creative Work.</span>
            </h1>

            <p>
              Explore my development work, technical experiments,
              and projects focused on creating modern web
              experiences.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Collection */}
      <section className={`section ${styles.collectionSection}`}>
        <div className="container">
          <SectionHeading
            eyebrow="SELECTED WORK"
            title="Explore My Projects"
            description="A collection of work demonstrating my frontend development skills and technical approach."
          />

          {/* Filters */}
          {projects.length > 0 && (
            <div
              className={styles.filters}
              aria-label="Filter projects by category"
            >
              {categories.map((category) => (
                <button
                  key={category}
                  type="button"
                  className={
                    activeFilter === category
                      ? `${styles.filterButton} ${styles.activeFilter}`
                      : styles.filterButton
                  }
                  onClick={() => setActiveFilter(category)}
                  aria-pressed={activeFilter === category}
                >
                  {category}
                </button>
              ))}
            </div>
          )}

          {/* Project Cards */}
          {filteredProjects.length > 0 ? (
            <div className={styles.projectsGrid}>
              {filteredProjects.map((project) => (
                <ProjectCard
                  key={project.title}
                  {...project}
                />
              ))}
            </div>
          ) : (
            <div className={styles.emptyState}>
              <div className={styles.emptyIcon}>
                <FiFolder size={34} />
              </div>

              <span className={styles.emptyEyebrow}>
                PORTFOLIO IN PROGRESS
              </span>

              <h2>Projects Coming Soon</h2>

              <p>
                I'm preparing my project showcase. New work
                will appear here as projects are completed
                and ready to share.
              </p>

              <div className={styles.emptyActions}>
                <Button
                  to="/contact"
                  variant="primary"
                  icon={<FiArrowUpRight size={17} />}
                >
                  Discuss a Project
                </Button>

                <Button
                  to="/about"
                  variant="outline"
                  icon={<FiArrowRight size={17} />}
                >
                  About Me
                </Button>
              </div>
            </div>
          )}

          {filteredProjects.length > 0 && (
            <p className={styles.projectCount}>
              Showing {filteredProjects.length}{" "}
              {filteredProjects.length === 1
                ? "project"
                : "projects"}
            </p>
          )}
        </div>
      </section>

      {/* Development Focus */}
      <section className={styles.focusSection}>
        <div className={`container ${styles.focusContainer}`}>
          <div className={styles.focusIcon}>
            <FiCode size={30} />
          </div>

          <div className={styles.focusContent}>
            <h2>Have a project in mind?</h2>

            <p>
              Let's discuss your website idea, development
              requirements, or potential collaboration.
            </p>
          </div>

          <Button
            to="/contact"
            variant="primary"
            icon={<FiArrowUpRight size={18} />}
          >
            Contact Me
          </Button>
        </div>
      </section>
    </main>
  );
}

export default Projects;
