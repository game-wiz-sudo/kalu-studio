import '../styles/Expertise.css'

const technologies = [
{
number: '01',
name: 'HTML5',
category: 'STRUCTURE',
description: 'Building accessible, well-structured web pages.',
},
{
number: '02',
name: 'CSS3',
category: 'STYLING',
description: 'Creating responsive layouts and refined interfaces.',
},
{
number: '03',
name: 'JavaScript',
category: 'INTERACTIVITY',
description: 'Bringing interfaces to life with dynamic behaviour.',
},
{
number: '04',
name: 'React',
category: 'FRAMEWORK',
description: 'Building reusable components and interactive UIs.',
},
{
number: '05',
name: 'Git & GitHub',
category: 'VERSION CONTROL',
description: 'Managing code and tracking development progress.',
},
{
number: '06',
name: 'Responsive Design',
category: 'USER EXPERIENCE',
description: 'Adapting digital experiences across screen sizes.',
},
]

function Expertise() {
return ( <section className="expertise-section" id="expertise"> <div className="expertise-container">


    <div className="expertise-top">
      <div>
        <span className="section-label">
          <span className="section-dot"></span>
          MY EXPERTISE
        </span>

        <h2 className="expertise-title">
          The tools behind
          <br />
          <span>the experience.</span>
        </h2>
      </div>

      <p className="expertise-intro">
        The technologies and practices I'm working with
        to build thoughtful, functional, and responsive
        web experiences.
      </p>
    </div>

    <div className="expertise-feature">
      <div className="feature-icon" aria-hidden="true">
        <span>&lt;/&gt;</span>
      </div>

      <div className="feature-copy">
        <span className="feature-label">CORE FOCUS</span>
        <h3>Front-end development</h3>
        <p>
          Turning ideas into interfaces through structure,
          visual design, interaction, and attention to detail.
        </p>
      </div>

      <div className="feature-mark" aria-hidden="true">
        K<span>.</span>
      </div>
    </div>

    <div className="technology-heading">
      <span>TECHNOLOGIES & SKILLS</span>
      <span>06 AREAS</span>
    </div>

    <div className="technology-grid">
      {technologies.map((technology) => (
        <article className="technology-card" key={technology.number}>
          <div className="technology-card-top">
            <span className="technology-number">
              {technology.number}
            </span>
            <span className="technology-arrow" aria-hidden="true">
              ↗
            </span>
          </div>

          <span className="technology-category">
            {technology.category}
          </span>

          <h3>{technology.name}</h3>

          <p>{technology.description}</p>
        </article>
      ))}
    </div>

    <div className="expertise-note">
      <span className="expertise-note-dot"></span>
      <p>
        Always learning. Always improving. Focused on building
        better experiences with every line of code.
      </p>
    </div>

  </div>
</section>


)
}

export default Expertise
