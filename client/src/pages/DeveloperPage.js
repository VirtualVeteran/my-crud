// DeveloperPage.js
import React from 'react';
import '../css/DeveloperPage.css';

const DeveloperPage = () => {
  return (
    <div className="developer-page">
      <div className="developer-card">
        <img 
          src="/path-to-your-avatar-image.jpg" 
          alt="Cute avatar of the developer" 
          className="developer-avatar" 
        />
        <h1 className="developer-name">🌸Hi, I'm E! 🌸</h1>
        <p className="developer-bio">
          I'm a passionate web developer who loves creating magical experiences on the web.✨ When I'm not coding, you can find me:
        </p>
        <ul className="hobbies-list">
          <li>🎨 Drawing and designing cute characters</li>
          <li>🎮 Playing cozy video games</li>
          <li>☁️ Dreaming up new ideas for fun projects</li>
          <li>🐾 Hanging out with my cats</li>
        </ul>
        <p className="developer-mission">
          My mission? To spread joy and a touch of kawaii through every website I build! 💕
        </p>
        <div className="social-links">
         
        </div>
      </div>
    </div>
  );
};

export default DeveloperPage;
