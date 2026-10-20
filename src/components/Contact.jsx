import '../styles/Contact.css'

function Contact() {
return ( <section className="contact-section" id="contact"> <div className="contact-container">

    <div className="contact-topline">
      <span className="contact-label">
        <span className="contact-status-dot"></span>
        GET IN TOUCH
      </span>
      <span className="contact-number">05 / CONTACT</span>
    </div>

    <div className="contact-main">
      <div className="contact-heading">
        <p className="contact-eyebrow">
          HAVE A PROJECT IN MIND?
        </p>

        <h2>
          Let's make
          <br />
          something <span>meaningful.</span>
        </h2>

        <p className="contact-description">
          Have a project, an idea, or an opportunity?
          I'd love to hear from you. Choose your preferred
          way to get in touch, and let's talk.
        </p>

        <div className="contact-actions">
          <a
            href="https://wa.me/2348156116975"
            className="contact-button whatsapp-button"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>Chat on WhatsApp</span>
            <span className="contact-button-icon">↗</span>
          </a>

          <a
            href="mailto:kaludestiny194@gmail.com"
            className="contact-button email-button"
          >
            <span>Send me an email</span>
            <span className="contact-button-icon">↗</span>
          </a>
        </div>
      </div>

      <div className="contact-details">
        <div className="contact-detail">
          <span className="contact-detail-label">WHATSAPP</span>
          <a
            href="https://wa.me/2348156116975"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-detail-value contact-detail-link"
          >
            +234 815 611 6975 ↗
          </a>
        </div>

        <div className="contact-detail">
          <span className="contact-detail-label">EMAIL</span>
          <a
            href="mailto:kaludestiny194@gmail.com"
            className="contact-detail-value contact-detail-link"
          >
            kaludestiny194@gmail.com ↗
          </a>
        </div>

        <div className="contact-detail">
          <span className="contact-detail-label">SPECIALITY</span>
          <span className="contact-detail-value">
            Front-End Development
          </span>
        </div>
      </div>
    </div>

    <div className="contact-bottomline">
      <span>HAVE SOMETHING IN MIND?</span>
      <span>
        LET'S TALK <span className="contact-bottom-arrow">↗</span>
      </span>
    </div>

  </div>
</section>


)
}

export default Contact
