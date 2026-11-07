
import { Link } from "react-router-dom";

import {
  FiArrowUpRight,
  FiMail,
  FiMessageCircle,
  FiBriefcase,
  FiClock,
} from "react-icons/fi";

import ContactForm from "../../Components/ContactForm/ContactForm";
import SocialLinks from "../../Components/SocialLinks/SocialLinks";

import styles from "./Contact.module.css";

const contactOptions = [
  {
    icon: FiMail,
    title: "Email",
    description: "For project inquiries and professional communication.",
    value: "nabeelahmadtk550@gmail.com",
    href: "mailto:nabeelahmadtk550@gmail.com?subject=Project%20Inquiry",
    type: "email",
  },
  {
    icon: FiBriefcase,
    title: "Freelance Projects",
    description: "Have a website idea or frontend development requirement?",
    value: "Let's discuss your project",
    href: "#contact-form",
    type: "internal",
  },
  {
    icon: FiMessageCircle,
    title: "Social Media",
    description: "Connect with me through my professional profiles.",
    value: "Explore my social links",
    href: "#social-links",
    type: "internal",
  },
];

function Contact() {
  return (
    <main className={styles.contact}>
      {/* Page Hero */}
      <section className={styles.pageHero}>
        <div className="container">
          <div className={styles.breadcrumb}>
            <Link to="/">Home</Link>
            <span>/</span>
            <span>Contact</span>
          </div>

          <div className={styles.heroContent}>
            <span className={styles.eyebrow}>
              GET IN TOUCH
            </span>

            <h1>
              Let's Start a <span>Conversation.</span>
            </h1>

            <p>
              Have a project in mind, need frontend development
              support, or want to discuss a professional
              opportunity? I'd be happy to hear from you.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information and Form */}
      <section className={`section ${styles.contactSection}`}>
        <div className="container">
          <div className={styles.contactGrid}>
            {/* Left Column */}
            <aside className={styles.contactInfo}>
              <span className={styles.sectionEyebrow}>
                CONTACT INFORMATION
              </span>

              <h2>
                Let's discuss what you're looking to build.
              </h2>

              <p className={styles.infoDescription}>
                Share your requirements, project idea, or
                professional inquiry. Use the contact options
                below to get in touch.
              </p>

              <div className={styles.contactOptions}>
                {contactOptions.map((option) => {
                  const Icon = option.icon;

                  return (
                    <a
                      className={styles.contactOption}
                      href={option.href}
                      key={option.title}
                      aria-label={
                        option.type === "email"
                          ? `Send an email to ${option.value}`
                          : option.title
                      }
                    >
                      <div className={styles.optionIcon}>
                        <Icon size={21} />
                      </div>

                      <div className={styles.optionContent}>
                        <h3>{option.title}</h3>
                        <p>{option.description}</p>

                        <span>
                          {option.value}
                          <FiArrowUpRight size={14} />
                        </span>
                      </div>
                    </a>
                  );
                })}
              </div>

              {/* Availability */}
              <div className={styles.availabilityCard}>
                <div className={styles.availabilityIcon}>
                  <FiClock size={19} />
                </div>

                <div>
                  <h3>Let's connect</h3>
                  <p>
                    Send a message with your requirements
                    and I'll have the information needed
                    to discuss the next steps.
                  </p>
                </div>
              </div>

              {/* Social Links */}
              <div
                className={styles.socialSection}
                id="social-links"
              >
                <h3>Find me online</h3>

                <SocialLinks
                  variant="default"
                  withLabels={false}
                />
              </div>
            </aside>

            {/* Right Column */}
            <div
              className={styles.formPanel}
              id="contact-form"
            >
              <div className={styles.formHeading}>
                <span className={styles.sectionEyebrow}>
                  SEND A MESSAGE
                </span>

                <h2>Tell me about your project</h2>

                <p>
                  Fill in the details below. Please provide
                  enough information to help me understand
                  your requirements.
                </p>
              </div>

              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className={styles.bottomSection}>
        <div className={`container ${styles.bottomContainer}`}>
          <div>
            <span className={styles.sectionEyebrow}>
              THANK YOU FOR VISITING
            </span>

            <h2>
              Every great project starts with an idea.
            </h2>

            <p>
              Explore my development work and learn more
              about my skills and approach.
            </p>
          </div>

          <Link
            to="/projects"
            className={styles.projectsLink}
          >
            Explore Projects
            <FiArrowUpRight size={18} />
          </Link>
        </div>
      </section>
    </main>
  );
}

export default Contact;
