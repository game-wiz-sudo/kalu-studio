import '../styles/About.css'

function About() {
return ( <section className="about-section" id="about"> <div className="about-container">

    <div className="about-heading">
      <span className="section-label">
        <span className="section-dot"></span>
        A LITTLE ABOUT ME
      </span>

      <h2>
        Good work starts
        <br />
        <span>with thoughtful details.</span>
      </h2>
    </div>

    <div className="about-content">
      <div className="about-intro">
        <span className="about-number">01 / ABOUT</span>

        <p className="about-main-text">
          I'm Kalu Destiny, a front-end developer focused on
          creating thoughtful, responsive, and user-friendly
          experiences for the web.
        </p>

        <p className="about-secondary-text">
          I enjoy bringing ideas to life through code and exploring
          how design and technology can work together. For me,
          good development is about more than making a page look
          right. It's about making it clear, accessible, easy to use,
          and reliable across different devices.
        </p>

        <p className="about-secondary-text">
          I'm continually improving my skills, learning new
          approaches, and building projects that challenge me
          to become a better developer.
        </p>
      </div>

      <div className="about-details">

        <div className="about-detail-card">
          <span className="detail-index">01</span>

          <div>
            <h3>Thoughtful Development</h3>
            <p>
              Writing structured, maintainable code and paying
              attention to the details that make interfaces work well.
            </p>
          </div>

          <span className="detail-arrow">↗</span>
        </div>

        <div className="about-detail-card">
          <span className="detail-index">02</span>

          <div>
            <h3>Built for People</h3>
            <p>
              Creating responsive experiences that feel natural
              to use across phones, tablets, and desktops.
            </p>
          </div>

          <span className="detail-arrow">↗</span>
        </div>

        <div className="about-detail-card">
          <span className="detail-index">03</span>

          <div>
            <h3>Always Improving</h3>
            <p>
              Learning through practice, exploring better solutions,
              and growing with every project I build.
            </p>
          </div>

          <span className="detail-arrow">↗</span>
        </div>

      </div>
    </div>

    <div className="about-bottom">
      <span>BASED IN NIGERIA</span>
      <span className="about-bottom-line"></span>
      <span>FOCUSED ON CONTINUOUS GROWTH</span>
    </div>

  </div>
</section>


)
}

export default About
