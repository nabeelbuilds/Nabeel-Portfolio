
import {
  FiArrowUpRight,
} from "react-icons/fi";

import {
  FaGithub,
} from "react-icons/fa";

import styles from "./ProjectCard.module.css";

function ProjectCard({
  image,
  title,
  description,
  technologies = [],
  liveUrl,
  githubUrl,
  category,
  featured = false,
  className = "",
}) {
  return (
    <article
      className={`${styles.card} ${featured ? styles.featured : ""} ${className}`}
    >
      <div className={styles.imageWrapper}>
        {image ? (
          <img
            src={image}
            alt={`${title} website preview`}
            className={styles.image}
            loading="lazy"
          />
        ) : (
          <div className={styles.imagePlaceholder}>
            <span>Project Preview</span>
          </div>
        )}

        {category && (
          <span className={styles.category}>{category}</span>
        )}
      </div>

      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>

        <p className={styles.description}>{description}</p>

        {technologies.length > 0 && (
          <ul className={styles.technologies}>
            {technologies.map((technology) => (
              <li key={technology}>{technology}</li>
            ))}
          </ul>
        )}

        <div className={styles.actions}>
          {liveUrl && (
            <a
              href={liveUrl}
              className={styles.projectLink}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View live ${title} project`}
            >
              Live Preview
              <FiArrowUpRight size={17} />
            </a>
          )}

          {githubUrl && (
            <a
              href={githubUrl}
              className={styles.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View ${title} source code on GitHub`}
            >
              <FaGithub size={17} />
              Source Code
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

export default ProjectCard;
