import { useState, useEffect } from 'react';
import { Container } from "react-bootstrap";
import { ToastContainer, toast } from 'react-toastify';
import { useForm, ValidationError } from '@formspree/react';
import 'react-toastify/dist/ReactToastify.css';

export default function ContactForm() {
  const [state, handleSubmit] = useForm("mdkdvagy");
  const [formData, setFormData] = useState({ name: "", email: "", queries: "" });
  const [formSubmitted, setFormSubmitted] = useState(false);

  useEffect(() => {
    if (state.succeeded) {
      toast.success("Message sent. I'll get back to you soon.");
      setFormData({ name: "", email: "", queries: "" });
      setFormSubmitted(false);
    }
    if (state.errors && state.errors.length) {
      toast.error("Please check the form and try again.");
    }
  }, [state.succeeded, state.errors]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const onSubmit = (e) => {
    setFormSubmitted(true);
    if (!formData.name || !formData.email || !formData.queries) {
      e.preventDefault();
      toast.error("All fields are required.");
      return;
    }
    handleSubmit(e);
  };

  return (
    <section id="footer-down">
      <footer className="footer-new">
        <Container>
          <div className="footer-inner">
            <h2 className="footer-ing">Let's Connect</h2>
            <p className="footer-subing">Have a project in mind? Reach out below.</p>

            {state.succeeded ? (
              <p className="footer-success">Successfully sent! I'll get back to you soon.</p>
            ) : (
              <form onSubmit={onSubmit} noValidate className="footer-form">
                <input
                  type="text"
                  name="name"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`footer-input${formSubmitted && !formData.name ? ' footer-input-error' : ''}`}
                />
                {formSubmitted && !formData.name && <span className="footer-error-msg">Name is required.</span>}
                <ValidationError prefix="Name" field="name" errors={state.errors} />

                <input
                  type="email"
                  name="email"
                  placeholder="Email address"
                  value={formData.email}
                  onChange={handleChange}
                  className={`footer-input${formSubmitted && !formData.email ? ' footer-input-error' : ''}`}
                />
                {formSubmitted && !formData.email && <span className="footer-error-msg">Email is required.</span>}
                <ValidationError prefix="Email" field="email" errors={state.errors} />

                <textarea
                  name="queries"
                  placeholder="Message"
                  rows={4}
                  value={formData.queries}
                  onChange={handleChange}
                  className={`footer-input footer-textarea${formSubmitted && !formData.queries ? ' footer-input-error' : ''}`}
                />
                {formSubmitted && !formData.queries && <span className="footer-error-msg">Message is required.</span>}
                <ValidationError prefix="Message" field="queries" errors={state.errors} />

                <input type="hidden" name="_subject" value="New contact from portfolio site" />

                <button type="submit" className="footer-send-btn" disabled={state.submitting}>
                  {state.submitting ? "Sending..." : "Send"}
                </button>
              </form>
            )}
          </div>
        </Container>

        <div className="footer-bottom">
          Driven by innovation, powered by passion &nbsp;|&nbsp; © 2025 Harshita Chegondi. All Rights Reserved
        </div>
      </footer>

      <ToastContainer />
    </section>
  );
}

export { ContactForm as Footer };
