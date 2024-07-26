import React from 'react';
import './Home.css';
import backgroundImage from '../assets/automotive-spare-parts.jpg';  // Update the path

function Home() {
  return (
    <div className="hero" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="overlay">
        <h1>Welcome to Our Auto Spares Shop</h1>
        <p>Your one-stop shop for automotive parts and services.</p>
        <button className="cta-button">Shop Now</button>
      </div>
      <div className="info-sections">
        <section className="info-section">
          <h2>About Us</h2>
          <p>We offer a wide range of automotive spare parts and services, ensuring quality and reliability for all your automotive needs.</p>
        </section>
        <section className="info-section">
          <h2>Services We Offer</h2>
          <ul>
            <li>Wheel Alignment</li>
            <li>Wheel Balancing</li>
            <li>Car Tire Repair</li>
            <li>Engine Repairs for all car brands</li>
            <li>Body Repairs for all types of cars</li>
            <li>Car Electrical Repairs</li>
          </ul>
        </section>
        <section className="info-section">
          <h2>Technology</h2>
          <p>We use advanced machines to ensure the quality and accuracy of our services, providing the best care for your vehicle.</p>
        </section>
        <section className="info-section">
          <h2>Our Skilled Team</h2>
          <p>Our team of skilled professionals is dedicated to providing top-notch services for all your automotive needs. From engine repairs to bodywork, we have the expertise to handle it all.</p>
        </section>
      </div>
    </div>
  );
}

export default Home;
