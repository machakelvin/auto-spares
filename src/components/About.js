import React from 'react';
import './About.css';

function About() {
  return (
    <div className="about">
      <h1>About Us</h1>
      <section className="about-section">
        <h2>Our Shop</h2>
        <p>
          Welcome to our automotive shop, where we specialize in providing top-notch services and products for all your automotive needs. Our team is dedicated to ensuring your vehicle runs smoothly and efficiently.
        </p>
      </section>

      <section className="about-section">
        <h2>Services We Offer</h2>
        <p>
          We offer a wide range of services to keep your vehicle in perfect condition:
        </p>
        <ul>
          <li>Wheel Alignment</li>
          <li>Wheel Balancing</li>
          <li>Car Tire Repair</li>
          <li>Engine Repairs for all car brands</li>
          <li>Body Repairs for all types of cars</li>
          <li>Car Electrical Repairs</li>
        </ul>
      </section>

      <section className="about-section">
        <h2>Our Expertise</h2>
        <p>
          Our team comprises skilled professionals who are experts in their respective fields. Whether it's fixing car engines, repairing bodies, or addressing electrical issues, we ensure top-quality service.
        </p>
      </section>

      <section className="about-section">
        <h2>Advanced Technology</h2>
        <p>
          We leverage advanced machines to enhance the quality and accuracy of our services. Our state-of-the-art equipment ensures that every task is performed with the highest level of precision, from wheel alignment to engine repairs.
        </p>
      </section>

      <section className="about-section">
        <h2>Our Commitment</h2>
        <p>
          We are committed to providing excellent customer service and ensuring your satisfaction. Visit us for all your automotive needs, and experience the best in service and technology.
        </p>
      </section>
    </div>
  );
}

export default About;
