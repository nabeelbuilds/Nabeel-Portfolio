
import { useState } from "react";
import { FiSend } from "react-icons/fi";
import Button from "../Button/Button";
import styles from "./ContactForm.module.css";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/xoeebzog";

const initialFormData = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

function ContactForm() {
  const [formData, setFormData] = useState(initialFormData);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle");

  function validateForm() {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Please enter your name.";
    } else if (formData.name.trim().length < 2) {
      newErrors.name = "Name must contain at least 2 characters.";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Please enter your email address.";
    } else if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())
    ) {
      newErrors.email = "Please enter a valid email address.";
    }

    if (!formData.subject.trim()) {
      newErrors.subject = "Please enter a subject.";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Please enter your message.";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must contain at least 10 characters.";
    } else if (formData.message.trim().length > 2000) {
      newErrors.message = "Message cannot exceed 2000 characters.";
    }

    return newErrors;
  }

  function handleChange(event) {
    const { name, value } = event.target;

    setFormData((previousData) => ({
      ...previousData,
      [name]: value,
    }));

    setErrors((previousErrors) => ({
      ...previousErrors,
      [name]: "",
    }));

    setStatus("idle");
  }

  async function handleSubmit(event) {
    event.preventDefault();

    if (status === "sending") return;

    const validationErrors = validateForm();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      return;
    }

    setStatus("sending");

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Message submission failed.");
      }

      setStatus("success");
      setFormData(initialFormData);
      setErrors({});
    } catch (error) {
      console.error("Contact form error:", error);
      setStatus("submitError");
    }
  }

  return (
    <form
      className={styles.form}
      onSubmit={handleSubmit}
      noValidate
    >
      <div className={styles.formGrid}>
        <div className={styles.field}>
          <label htmlFor="contact-name">
            Your Name <span>*</span>
          </label>

          <input
            id="contact-name"
            type="text"
            name="name"
            placeholder="Enter your full name"
            value={formData.name}
            onChange={handleChange}
            maxLength={80}
            autoComplete="name"
            aria-invalid={Boolean(errors.name)}
          />

          {errors.name && (
            <p className={styles.error}>{errors.name}</p>
          )}
        </div>

        <div className={styles.field}>
          <label htmlFor="contact-email">
            Email Address <span>*</span>
          </label>

          <input
            id="contact-email"
            type="email"
            name="email"
            placeholder="example@email.com"
            value={formData.email}
            onChange={handleChange}
            maxLength={254}
            autoComplete="email"
            aria-invalid={Boolean(errors.email)}
          />

          {errors.email && (
            <p className={styles.error}>{errors.email}</p>
          )}
        </div>

        <div className={`${styles.field} ${styles.fullWidth}`}>
          <label htmlFor="contact-subject">
            Subject <span>*</span>
          </label>

          <input
            id="contact-subject"
            type="text"
            name="subject"
            placeholder="What would you like to discuss?"
            value={formData.subject}
            onChange={handleChange}
            maxLength={120}
            aria-invalid={Boolean(errors.subject)}
          />

          {errors.subject && (
            <p className={styles.error}>{errors.subject}</p>
          )}
        </div>

        <div className={`${styles.field} ${styles.fullWidth}`}>
          <label htmlFor="contact-message">
            Your Message <span>*</span>
          </label>

          <textarea
            id="contact-message"
            name="message"
            placeholder="Tell me about your project or opportunity..."
            rows={6}
            maxLength={2000}
            value={formData.message}
            onChange={handleChange}
            aria-invalid={Boolean(errors.message)}
          />

          <div className={styles.messageFooter}>
            {errors.message ? (
              <p className={styles.error}>
                {errors.message}
              </p>
            ) : (
              <span className={styles.counter}>
                {formData.message.length}/2000 characters
              </span>
            )}
          </div>
        </div>
      </div>

      {status === "success" && (
        <p className={styles.infoMessage} role="status">
          Your message has been sent successfully!
          I'll get back to you soon.
        </p>
      )}

      {status === "submitError" && (
        <p className={styles.errorMessage} role="alert">
          Sorry, your message could not be sent.
          Please try again or email me directly.
        </p>
      )}

      <div className={styles.submitWrapper}>
        <Button
          type="submit"
          variant="primary"
          size="large"
          icon={<FiSend size={17} />}
        >
          {status === "sending" ? "Sending..." : "Send Message"}
        </Button>
      </div>
    </form>
  );
}

export default ContactForm;
