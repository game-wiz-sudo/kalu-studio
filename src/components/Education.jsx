import React from 'react';
import '../styles/Education.css';

const achievements = [
  {
    id: '01',
    title: 'WAEC Certificate',
    category: 'Secondary Education',
    year: '2023',
    status: 'Completed',
    type: 'completed',
    description:
      'Successfully completed the West African Senior School Certificate Examination.',
  },
  {
    id: '02',
    title: 'NECO Certificate',
    category: 'Secondary Education',
    year: '2023',
    status: 'Completed',
    type: 'completed',
    description:
      'Successfully completed the National Examinations Council certificate.',
  },
  {
    id: '03',
    title: 'Front-End Development',
    category: 'Professional Certification',
    year: '2026',
    status: 'Completed',
    type: 'completed',
    description:
      'Certificate in front-end development, reflecting a commitment to building modern web experiences.',
  },
  {
    id: '04',
    title: 'BSc Information Technology',
    category: 'University Education',
    year: 'In progress',
    status: 'In Progress',
    type: 'ongoing',
    description:
      'Currently pursuing a Bachelor of Science degree in Information Technology.',
  },
];

function Education() {
  return (
    <section className="education-section" id="education">
      <div className="education-container">

        {/* Section Header */}
        <div className="education-topline">
          <span className="education-topline-label">
            EDUCATION & ACHIEVEMENTS
          </span>

          <span className="education-topline-number">
            05 / MY JOURNEY
          </span>
        </div>

        {/* Introduction */}
        <div className="education-intro">
          <span className="education-eyebrow">
            LEARNING. BUILDING. GROWING.
          </span>

          <h2 className="education-heading">
            Every step
            <br />
            <span>moves me forward.</span>
          </h2>

          <p className="education-description">
            A record of my educational journey, professional
            development, and the milestones shaping my growth
            in technology.
          </p>
        </div>

        {/* Achievement Summary */}
        <div className="education-summary">
          <div className="education-summary-item">
            <span className="education-summary-number">03</span>
            <span className="education-summary-label">
              COMPLETED
            </span>
          </div>

          <div className="education-summary-divider"></div>

          <div className="education-summary-item">
            <span className="education-summary-number education-summary-number--ongoing">
              01
            </span>
            <span className="education-summary-label">
              IN PROGRESS
            </span>
          </div>

          <div className="education-summary-divider"></div>

          <div className="education-summary-item">
            <span className="education-summary-number">04</span>
            <span className="education-summary-label">
              MILESTONES
            </span>
          </div>
        </div>

        {/* Achievement Timeline */}
        <div className="education-timeline">
          {achievements.map((achievement) => (
            <article
              className={`education-card education-card--${achievement.type}`}
              key={achievement.id}
            >
              <div className="education-card-marker">
                <span></span>
              </div>

              <div className="education-card-content">
                <div className="education-card-top">
                  <span className="education-card-category">
                    {achievement.category}
                  </span>

                  <span className="education-card-year">
                    {achievement.year}
                  </span>
                </div>

                <div className="education-card-main">
                  <div className="education-card-heading">
                    <span className="education-card-number">
                      {achievement.id}
                    </span>

                    <h3>{achievement.title}</h3>
                  </div>

                  <p className="education-card-description">
                    {achievement.description}
                  </p>
                </div>

                <div className="education-card-footer">
                  <span className="education-status">
                    <span className="education-status-dot"></span>
                    {achievement.status}
                  </span>

                  <span className="education-card-type">
                    {achievement.type === 'ongoing'
                      ? 'CURRENT PURSUIT'
                      : 'ACHIEVED'}
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Closing Statement */}
        <div className="education-bottomline">
          <span>
            THE JOURNEY DOESN'T END HERE.
          </span>

          <span className="education-bottomline-accent">
            MORE MILESTONES AHEAD
            <span aria-hidden="true"> ↗</span>
          </span>
        </div>

      </div>
    </section>
  );
}

export default Education;