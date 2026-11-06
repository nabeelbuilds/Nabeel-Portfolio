
import styles from "./SectionHeading.module.css";

function SectionHeading({
  eyebrow,
  title,
  description,
  alignment = "center",
  className = "",
}) {
  return (
    <div
      className={`${styles.heading} ${styles[alignment]} ${className}`}
    >
      {eyebrow && (
        <span className={styles.eyebrow}>
          <span className={styles.eyebrowDot}></span>
          {eyebrow}
        </span>
      )}

      <h2 className={styles.title}>{title}</h2>

      {description && (
        <p className={styles.description}>{description}</p>
      )}
    </div>
  );
}

export default SectionHeading;
