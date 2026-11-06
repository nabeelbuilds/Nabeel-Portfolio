
import { Link } from "react-router-dom";
import styles from "./Button.module.css";

function Button({
  children,
  to,
  href,
  variant = "primary",
  size = "medium",
  icon,
  iconPosition = "right",
  type = "button",
  disabled = false,
  external = false,
  className = "",
  onClick,
  ...props
}) {
  const buttonClass = [
    styles.button,
    styles[variant],
    styles[size],
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const content = (
    <>
      {icon && iconPosition === "left" && (
        <span className={styles.icon}>{icon}</span>
      )}

      <span>{children}</span>

      {icon && iconPosition === "right" && (
        <span className={styles.icon}>{icon}</span>
      )}
    </>
  );

  // Internal navigation link
  if (to) {
    return (
      <Link
        to={to}
        className={buttonClass}
        onClick={onClick}
        {...props}
      >
        {content}
      </Link>
    );
  }

  // External link
  if (href) {
    return (
      <a
        href={href}
        className={buttonClass}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
        onClick={onClick}
        {...props}
      >
        {content}
      </a>
    );
  }

  // Normal button
  return (
    <button
      type={type}
      className={buttonClass}
      disabled={disabled}
      onClick={onClick}
      {...props}
    >
      {content}
    </button>
  );
}

export default Button;
