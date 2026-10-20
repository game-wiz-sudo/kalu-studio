import '../styles/Hero.css'

function Hero() {
  return (
    <section className="hero-section" id="home">
      <div className="hero-container">

        <div className="hero-content">
          <div className="hero-status">
            <span className="status-indicator"></span>
            <span>FRONT-END DEVELOPER</span>
          </div>

          <h1 className="hero-title">
            Building digital
            <br />
            experiences with
            <br />
            <span>purpose.</span>
          </h1>

          <p className="hero-description">
            I'm Kalu Destiny, a front-end developer focused on
            creating thoughtful, responsive, and user-friendly
            experiences for the web.
          </p>

          <div className="hero-actions">
            <a href="#work" className="hero-button primary-button">
              Explore my work
              <span>↗</span>
            </a>

            <a href="#contact" className="hero-button secondary-button">
              Get in touch
            </a>
          </div>

          <div className="hero-meta">
            <span>BASED IN NIGERIA</span>
            <span className="meta-divider"></span>
            <span>BUILDING FOR THE WEB</span>
          </div>
        </div>

        <div className="code-panel">
          <div className="code-panel-header">
            <div className="window-controls">
              <span></span>
              <span></span>
              <span></span>
            </div>

            <span className="code-filename">developer.js</span>

            <span className="code-language">JS</span>
          </div>

          <div className="code-panel-body">
            <div className="code-line">
              <span className="line-number">01</span>
              <span>
                <span className="code-purple">const</span>{' '}
                <span className="code-blue">dev</span>{' '}
                <span className="code-white">=</span>{' '}
                <span className="code-white">{'{'}</span>
              </span>
            </div>

            <div className="code-line">
              <span className="line-number">02</span>
              <span className="code-indent">
                <span className="code-green">name</span>
                <span className="code-white">:</span>{' '}
                <span className="code-orange">"Kalu Destiny"</span>
                <span className="code-white">,</span>
              </span>
            </div>

            <div className="code-line">
              <span className="line-number">03</span>
              <span className="code-indent">
                <span className="code-green">role</span>
                <span className="code-white">:</span>{' '}
                <span className="code-orange">"Front-End Developer"</span>
                <span className="code-white">,</span>
              </span>
            </div>

            <div className="code-line">
              <span className="line-number">04</span>
              <span className="code-indent">
                <span className="code-green">focus</span>
                <span className="code-white">:</span>{' '}
                <span className="code-orange">"User experience"</span>
                <span className="code-white">,</span>
              </span>
            </div>

            <div className="code-line">
              <span className="line-number">05</span>
              <span className="code-indent">
                <span className="code-green">mindset</span>
                <span className="code-white">:</span>{' '}
                <span className="code-orange">"Always learning"</span>
              </span>
            </div>

            <div className="code-line">
              <span className="line-number">06</span>
              <span className="code-white">{'};'}</span>
            </div>

            <div className="code-separator"></div>

            <div className="code-line">
              <span className="line-number">07</span>
              <span>
                <span className="code-purple">export default</span>{' '}
                <span className="code-blue">dev</span>
                <span className="code-white">;</span>
              </span>
            </div>
          </div>

          <div className="code-panel-footer">
            <span>
              <span className="footer-dot"></span>
              Always building
            </span>

            <span>UTF-8</span>
          </div>

          <div className="code-decoration decoration-one"></div>
          <div className="code-decoration decoration-two"></div>
        </div>

      </div>

      <div className="hero-bottom">
        <span>INTRODUCTION</span>

        <a href="#about" aria-label="Scroll to about section">
          <span className="scroll-line"></span>
          SCROLL TO EXPLORE
        </a>

        <span className="hero-index">01 / 05</span>
      </div>
    </section>
  )
}

export default Hero