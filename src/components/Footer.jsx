
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Footer.css';

function Footer() {
  const currentYear = new Date().getFullYear();

  const legalLinks = [
    { label: 'Privacy Policy', path: '/privacy-policy' },
    { label: 'Terms of Use', path: '/terms-of-use' },
    { label: 'Disclaimer', path: '/disclaimer' },
    { label: 'Cookie Policy', path: '/cookie-policy' },
    { label: 'Accessibility', path: '/accessibility' },
  ];

  const navigationLinks = [
    { label: 'Home', path: '#home' },
    { label: 'About', path: '#about' },
    { label: 'Expertise', path: '#expertise' },
    { label: 'Work', path: '#work' },
    { label: 'Education', path: '#education' },
  ];

  return (
    <footer className="site-footer">
      <div className="footer-container">

        <div className="footer-main">

          <div className="footer-brand-column">
            <a href="#home" className="footer-brand">
              kalu<span>.dev</span>
            </a>

            <p className="footer-description">
              Front-end developer and web designer focused on building
              modern, responsive, and thoughtfully designed digital experiences.
            </p>

            <div className="footer-availability">
              <span className="footer-status-dot"></span>
              <span>Open to opportunities</span>
            </div>
          </div>

          <div className="footer-links-column">
            <h3>EXPLORE</h3>

            <nav className="footer-link-list" aria-label="Footer navigation">
              {navigationLinks.map((item) => (
                <a href={item.path} key={item.label}>
                  {item.label}
                </a>
              ))}
            </nav>
          </div>

          <div className="footer-links-column">
            <h3>LEGAL</h3>

            <nav className="footer-link-list" aria-label="Legal navigation">
              {legalLinks.map((item) => (
                <Link to={item.path} key={item.path}>
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          <div className="footer-links-column footer-contact-column">
            <h3>GET IN TOUCH</h3>

            <a
              href="mailto:kaludestiny194@gmail.com"
              className="footer-contact-link"
            >
              Email me <span aria-hidden="true">↗</span>
            </a>

            <a
              href="https://wa.me/2348156116975"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-contact-link"
            >
              WhatsApp <span aria-hidden="true">↗</span>
            </a>

            <a
              href="https://github.com/game-wiz-sudo"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-contact-link"
            >
              GitHub <span aria-hidden="true">↗</span>
            </a>
          </div>

        </div>

        <div className="footer-middle">
          <span>THOUGHTFULLY DESIGNED. BUILT WITH PURPOSE.</span>

          <a href="#home" className="footer-back-to-top">
            Back to top <span aria-hidden="true">↑</span>
          </a>
        </div>

        <div className="footer-bottom">

          <p className="footer-copyright">
            © {currentYear} KALU.DEV. All rights reserved.
          </p>

          <p className="footer-credit">
            Designed &amp; built by <span>KALU.DEV</span>
          </p>

        </div>

      </div>
    </footer>
  );
}

export default Footer;

