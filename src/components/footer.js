import React, { useState, useEffect } from 'react';
import { Row, Col, Form } from "react-bootstrap";
import { ToastContainer, toast } from 'react-toastify';
import { useForm, ValidationError } from '@formspree/react';
import 'react-toastify/dist/ReactToastify.css';
export { ContactForm as Footer };


export default function ContactForm() {
  const [state, handleSubmit] = useForm("mdkdvagy");
  const [formData, setFormData] = useState({ name: "", email: "", queries: "" });
  const [formSubmitted, setFormSubmitted] = useState(false);

  useEffect(() => {
    if (state.succeeded) {
      toast.success("Message sent. I’ll get back to you soon.");
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
      toast.error("All fields marked * are required.");
      return;
    }
    // hand off to Formspree
    handleSubmit(e);
  };

  return (
    <section id="footer-down">
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
      </footer>

      <ToastContainer />
    </section>
  );
}
