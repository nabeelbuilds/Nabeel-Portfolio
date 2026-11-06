
import {
  FaGithub,
  FaLinkedin,
  FaFacebook,
} from "react-icons/fa";

import {
  FiMail,
} from "react-icons/fi";

import styles from "./SocialLinks.module.css";

const socialItems = [
  {
    name: "GitHub",
    icon: FaGithub,
    url: "https://github.com/nabeelbuilds/",
    label: "Visit my GitHub profile",
  },
  {
    name: "LinkedIn",
    icon: FaLinkedin,
    url: "https://www.linkedin.com/in/nabeel-ahmad-dev/",
    label: "Visit my LinkedIn profile",
  },
  {
    name: "Facebook",
    icon: FaFacebook,
    url: "https://www.facebook.com/",
    label: "Visit my Facebook profile",
  },
  {
    name: "Email",
    icon: FiMail,
    url: "mailto:your-email@example.com",
    label: "Send me an email",
  },
];

function SocialLinks({
  variant = "default",
  showLabels = false,
  className = "",
}) {
  return (
    <div
      className={`${styles.socialLinks} ${styles[variant]} ${className}`}
    >
      {socialItems.map((item) => {
        const Icon = item.icon;
        const isEmail = item.name === "Email";

        return (
          <a
            key={item.name}
            href={item.url}
            className={styles.socialLink}
            aria-label={item.label}
            title={item.name}
            target={isEmail ? undefined : "_blank"}
            rel={isEmail ? undefined : "noopener noreferrer"}
          >
            <Icon size={19} />

            {showLabels && (
              <span>{item.name}</span>
            )}
          </a>
        );
      })}
    </div>
  );
}

export default SocialLinks;
