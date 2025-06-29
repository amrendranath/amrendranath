import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { FiSend, FiUser, FiMail, FiMessageSquare } from "react-icons/fi";
import { socialLinks } from "../data/constants";

const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    success: boolean;
    message: string;
  } | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear error when user types
    if (errors[name as keyof typeof errors]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const validateForm = () => {
    let valid = true;
    const newErrors = {
      name: "",
      email: "",
      message: "",
    };

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
      valid = false;
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
      valid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
      valid = false;
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
      valid = false;
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message should be at least 10 characters";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Replace with actual form submission logic
      await new Promise((resolve) => setTimeout(resolve, 1500));

      setSubmitStatus({
        success: true,
        message: "Thank you! Your message has been sent successfully.",
      });
      formRef.current?.reset();
      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } catch {
      setSubmitStatus({
        success: false,
        message: "Something went wrong. Please try again later.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="contact-section">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="container"
      >
        <h2 className="section-title">Contact Me</h2>
        <p className="section-subtitle">Get in touch</p>

        <div className="contact-content">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="contact-info"
          >
            <h3>Let's Talk</h3>
            <p>
              Have a project in mind or want to discuss potential opportunities?
              Feel free to reach out through this form or directly via email.
            </p>

            <ul className="contact-details">
              <li>
                <FiMail className="contact-icon" />
                <a href="mailto:amrendra@example.com">amrendra@example.com</a>
              </li>
              <li>
                <FiUser className="contact-icon" />
                <span>Based in Bangalore, India</span>
              </li>
            </ul>

            <div className="contact-social">
              {socialLinks.map((link) => (
                <a
                  key={link.id}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.name}
                >
                  {<link.icon />}
                </a>
              ))}
            </div>
          </motion.div>

          <motion.form
            ref={formRef}
            onSubmit={handleSubmit}
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="contact-form"
            noValidate
          >
            <div className={`form-group ${errors.name ? "error" : ""}`}>
              <label htmlFor="name">
                <FiUser className="input-icon" />
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
              />
              {errors.name && (
                <span className="error-message">{errors.name}</span>
              )}
            </div>

            <div className={`form-group ${errors.email ? "error" : ""}`}>
              <label htmlFor="email">
                <FiMail className="input-icon" />
                Your Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
              />
              {errors.email && (
                <span className="error-message">{errors.email}</span>
              )}
            </div>

            <div className={`form-group ${errors.message ? "error" : ""}`}>
              <label htmlFor="message">
                <FiMessageSquare className="input-icon" />
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Enter your message"
                rows={5}
              ></textarea>
              {errors.message && (
                <span className="error-message">{errors.message}</span>
              )}
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="submit-btn"
            >
              {isSubmitting ? (
                "Sending..."
              ) : (
                <>
                  <FiSend className="btn-icon" />
                  Send Message
                </>
              )}
            </button>

            {submitStatus && (
              <div
                className={`form-status ${
                  submitStatus.success ? "success" : "error"
                }`}
              >
                {submitStatus.message}
              </div>
            )}
          </motion.form>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
