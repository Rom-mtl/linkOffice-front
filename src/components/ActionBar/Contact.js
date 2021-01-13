import React from 'react';
import './Contact.scss';
import { FcPlus } from 'react-icons/fc';

const Contact = () => {
  return (
    <div className="contacts">
      <h2>Contacts</h2>
      <div className="contacts-list">
        <div className="contact">
          <FcPlus className="contact-picker" />
          <div className="contact-status" />
          <div className="contact-name">Contact Name </div>
        </div>
        <div className="contact">
          <FcPlus className="contact-picker" />
          <div className="contact-status" />
          <div className="contact-name">Contact Name </div>
        </div>
        <div className="contact">
          <FcPlus className="contact-picker" />
          <div className="contact-status" />
          <div className="contact-name">Contact Name </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
