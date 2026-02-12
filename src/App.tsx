import { useEffect, useState } from 'react'
import { FiMoon, FiPhone, FiSun } from 'react-icons/fi'
import './App.css'
import { companies, contact, experienceSummary, projectLinks, technologies } from './content'
import { SiLinkedin } from 'react-icons/si'

function App() {
  type Theme = 'light' | 'dark'
  type SectionId = 'projects' | 'experience' | 'companies' | 'technologies' | 'contact'
  const storageKey = 'theme'

  const [theme, setTheme] = useState<Theme>(() =>
    document.documentElement.dataset.theme === 'dark' ? 'dark' : 'light',
  )

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    try {
      localStorage.setItem(storageKey, theme)
    } catch {
      // ignore
    }
  }, [theme])

  const toggleTheme = () => {
    setTheme((current) => (current === 'dark' ? 'light' : 'dark'))
  }

  const sections: Array<{ id: SectionId; label: string }> = [
    { id: 'projects', label: 'Projects' },
    { id: 'experience', label: 'Experience' },
    { id: 'companies', label: 'Companies' },
    { id: 'technologies', label: 'Technologies' },
    { id: 'contact', label: 'Contact' },
  ]

  const [activeSection, setActiveSection] = useState<SectionId>('projects')

  return (
    <div className="page">
      <header className="header">
        <div>
          <h1 className="title">Ing. Luis Antonio Villa</h1>
          <p className="subtitle">Software Engineer · React | Typescript | Node | IA developing | JavaScript | Nextjs | Web | AWS | FullStack</p>
        </div>

        <button
          type="button"
          className="themeToggle"
          onClick={toggleTheme}
          aria-label={theme === 'dark' ? 'Cambiar a modo día' : 'Cambiar a modo noche'}
          title={theme === 'dark' ? 'Cambiar a modo día' : 'Cambiar a modo noche'}
        >
          {theme === 'dark' ? (
            <FiMoon className="themeIcon" aria-hidden="true" focusable={false} />
          ) : (
            <FiSun className="themeIcon" aria-hidden="true" focusable={false} />
          )}
        </button>
      </header>

      <div className="layout">
        <aside className="sidebar" aria-label="Sections">
          <nav className="nav">
            {sections.map((section) => (
              <button
                key={section.id}
                type="button"
                className={activeSection === section.id ? 'navItem navItemActive' : 'navItem'}
                onClick={() => setActiveSection(section.id)}
                aria-current={activeSection === section.id ? 'page' : undefined}
              >
                {section.label}
              </button>
            ))}
          </nav>
        </aside>

        <main className="main" aria-live="polite">
          <div key={activeSection} className="content">
            {activeSection === 'projects' ? (
              <section className="section" aria-labelledby="projects">
                <h2 className="sectionTitle" id="projects">
                  Projects
                </h2>
                <ul className="linkList">
                  {projectLinks.map((link) => (
                    <li key={link.href}>
                      <a className="link" href={link.href} target="_blank" rel="noreferrer">
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </section>
            ) : null}

            {activeSection === 'experience' ? (
              <section className="section sectionPanel" aria-labelledby="experience">
                <h2 className="sectionTitle" id="experience">
                  Experience
                </h2>
                <p className="paragraph">{experienceSummary}</p>
              </section>
            ) : null}

            {activeSection === 'companies' ? (
              <section className="section" aria-labelledby="companies">
                <h2 className="sectionTitle" id="companies">
                  Companies
                </h2>
                <div className="companyList">
                  {companies.map((company) => {
                    const initials = company.name
                      .split(' ')
                      .filter(Boolean)
                      .slice(0, 2)
                      .map((part) => part[0]?.toUpperCase())
                      .join('')

                    return (
                      <article key={`${company.name}-${company.start}-${company.end}`} className="companyCard">
                        <div className="companyHeader">
                          <div className="companyLogo" aria-hidden="true">
                            <span className="companyLogoText">{initials}</span>
                            {company.logoUrl ? (
                              <img
                                className="companyLogoImg"
                                src={company.logoUrl}
                                alt=""
                                loading="lazy"
                                onError={(e) => {
                                  e.currentTarget.style.display = 'none'
                                }}
                              />
                            ) : null}
                          </div>
                          <div>
                            {company.role ? <div className="companyRole">{company.role}</div> : null}
                            <div className="companyName">{company.name}</div>
                            {company.location ? <div className="companyLocation">{company.location}</div> : null}
                            <div className="companyDates">
                              {company.start} – {company.end}
                            </div>
                          </div>
                        </div>

                        <ul className="companyBullets">
                          {company.descriptions.map((text) => (
                            <li key={text}>{text}</li>
                          ))}
                        </ul>
                      </article>
                    )
                  })}
                </div>
              </section>
            ) : null}

            {activeSection === 'technologies' ? (
              <section className="section" aria-labelledby="technologies">
                <h2 className="sectionTitle" id="technologies">
                  Technologies
                </h2>
                <div className="techGrid">
                  {technologies.map(({ name, Icon, color }) => (
                    <div key={name} className="techCard">
                      <Icon
                        className="techIcon"
                        aria-hidden="true"
                        focusable={false}
                        style={color ? { color } : undefined}
                      />
                      <span className="techName">{name}</span>
                    </div>
                  ))}
                </div>
              </section>
            ) : null}

            {activeSection === 'contact' ? (
              <section className="section sectionPanel" aria-labelledby="contact">
                <h2 className="sectionTitle" id="contact">
                  Contact
                </h2>

                <div className="contactRow">
                  <a className="contactLink" href={contact.linkedInUrl} target="_blank" rel="noreferrer">
                    <SiLinkedin className="contactIcon" aria-hidden="true" focusable={false} />
                    <span>LinkedIn</span>
                  </a>

                  <a className="contactLink" href={`tel:${contact.phoneTel}`}>
                    <FiPhone className="contactIcon" aria-hidden="true" focusable={false} />
                    <span className="contactPhone">{contact.phoneDisplay}</span>
                  </a>

                  <div className="contactPill" aria-label={contact.countryLabel}>
                    <img className="contactFlag" src={contact.countryFlagSrc} alt={contact.countryFlagAlt} loading="lazy" />
                    <span>{contact.countryLabel}</span>
                  </div>
                </div>
              </section>
            ) : null}
          </div>
        </main>
      </div>

      <footer className="footer">
        <small>© {new Date().getFullYear()} Luis Antonio Villa - Computer Engineer</small>
      </footer>
    </div>
  )
}

export default App
