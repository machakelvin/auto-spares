import React from 'react';
import '../assets/css/Contact.css';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

function Contact() {
  return (
    <div className="contact-page">
      <div className="contact-info">
        <h1>Contact Us</h1>
        <div className="info-item">
          <FaMapMarkerAlt className="icon" />
          <div className="info-text">
            <h3>Address</h3>
            <p>Mbezi Louis-kingstone</p>
          </div>
        </div>
        <div className="info-item">
          <FaPhoneAlt className="icon" />
          <div className="info-text">
            <h3>Phone</h3>
            <p>+255 783 522 226</p>
            <p>+255 622 109 047</p>
            <p>+255 757 082 255</p>
          </div>
        </div>
        <div className="info-item">
          <FaEnvelope className="icon" />
          <div className="info-text">
            <h3>Email</h3>
            <p>machakelvin76@gmail.com</p>
          </div>
        </div>
      </div>
      <div className="contact-form">
        <h2>Send Us a Message</h2>
        <form>
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <input type="tel" placeholder="Your Phone Number" required />
          <textarea placeholder="Your Message" rows="5" required></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>
      <div className="map">
        <h2>Find Us</h2>
        <iframe
          title="Location Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3962.0070866088627!2d39.11624607370834!3d-6.76898876619106!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x185c4503f7afdb7b%3A0x26aa6b4d6e7c589c!2sKingstone%20Park%20and%20Resort!5e0!3m2!1sen!2stz!4v1721923111890!5m2!1sen!2stz"
          width="100%"
          height="300"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
}

export default Contact;
