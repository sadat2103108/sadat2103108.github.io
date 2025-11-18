import React from 'react';

import cfLogo from '../assets/cflogo.png';
import mailLogo from '../assets/maillogo.png';

const ContactSection = () => {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <h2>Contact Me</h2>
        <p>
          I'm open to collaboration, freelance opportunities, or full-time positions.
          Feel free to reach out via email or connect with me on social platforms.
        </p>

        <div className="contact-info">
          <div className="contact-name-email">
            <span className="contact-name">Md. Shameem Sadat</span>
            <a href="mailto:shameemsadat00@gmail.com" className="contact-email">
              <img src={mailLogo} alt="Email" />
              shameemsadat00@gmail.com
            </a>
          </div>

          <div className="contact-socials">
            <a href="https://github.com/sadat2103108" target="_blank" rel="noreferrer" title="GitHub">
              <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="GitHub" style={{ filter: 'invert(1)' }} />
            </a>

            <a href="https://www.linkedin.com/in/shameem-sadat-4920b9188/" target="_blank" rel="noreferrer" title="LinkedIn">
              <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="LinkedIn" />
            </a>

            <a href="https://codeforces.com/profile/sadat" target="_blank" rel="noreferrer" title="Codeforces">
              <img src={cfLogo} alt="Codeforces" />
            </a>

            <a href="https://www.facebook.com/lifeofsadat" target="_blank" rel="noreferrer" title="Facebook">
              <img src="https://cdn-icons-png.flaticon.com/512/733/733547.png" alt="Facebook" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
