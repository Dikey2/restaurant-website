import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && email && message) {
      alert('Message sent!');
    } else {
      alert('Please fill out all fields.');
    }
  };

  return (
    <Form onSubmit={handleSubmit} className="contact-form mx-auto" style={{ maxWidth: '500px' }}>
      <Form.Group controlId="formName">
        <Form.Label>Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </Form.Group>
      
      <Form.Group controlId="formEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </Form.Group>

      <Form.Group controlId="formMessage">
        <Form.Label>Message</Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          placeholder="Your message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
      </Form.Group>

      <Button variant="primary" type="submit" className="mt-3">
        Send Message
      </Button>
    </Form>
  );
}

export default ContactForm;
