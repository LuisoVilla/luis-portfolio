import { useEffect, useState } from 'react'
import { FiMoon, FiSun } from 'react-icons/fi'
import './App.css'
import { contact, experienceSummary, projectLinks, technologies } from './content'
import { SiLinkedin } from 'react-icons/si'

function App() {
  type Theme = 'light' | 'dark'
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

  return (
    <div className="page">
      <header className="header">
        <div>
          <h1 className="title">Luis Antonio Villa</h1>
          <p className="subtitle">Senior Frontend Engineer · React + TypeScript</p>
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

      <main className="main">
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

        <section className="section sectionPanel" aria-labelledby="experience">
          <h2 className="sectionTitle" id="experience">
            Experience
          </h2>
          <p className="paragraph">{experienceSummary}</p>
        </section>

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
              <span className="contactPhone">{contact.phoneDisplay}</span>
            </a>
          </div>
        </section>
      </main>

      <footer className="footer">
        <small>© {new Date().getFullYear()} Luis Antonio Villa - Computer Engineer</small>
      </footer>
    </div>
  )
}

export default App
