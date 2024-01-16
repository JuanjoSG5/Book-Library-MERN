import React, { useState } from 'react';
import BackButton from '../components/buttons/BackButton.jsx';
import './../css/main.css';

const ContactPage = () => {
  const [inquiryType, setInquiryType] = useState('General');
  const [message, setMessage] = useState('');
  const [formError, setFormError] = useState('');

  const validateForm = () => {
    if (!inquiryType) {
      setFormError('Inquiry type is required.');
      return false;
    }

    const trimmedMessage = message.trim();
    if (!trimmedMessage || trimmedMessage.split(/\s+/).length < 50) {
      setFormError(trimmedMessage ? 'Message must be at least 50 words.' : 'Please, write your problems here.');
      return false;
    }

    setFormError('');
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      console.log('Form submitted:', { inquiryType, message });
      // Add any additional actions you want to perform on successful form submission.
    }
  };

  return (
    <>
      <BackButton />
      <form className='contact-form' onSubmit={handleSubmit}>
        <legend className='contact-container'>
          <label className="contact-select">
            Inquiry Type:
            <select
              className="contact-select"
              value={inquiryType}
              onChange={(e) => setInquiryType(e.target.value)}
            >
              <option value="General">General Inquiry</option>
              <option value="Book Request">Book Request</option>
              <option value="Technical Support">Technical Support</option>
              <option value="Other">Other</option>
            </select>
          </label>
          <br />

          <label className="contact-textarea">
            Message:
            <textarea
              className="contact-textarea"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            {formError && <p style={{ color: 'red', marginTop: '5px' }}>{formError}</p>}
          </label>
          <br />

          <button type="submit" className="contact-button">
            Submit
          </button>
        </legend>
      </form>
    </>
  );
};

export default ContactPage;
