
import { isValidElement } from "react";

import {
  FiArrowUpRight,
  FiCheck,
} from "react-icons/fi";

import styles from "./ServiceCard.module.css";

function ServiceCard({
  icon: Icon,
  title,
  description,
  features = [],
  label,
  link,
  featured = false,
  className = "",
}) {
  return (
    <article
      className={`${styles.card} ${featured ? styles.featured : ""} ${className}`}
    >
      {label && (
        <span className={styles.label}>
          {label}
        </span>
      )}

      <div className={styles.iconWrapper}>
        {isValidElement(Icon) ? (
          Icon
        ) : Icon ? (
          <Icon size={30} strokeWidth={1.7} />
        ) : null}
      </div>

      <h3 className={styles.title}>
        {title}
      </h3>

      <p className={styles.description}>
        {description}
      </p>

      {features.length > 0 && (
        <ul className={styles.features}>
          {features.map((feature) => (
            <li key={feature}>
              <span className={styles.checkIcon}>
                <FiCheck size={15} />
              </span>

              <span>{feature}</span>
            </li>
          ))}
        </ul>
      )}

      {link && (
        <a href={link} className={styles.link}>
          Discuss this service
          <FiArrowUpRight size={17} />
        </a>
      )}
    </article>
  );
}

export default ServiceCard;
