import { useState } from 'react'
import '../styles/Work.css'

const projects = [
{
id: 1,
name: 'NEXUS',
category: 'Product UI',
type: 'SAAS DASHBOARD',
number: '01',
description:
'A considered analytics workspace designed to turn complex business data into clear, useful insights.',
stack: ['React', 'JavaScript', 'CSS'],
status: 'Concept study',
overview:
'The proposed experience focuses on information hierarchy, readable data, responsive layouts, and a dashboard that feels effortless to navigate.',
},
{
id: 2,
name: 'VELORA',
category: 'E-commerce',
type: 'DIGITAL COMMERCE',
number: '02',
description:
'A refined online shopping experience built around product discovery, editorial photography, and frictionless navigation.',
stack: ['React', 'JavaScript', 'CSS'],
status: 'Concept study',
overview:
'The proposed storefront combines a minimal product catalogue, considered typography, clear product information, and a shopping experience designed for desktop and mobile.',
},
{
id: 3,
name: 'MONOGRAPH',
category: 'Web Design',
type: 'EDITORIAL PLATFORM',
number: '03',
description:
'A contemporary editorial platform that gives thoughtful writing, photography, and independent ideas room to breathe.',
stack: ['React', 'JavaScript', 'CSS'],
status: 'Concept study',
overview:
'The proposed platform explores a strong editorial grid, readable long-form content, category navigation, and a distraction-free reading experience.',
},
{
id: 4,
name: 'ATELIER',
category: 'Web Design',
type: 'STUDIO PORTFOLIO',
number: '04',
description:
'A visual portfolio for an independent architecture studio, pairing considered typography with a calm, image-led presentation.',
stack: ['React', 'JavaScript', 'CSS'],
status: 'Concept study',
overview:
'The proposed portfolio gives each project room to stand out through an editorial grid, concise project context, and a warm, restrained visual language.',
},
]

const categories = ['All projects', 'Product UI', 'E-commerce', 'Web Design']

function NexusPreview() {
return ( <div className="work-preview nexus-preview"> <div className="preview-topbar"> <span className="preview-brand">
nexus<span>.</span> </span> <span className="preview-avatar">KD</span> </div>


  <div className="nexus-content">
    <div className="preview-sidebar">
      <span className="sidebar-item selected">Overview</span>
      <span className="sidebar-item">Analytics</span>
      <span className="sidebar-item">Reports</span>
    </div>

    <div className="nexus-dashboard">
      <span className="preview-caption">OVERVIEW</span>
      <div className="preview-heading-row">
        <strong>Good morning.</strong>
        <span className="preview-period">Last 30 days</span>
      </div>

      <div className="nexus-stats">
        <div className="nexus-stat">
          <span>Total revenue</span>
          <strong>$24.8k</strong>
          <small>+12.8%</small>
        </div>
        <div className="nexus-stat">
          <span>Active users</span>
          <strong>8,420</strong>
          <small>+8.2%</small>
        </div>
      </div>

      <div className="nexus-chart">
        <div className="chart-heading">
          <span>Performance</span>
          <span>Monthly</span>
        </div>

        <div className="chart-bars">
          {[36, 53, 43, 68, 51, 76, 61, 88, 65, 94, 72, 83].map(
            (height, index) => (
              <span
                key={index}
                className={index === 9 ? 'chart-bar highlighted' : 'chart-bar'}
                style={{ height: `${height}%` }}
              />
            ),
          )}
        </div>
      </div>
    </div>
  </div>
</div>


)
}

function VeloraPreview() {
return ( <div className="work-preview velora-preview"> <div className="velora-topbar"> <span className="velora-logo">VELORA</span> <span className="velora-nav">COLLECTIONS    ABOUT</span> <span className="velora-bag">BAG (0)</span> </div>


  <div className="velora-content">
    <div className="velora-copy">
      <span className="preview-caption">THE EVERYDAY EDIT</span>
      <strong>
        Less,
        <br />
        but better.
      </strong>
      <span className="velora-subtitle">
        Thoughtful objects.
        <br />
        Timeless essentials.
      </span>
      <span className="velora-shop">EXPLORE COLLECTION ↗</span>
    </div>

    <div className="velora-product">
      <div className="product-image product-image-one">
        <div className="product-object"></div>
      </div>
      <div className="product-information">
        <span>EVERYDAY TOTE</span>
        <span>$48</span>
      </div>
    </div>

    <div className="velora-product secondary-product">
      <div className="product-image product-image-two">
        <div className="product-object product-object-two"></div>
      </div>
      <div className="product-information">
        <span>STUDIO OBJECT</span>
        <span>$36</span>
      </div>
    </div>
  </div>
</div>


)
}

function MonographPreview() {
return ( <div className="work-preview monograph-preview"> <div className="mono-topbar"> <span className="mono-logo">MONOGRAPH.</span> <span className="mono-nav">JOURNAL    CULTURE    NOTES</span> <span className="mono-menu">MENU +</span> </div>


  <div className="mono-content">
    <div className="mono-intro">
      <span className="preview-caption">ISSUE NO. 08 — THE CREATIVE LIFE</span>
      <strong>
        Ideas worth
        <br />
        sitting with.
      </strong>
      <span className="mono-description">
        Notes on design, culture, and the things that move us.
      </span>
    </div>

    <div className="mono-feature">
      <div className="mono-feature-image">
        <div className="mono-photo-block"></div>
      </div>

      <div className="mono-feature-info">
        <span>FEATURED STORY &nbsp; / &nbsp; 08 MIN READ</span>
        <strong>The beauty of doing things differently.</strong>
        <span className="mono-read">READ THE STORY ↗</span>
      </div>
    </div>
  </div>
</div>


)
}

function AtelierPreview() {
return (
  <div className="work-preview atelier-preview">
    <div className="atelier-topbar">
      <span className="atelier-logo">ATELIER <span>FORM</span></span>
      <span className="atelier-nav">PROJECTS&nbsp;&nbsp;&nbsp; STUDIO</span>
      <span className="atelier-menu">MENU +</span>
    </div>

    <div className="atelier-content">
      <div className="atelier-copy">
        <span className="preview-caption">INDEPENDENT ARCHITECTURE STUDIO</span>
        <strong>
          Spaces
          <br />
          for living.
        </strong>
        <span className="atelier-description">
          Thoughtful places, shaped around the everyday.
        </span>
        <span className="atelier-link">EXPLORE SELECTED WORK ↗</span>
      </div>

      <div className="atelier-project">
        <div className="atelier-image">
          <div className="atelier-building">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        <div className="atelier-project-info">
          <span>01 / RESIDENCE IN THE PINES</span>
          <span>2024 &nbsp;—&nbsp; COASTAL HOME</span>
        </div>
      </div>
    </div>
  </div>
)
}

const previews = {
1: NexusPreview,
2: VeloraPreview,
3: MonographPreview,
4: AtelierPreview,
}

function Work() {
const [activeCategory, setActiveCategory] = useState('All projects')
const [expandedProject, setExpandedProject] = useState(null)

const filteredProjects =
activeCategory === 'All projects'
? projects
: projects.filter((project) => project.category === activeCategory)

function toggleProject(id) {
setExpandedProject((current) => (current === id ? null : id))
}

return ( <section className="work-section" id="work"> <div className="work-container"> <div className="work-topline"> <span className="work-section-label"> <span className="work-status-dot"></span>
SELECTED WORK </span>


      <span className="work-section-number">04 / PORTFOLIO</span>
    </div>

    <div className="work-intro">
      <div>
        <p className="work-eyebrow">DESIGN THINKING. FRONT-END CRAFT.</p>

        <h2>
          Work that starts
          <br />
          with <span>intention.</span>
        </h2>
      </div>

      <p className="work-intro-description">
        A collection of product and web concepts exploring useful
        interfaces, thoughtful design, and better digital experiences.
      </p>
    </div>

    <div className="work-toolbar">
      <div className="work-filters" aria-label="Filter projects">
        {categories.map((category) => (
          <button
            key={category}
            type="button"
            className={
              activeCategory === category
                ? 'work-filter active'
                : 'work-filter'
            }
            aria-pressed={activeCategory === category}
            onClick={() => {
              setActiveCategory(category)
              setExpandedProject(null)
            }}
          >
            {category}
          </button>
        ))}
      </div>

      <span className="work-project-count">
        {String(filteredProjects.length).padStart(2, '0')} PROJECTS
      </span>
    </div>

    <div className="work-grid">
      {filteredProjects.map((project) => {
        const Preview = previews[project.id]
        const isExpanded = expandedProject === project.id

        return (
          <article
            className={`work-card${isExpanded ? ' expanded' : ''}`}
            key={project.id}
          >
            <div className="work-card-preview">
              <Preview />

              <span className="work-concept-label">
                CONCEPT STUDY
              </span>
            </div>

            <div className="work-card-content">
              <div className="work-card-meta">
                <span>{project.type}</span>
                <span>{project.number} / {String(projects.length).padStart(2, '0')}</span>
              </div>

              <div className="work-card-heading">
                <h3>{project.name}</h3>

                <button
                  type="button"
                  className="work-expand-button"
                  onClick={() => toggleProject(project.id)}
                  aria-expanded={isExpanded}
                  aria-label={
                    isExpanded
                      ? `Hide details for ${project.name}`
                      : `View details for ${project.name}`
                  }
                >
                  <span>{isExpanded ? '−' : '+'}</span>
                </button>
              </div>

              <p className="work-card-description">
                {project.description}
              </p>

              <div className="work-card-footer">
                <div className="work-tags">
                  {project.stack.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>

                <button
                  type="button"
                  className="work-details-link"
                  onClick={() => toggleProject(project.id)}
                  aria-expanded={isExpanded}
                >
                  {isExpanded ? 'Close details' : 'About concept'}
                  <span>{isExpanded ? '−' : '↗'}</span>
                </button>
              </div>

              <div
                className={`work-expanded-details${isExpanded ? ' visible' : ''}`}
                aria-hidden={!isExpanded}
              >
                <div className="work-expanded-inner">
                  <span className="work-detail-label">
                    THE DIRECTION
                  </span>

                  <p>{project.overview}</p>

                  <div className="work-project-status">
                    <span className="work-status-indicator"></span>
                    {project.status} · Planned for development
                  </div>
                </div>
              </div>
            </div>
          </article>
        )
      })}
    </div>

    <div className="work-bottomline">
      <span>THOUGHTFUL BY DESIGN. BUILT WITH PURPOSE.</span>
      <a href="#contact">
        HAVE A PROJECT IN MIND? <span>↗</span>
      </a>
    </div>
  </div>
</section>


)
}

export default Work
