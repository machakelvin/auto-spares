import React from 'react';
import './Home.css';
import backgroundImage from '../../assets/img/automotive-spare-parts.jpg';  // Update the path
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate()

  const redirectToProduct = ()=>{
    navigate('/products')
  }
  return (
    <div className="hero" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="overlay">
        <h1>Welcome to Our Auto Spares Shop</h1>
        <p>Your one-stop shop for automotive parts and services.</p>
        <button className="cta-button" onClick={redirectToProduct}>Shop Now</button>
      </div>
      
    </div>
  );
}

export default Home;
