import React, { useState, useEffect } from 'react';
<<<<<<< HEAD
import { Container } from "react-bootstrap";
=======
import { Row, Col, Form } from "react-bootstrap";
>>>>>>> 42d1e49c3e13a41f0cf35d57ac9da70284af6b48
import { ToastContainer, toast } from 'react-toastify';
import { useForm, ValidationError } from '@formspree/react';
import 'react-toastify/dist/ReactToastify.css';
export { ContactForm as Footer };

<<<<<<< HEAD
=======

>>>>>>> 42d1e49c3e13a41f0cf35d57ac9da70284af6b48
export default function ContactForm() {
  const [state, handleSubmit] = useForm("mdkdvagy");
  const [formData, setFormData] = useState({ name: "", email: "", queries: "" });
  const [formSubmitted, setFormSubmitted] = useState(false);

  useEffect(() => {
    if (state.succeeded) {
<<<<<<< HEAD
      toast.success("Message sent. I'll get back to you soon.");
=======
      toast.success("Message sent. I’ll get back to you soon.");
>>>>>>> 42d1e49c3e13a41f0cf35d57ac9da70284af6b48
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
<<<<<<< HEAD
      toast.error("All fields are required.");
      return;
    }
=======
      toast.error("All fields marked * are required.");
      return;
    }
    // hand off to Formspree
>>>>>>> 42d1e49c3e13a41f0cf35d57ac9da70284af6b48
    handleSubmit(e);
  };

  return (
    <section id="footer-down">
<<<<<<< HEAD
      <footer className="footer-new">
        <Container>
          <div className="footer-inner">
            <h2 className="footer-heading">Let's Connect</h2>
            <p className="footer-subheading">Have a project in mind? Reach out below.</p>

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
=======
      <footer className="footer">
        <div className="container-footer">
          <div className="formbox">
            <h3>Contact Me</h3>

            {state.succeeded ? (
              <p>Successfully sent to Harshita!</p>
            ) : (
              <Form onSubmit={onSubmit} noValidate>
                <Row>
                  <Col xs={12}>
                    <Form.Group className="mb-3" controlId="name">
                      <Form.Label>Your Name *</Form.Label>
                      <Form.Control
                        type="text"
                        name="name"
                        placeholder="First Name"
                        value={formData.name}
                        onChange={handleChange}
                        isInvalid={formSubmitted && !formData.name}
                        required
                      />
                      <Form.Control.Feedback type="invalid">
                        Name is required.
                      </Form.Control.Feedback>
                      <ValidationError prefix="Name" field="name" errors={state.errors} />
                    </Form.Group>
                  </Col>
                </Row>

                <Row>
                  <Col xs={12}>
                    <Form.Group className="mb-3" controlId="email">
                      <Form.Label>Your Email *</Form.Label>
                      <Form.Control
                        type="email"
                        name="email"
                        placeholder="name@example.com"
                        value={formData.email}
                        onChange={handleChange}
                        isInvalid={formSubmitted && !formData.email}
                        required
                      />
                      <Form.Control.Feedback type="invalid">
                        Email is required.
                      </Form.Control.Feedback>
                      <ValidationError prefix="Email" field="email" errors={state.errors} />
                    </Form.Group>
                  </Col>
                </Row>

                <Row>
                  <Col xs={12}>
                    <Form.Group className="mb-3" controlId="queries">
                      <Form.Label>Your Queries or Feedback *</Form.Label>
                      <Form.Control
                        as="textarea"
                        rows={3}
                        name="queries"
                        placeholder="Type your message..."
                        value={formData.queries}
                        onChange={handleChange}
                        isInvalid={formSubmitted && !formData.queries}
                        required
                      />
                      <Form.Control.Feedback type="invalid">
                        Queries/Feedback is required.
                      </Form.Control.Feedback>
                      <ValidationError prefix="Message" field="queries" errors={state.errors} />
                    </Form.Group>
                  </Col>
                </Row>

                {/* Optional: customize the email subject in Formspree notifications */}
                <input type="hidden" name="_subject" value="New contact from portfolio site" />

                <Row>
                  <Col>
                    <button type="submit" className="submit-button" disabled={state.submitting}>
                      {state.submitting ? "Sending..." : "Send"}
                    </button>
                  </Col>
                </Row>
              </Form>
            )}
          </div>

          <div className="second-box">
            <Row>
              <Col xs={12}><div><h5>harshitachegondi1@gmail.com</h5></div></Col>
            </Row>
            <Row>
              <Col xs={12}><div><h5>+1 (682)-392-5855</h5></div></Col>
            </Row>
            <Row>
              <Col xs={12}><div><h5>Location: Arlington, Texas</h5></div></Col>
            </Row>
          </div>
        </div>

        <center className="center-bottom">
          Driven by innovation, powered by passion | © 2025 Harshita Chegondi. All Rights Reserved
        </center>
>>>>>>> 42d1e49c3e13a41f0cf35d57ac9da70284af6b48
      </footer>

      <ToastContainer />
    </section>
  );
}
