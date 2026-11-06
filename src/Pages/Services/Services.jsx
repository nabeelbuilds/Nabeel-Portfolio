
import { Link } from "react-router-dom";

import {
  FiArrowRight,
  FiArrowUpRight,
  FiCode,
  FiLayout,
  FiSmartphone,
  FiLayers,
  FiCheckCircle,
  FiMessageCircle,
  FiSun,
  FiSend,
} from "react-icons/fi";

import Button from "../../Components/Button/Button";
import SectionHeading from "../../Components/SectionHeading/SectionHeading";
import ServiceCard from "../../Components/ServiceCard/ServiceCard";

import { services } from "../../data/services.js";

import styles from "./Services.module.css";

const processSteps = [
  {
    number: "01",
    icon: FiMessageCircle,
    title: "Discovery",
    description:
      "We discuss your goals, requirements, target audience, and project expectations.",
  },
  {
    number: "02",
    icon: FiSun,
    title: "Planning & Design",
    description:
      "I organize the project structure and plan a clean, user-friendly interface.",
  },
  {
    number: "03",
    icon: FiCode,
    title: "Development",
    description:
      "I build responsive and functional interfaces using modern frontend technologies.",
  },
  {
    number: "04",
    icon: FiSend,
    title: "Testing & Delivery",
    description:
      "I check responsiveness, functionality, and usability before delivering the work.",
  },
];

const additionalServices = [
  {
    icon: FiLayout,
    title: "Landing Page Development",
    description:
      "Modern landing pages designed to present products, services, and business ideas clearly.",
  },
  {
    icon: FiSmartphone,
    title: "Responsive Website Development",
    description:
      "Layouts that adapt smoothly to desktop computers, tablets, and mobile devices.",
  },
  {
    icon: FiLayers,
    title: "Reusable React Components",
    description:
      "Reusable, maintainable React components that help keep projects organized.",
  },
  {
    icon: FiCode,
    title: "Website UI Implementation",
    description:
      "Converting website designs and visual references into functional frontend interfaces.",
  },
];

const faqs = [
  {
    question: "Which technologies do you use?",
    answer:
      "My frontend toolkit includes HTML, CSS, JavaScript, React.js, Next.js, Bootstrap, and Git/GitHub.",
  },
  {
    question: "Do you build responsive websites?",
    answer:
      "Yes. I focus on responsive layouts that work across desktop, tablet, and mobile screen sizes.",
  },
  {
    question: "Can you convert a design into a website?",
    answer:
      "Yes. I can implement frontend interfaces from design references and supplied visual layouts.",
  },
  {
    question: "How can I discuss a project with you?",
    answer:
      "Use the contact page to describe your requirements. We can discuss the scope and next steps.",
  },
];

function Services() {
  return (
    <main className={styles.services}>
      {/* Page Hero */}
      <section className={styles.pageHero}>
        <div className="container">
          <div className={styles.breadcrumb}>
            <Link to="/">Home</Link>
            <span>/</span>
            <span>Services</span>
          </div>

          <div className={styles.heroContent}>
            <span className={styles.eyebrow}>
              WHAT I OFFER
            </span>

            <h1>
              Services That Bring Your{" "}
              <span>Ideas to Life.</span>
            </h1>

            <p>
              I create modern, responsive, and user-friendly
              frontend experiences that help businesses and
              individuals establish a professional online presence.
            </p>

            <Button
              to="/contact"
              variant="primary"
              icon={<FiArrowUpRight size={18} />}
            >
              Discuss Your Project
            </Button>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className={`section ${styles.mainServices}`}>
        <div className="container">
          <SectionHeading
            eyebrow="MY EXPERTISE"
            title="What I Can Help You Build"
            description="Practical frontend development services focused on quality, usability, and modern web standards."
          />

          <div className={styles.servicesGrid}>
            {services.map((service) => (
              <ServiceCard
                key={service.title}
                {...service}
                link="/contact"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className={styles.additionalSection}>
        <div className="container">
          <SectionHeading
            eyebrow="MORE SOLUTIONS"
            title="Additional Development Support"
            description="Flexible frontend solutions for different website and application requirements."
          />

          <div className={styles.additionalGrid}>
            {additionalServices.map((service) => {
              const Icon = service.icon;

              return (
                <article
                  className={styles.additionalCard}
                  key={service.title}
                >
                  <div className={styles.additionalIcon}>
                    <Icon size={23} />
                  </div>

                  <div>
                    <h3>{service.title}</h3>
                    <p>{service.description}</p>
                  </div>

                  <FiCheckCircle
                    className={styles.checkIcon}
                    size={19}
                  />
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Development Process */}
      <section className={`section ${styles.processSection}`}>
        <div className="container">
          <SectionHeading
            eyebrow="HOW I WORK"
            title="My Development Process"
            description="A clear and organized approach helps keep projects focused from the first discussion to final delivery."
          />

          <div className={styles.processGrid}>
            {processSteps.map((step) => {
              const Icon = step.icon;

              return (
                <article
                  className={styles.processCard}
                  key={step.number}
                >
                  <div className={styles.processTop}>
                    <span>{step.number}</span>

                    <div className={styles.processIcon}>
                      <Icon size={23} />
                    </div>
                  </div>

                  <h3>{step.title}</h3>

                  <p>{step.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className={styles.faqSection}>
        <div className="container">
          <SectionHeading
            eyebrow="COMMON QUESTIONS"
            title="Frequently Asked Questions"
            description="A few answers to help you understand my services and working approach."
          />

          <div className={styles.faqList}>
            {faqs.map((faq, index) => (
              <details
                className={styles.faqItem}
                key={faq.question}
                open={index === 0}
              >
                <summary>
                  <span>{faq.question}</span>
                  <span className={styles.faqPlus}>+</span>
                </summary>

                <p>{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className={styles.ctaSection}>
        <div className={`container ${styles.ctaContainer}`}>
          <div>
            <span className={styles.ctaEyebrow}>
              LET'S WORK TOGETHER
            </span>

            <h2>
              Have an idea? Let's build something great.
            </h2>

            <p>
              Tell me about your website or frontend development
              requirements. Let's discuss how I can help.
            </p>
          </div>

          <Button
            to="/contact"
            variant="primary"
            size="large"
            icon={<FiArrowRight size={19} />}
          >
            Start a Conversation
          </Button>
        </div>
      </section>
    </main>
  );
}

export default Services;
