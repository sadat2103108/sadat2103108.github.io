import React from 'react'

import profilePic from '../assets/profile.jpg';

const HeroSection = () => {
  return (
    <section id="hero" className="hero">
      <div className="hero-content">
        {/* Image on the left */}
        <div className="hero-image">
          <img src={profilePic} alt="Sadat" />
        </div>

        {/* Text on the right */}
        <div className="hero-text">
          <p className="greeting">Hello There, I am </p>
          <h1 className="hero-name">Sadat</h1>
          <p className="hero-subtitle">
            A <span style={{ color: "cyan" }}>Computer Science &amp; Engineering</span> Student, in <br />
            Rajshahi University of Engineering & Technology
          </p>
          <a href="#cp" className="btn-cta">Learn more about me</a>
        </div>
      </div>
    </section>
  )
}

export default HeroSection