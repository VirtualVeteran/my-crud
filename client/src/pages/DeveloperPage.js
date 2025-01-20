// DeveloperPage.js
import React from 'react';
import '../css/DeveloperPage.css';
import developerImage from '../assets/developer.png';

const DeveloperPage = () => {
  return (
    <div className="developer-page">
      <div className="developer-card">
      <img 
  src={developerImage} 
  alt="Cute avatar of the developer" 
  className="developer-avatar" 
/>    <h1 className="developer-name">🌸Hi, I'm E! 🌸</h1>
        <p className="developer-bio">
        🪐💫I am a Developer for Mission Delta 4 and I design and build web apps to support Space Operations World Wide💫🪐 </p>
          
         <p>  When I'm not coding, you can find me:
        </p>
        <ul className="hobbies-list">
          <li>🎨 Drawing and designing cozy stickers on my Redbubble account</li>
          <li>🎮 Playing cozy video games like - Palia, Fairy Farm, Wylde Flowers, Infinity Niki, Witch Cove</li>
          <li>☁️ Being whimsical outside with my Spouse</li>
          <li>🐾 Hanging out with my cats- Aspen, Kivi, Shook, and Magnus</li>
        </ul>
        <p className="developer-mission">
        🌟My mission? To get my Z-prefix!🌟
        </p>
        <div className="social-links">
        <a href="/" className="kawaii-button">Back to Home</a>
        </div>
      </div>
    </div>
  );
};

export default DeveloperPage;
