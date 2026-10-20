import { useEffect, useState } from 'react'
import '../styles/Header.css'

function Header() {
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const sections = document.querySelectorAll(
      '#home, #about, #expertise, #work, #contact'
    )

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSections = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (a, b) =>
              b.intersectionRatio - a.intersectionRatio
          )

        if (visibleSections.length > 0) {
          setActiveSection(visibleSections[0].target.id)
        }
      },
      {
        rootMargin: '-20% 0px -60% 0px',
        threshold: [0, 0.1, 0.25, 0.5, 0.75, 1],
      }
    )

    sections.forEach((section) => observer.observe(section))

    return () => observer.disconnect()
  }, [])

  return (
    <header className="site-header">
      <div className="header-container">
        <a href="#home" className="brand">
          kalu<span>.dev</span>
        </a>

        <nav className="desktop-nav" aria-label="Main navigation">
          <a
            href="#home"
            className={`nav-link ${activeSection === 'home' ? 'active' : ''}`}
            aria-current={activeSection === 'home' ? 'location' : undefined}
          >
            Home
          </a>

          <a
            href="#about"
            className={`nav-link ${activeSection === 'about' ? 'active' : ''}`}
            aria-current={activeSection === 'about' ? 'location' : undefined}
          >
            About
          </a>

          <a
            href="#expertise"
            className={`nav-link ${activeSection === 'expertise' ? 'active' : ''}`}
            aria-current={activeSection === 'expertise' ? 'location' : undefined}
          >
            Expertise
          </a>

          <a
            href="#work"
            className={`nav-link ${activeSection === 'work' ? 'active' : ''}`}
            aria-current={activeSection === 'work' ? 'location' : undefined}
          >
            Work
          </a>
        </nav>

        <a href="https://wa.me/2348156116975" className="header-contact">
          Let's talk <span>↗</span>
        </a>
      </div>
    </header>
  )
}

export default Header