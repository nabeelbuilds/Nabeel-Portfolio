
import styles from "./SkillCard.module.css";

function SkillCard({
  icon,
  name,
  description,
  className = "",
}) {
  return (
    <article className={`${styles.card} ${className}`}>
      <div className={styles.iconWrapper}>
        {icon}
      </div>

      <div className={styles.content}>
        <h3 className={styles.name}>{name}</h3>

        <p className={styles.description}>
          {description}
        </p>
      </div>
    </article>
  );
}

export default SkillCard;
