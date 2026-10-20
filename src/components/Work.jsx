
import React from 'react';
import '../styles/Work.css';

function Work() {
  return (
    <section className="work-section" id="work">
      <div className="work-container">

        {/* Section Topline */}
        <div className="work-topline">
          <span className="work-topline-label">
            SELECTED WORK
          </span>

          <span className="work-topline-number">
            04 / PORTFOLIO
          </span>
        </div>

        {/* Section Introduction */}
        <div className="work-intro">
          <span className="work-eyebrow">
            QUALITY OVER QUANTITY
          </span>

          <h2 className="work-heading">
            Good work takes
            <br />
            <span>time to build.</span>
          </h2>

          <p className="work-description">
            I'm building projects that reflect my approach to
            thoughtful design, clean code, and meaningful user
            experiences. This collection will be updated as
            completed projects become available.
          </p>
        </div>

        {/* Empty Portfolio State */}
        <div className="work-empty-state">
          <div className="work-empty-icon">
            <span></span>
            <span></span>
            <span></span>
          </div>

          <span className="work-empty-label">
            PORTFOLIO IN PROGRESS
          </span>

          <h3>Something good is coming.</h3>

          <p>
            New projects will appear here once they're finished
            and ready to share.
          </p>

          <span className="work-coming-soon">
            NEW PROJECTS COMING SOON
          </span>
        </div>

        {/* Bottom Line */}
        <div className="work-bottomline">
          <span>
            THOUGHTFUL BY DESIGN. BUILT WITH PURPOSE.
          </span>

          <a href="#contact" className="work-contact-link">
            HAVE A PROJECT IN MIND?
            <span aria-hidden="true"> ↗</span>
          </a>
        </div>

      </div>
    </section>
  );
}

export default Work;
