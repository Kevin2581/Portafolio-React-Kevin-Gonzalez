import React from 'react'
import eCommers from '../assets/e-commers.png'
import redSocial from '../assets/red-social.png'
import cheatSheet from '../assets/cheat-sheet.png'
import escapaDictador from '../assets/escapa-dictador.png'
import formularioCrud from '../assets/formulario-crud.png'
import ticTacToe from '../assets/tic-tac-toe.png'

export default function ProjectsTimeline({
  projectLinks,
  selectedProject,
  toggleSelectProject,
  handleProjectKey,
  addRevealRef,
  sectionRef,
}) {
  return (
    <section className="section proyectos" id="proyectos" ref={sectionRef}>
      <div className="section-header reveal reveal-up" ref={addRevealRef}>
        <h2>Proyectos</h2>
      </div>

      <div className="timeline">
        {/* Project 1 */}
        <div className="timeline-item reveal reveal-up" ref={addRevealRef}>
          <div className="timeline-side timeline-side--left">
            <div
              role="button"
              tabIndex={0}
              onClick={() => toggleSelectProject(1)}
              onKeyDown={(e) => handleProjectKey(e, 1)}
              className={`project-image project-image--clickable ${
                selectedProject === 1 ? 'project-selected project-selected--1' : ''
              }`}
            >
              <img src={eCommers} alt="E-Commers" />
            </div>
          </div>

          <div className="timeline-center">
            <div className="timeline-dot"></div>
          </div>

          <div className="timeline-side timeline-side--right">
            <div className="timeline-text">
              <p className="timeline-date">Proyecto 1</p>
              <h3 className="timeline-title">E-Commers</h3>
              <p className="timeline-description">
                Tienda en línea sencilla con catálogo de productos y estructura básica de e-commerce.
              </p>
              <div className="tech-tags">
                <span className="tech-tag">HTML</span>
                <span className="tech-tag">CSS</span>
              </div>
              <div className="project-links">
                <a href={projectLinks[1].page} target="_blank" rel="noopener noreferrer" className="project-link-btn">
                  <i className="fa-solid fa-globe project-link-icon" aria-hidden="true"></i>
                  <span>Ver página</span>
                </a>
                <a href={projectLinks[1].repo} target="_blank" rel="noopener noreferrer" className="project-link-btn project-link-btn--secondary">
                  <i className="fa-brands fa-github project-link-icon" aria-hidden="true"></i>
                  <span>Repositorio</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Project 2 */}
        <div className="timeline-item reveal reveal-up" ref={addRevealRef}>
          <div className="timeline-side timeline-side--left">
            <div className="timeline-text">
              <p className="timeline-date">Proyecto 2</p>
              <h3 className="timeline-title">Red Social</h3>
              <p className="timeline-description">Interfaz de red social con publicaciones y diseño moderno.</p>
              <div className="tech-tags">
                <span className="tech-tag">HTML</span>
                <span className="tech-tag">CSS</span>
              </div>
              <div className="project-links">
                <a href={projectLinks[2].page} target="_blank" rel="noopener noreferrer" className="project-link-btn">
                  <i className="fa-solid fa-globe project-link-icon" aria-hidden="true"></i>
                  <span>Ver página</span>
                </a>
                <a href={projectLinks[2].repo} target="_blank" rel="noopener noreferrer" className="project-link-btn project-link-btn--secondary">
                  <i className="fa-brands fa-github project-link-icon" aria-hidden="true"></i>
                  <span>Repositorio</span>
                </a>
              </div>
            </div>
          </div>

          <div className="timeline-center">
            <div className="timeline-dot"></div>
          </div>

          <div className="timeline-side timeline-side--right">
            <div
              role="button"
              tabIndex={0}
              onClick={() => toggleSelectProject(2)}
              onKeyDown={(e) => handleProjectKey(e, 2)}
              className={`project-image project-image--clickable ${
                selectedProject === 2 ? 'project-selected project-selected--2' : ''
              }`}
            >
              <img src={redSocial} alt="Red Social" />
            </div>
          </div>
        </div>

        {/* Project 3 */}
        <div className="timeline-item reveal reveal-up" ref={addRevealRef}>
          <div className="timeline-side timeline-side--left">
            <div
              role="button"
              tabIndex={0}
              onClick={() => toggleSelectProject(3)}
              onKeyDown={(e) => handleProjectKey(e, 3)}
              className={`project-image project-image--clickable ${
                selectedProject === 3 ? 'project-selected project-selected--3' : ''
              }`}
            >
              <img src={cheatSheet} alt="Cheat Sheet" />
            </div>
          </div>

          <div className="timeline-center">
            <div className="timeline-dot"></div>
          </div>

          <div className="timeline-side timeline-side--right">
            <div className="timeline-text">
              <p className="timeline-date">Proyecto 3</p>
              <h3 className="timeline-title">Cheat Sheet</h3>
              <p className="timeline-description">Hoja de trucos para repasar conceptos importantes de desarrollo web.</p>
              <div className="tech-tags">
                <span className="tech-tag">HTML</span>
                <span className="tech-tag">CSS</span>
              </div>
              <div className="project-links">
                <a href={projectLinks[3].page} target="_blank" rel="noopener noreferrer" className="project-link-btn">
                  <i className="fa-solid fa-globe project-link-icon" aria-hidden="true"></i>
                  <span>Ver página</span>
                </a>
                <a href={projectLinks[3].repo} target="_blank" rel="noopener noreferrer" className="project-link-btn project-link-btn--secondary">
                  <i className="fa-brands fa-github project-link-icon" aria-hidden="true"></i>
                  <span>Repositorio</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Project 4 */}
        <div className="timeline-item reveal reveal-up" ref={addRevealRef}>
          <div className="timeline-side timeline-side--left">
            <div className="timeline-text">
              <p className="timeline-date">Proyecto 4</p>
              <h3 className="timeline-title">Escapa del Dictador</h3>
              <p className="timeline-description">Juego interactivo con una temática de escape y decisiones.</p>
              <div className="tech-tags">
                <span className="tech-tag">HTML</span>
                <span className="tech-tag">CSS</span>
                <span className="tech-tag">JavaScript</span>
              </div>
              <div className="project-links">
                <a href={projectLinks[4].page} target="_blank" rel="noopener noreferrer" className="project-link-btn">
                  <i className="fa-solid fa-globe project-link-icon" aria-hidden="true"></i>
                  <span>Ver página</span>
                </a>
                <a href={projectLinks[4].repo} target="_blank" rel="noopener noreferrer" className="project-link-btn project-link-btn--secondary">
                  <i className="fa-brands fa-github project-link-icon" aria-hidden="true"></i>
                  <span>Repositorio</span>
                </a>
              </div>
            </div>
          </div>

          <div className="timeline-center">
            <div className="timeline-dot"></div>
          </div>

          <div className="timeline-side timeline-side--right">
            <div
              role="button"
              tabIndex={0}
              onClick={() => toggleSelectProject(4)}
              onKeyDown={(e) => handleProjectKey(e, 4)}
              className={`project-image project-image--clickable ${
                selectedProject === 4 ? 'project-selected project-selected--4' : ''
              }`}
            >
              <img src={escapaDictador} alt="Escapa del Dictador" />
            </div>
          </div>
        </div>

        {/* Project 5 */}
        <div className="timeline-item reveal reveal-up" ref={addRevealRef}>
          <div className="timeline-side timeline-side--left">
            <div
              role="button"
              tabIndex={0}
              onClick={() => toggleSelectProject(5)}
              onKeyDown={(e) => handleProjectKey(e, 5)}
              className={`project-image project-image--clickable ${
                selectedProject === 5 ? 'project-selected project-selected--5' : ''
              }`}
            >
              <img src={formularioCrud} alt="Formulario CRUD" />
            </div>
          </div>

          <div className="timeline-center">
            <div className="timeline-dot"></div>
          </div>

          <div className="timeline-side timeline-side--right">
            <div className="timeline-text">
              <p className="timeline-date">Proyecto 5</p>
              <h3 className="timeline-title">Formulario CRUD</h3>
              <p className="timeline-description">Formulario para crear, leer, actualizar y eliminar registros.</p>
              <div className="tech-tags">
                <span className="tech-tag">JavaScript</span>
                <span className="tech-tag">HTML</span>
                <span className="tech-tag">CSS</span>
              </div>
              <div className="project-links">
                <a href={projectLinks[5].page} target="_blank" rel="noopener noreferrer" className="project-link-btn">
                  <i className="fa-solid fa-globe project-link-icon" aria-hidden="true"></i>
                  <span>Ver página</span>
                </a>
                <a href={projectLinks[5].repo} target="_blank" rel="noopener noreferrer" className="project-link-btn project-link-btn--secondary">
                  <i className="fa-brands fa-github project-link-icon" aria-hidden="true"></i>
                  <span>Repositorio</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Project 6 */}
        <div className="timeline-item reveal reveal-up" ref={addRevealRef}>
          <div className="timeline-side timeline-side--left">
            <div className="timeline-text">
              <p className="timeline-date">Proyecto 6</p>
              <h3 className="timeline-title">Tic-Tac-Toe React</h3>
              <p className="timeline-description">Juego de tres en raya desarrollado con React y componentes reutilizables.</p>
              <div className="tech-tags">
                <span className="tech-tag">React</span>
                <span className="tech-tag">Vite</span>
                <span className="tech-tag">JavaScript</span>
                <span className="tech-tag">CSS</span>
                <span className="tech-tag">HTML</span>
              </div>
              <div className="project-links">
                <a href={projectLinks[6].page} target="_blank" rel="noopener noreferrer" className="project-link-btn">
                  <i className="fa-solid fa-globe project-link-icon" aria-hidden="true"></i>
                  <span>Ver página</span>
                </a>
                <a href={projectLinks[6].repo} target="_blank" rel="noopener noreferrer" className="project-link-btn project-link-btn--secondary">
                  <i className="fa-brands fa-github project-link-icon" aria-hidden="true"></i>
                  <span>Repositorio</span>
                </a>
              </div>
            </div>
          </div>

          <div className="timeline-center">
            <div className="timeline-dot"></div>
          </div>

          <div className="timeline-side timeline-side--right">
            <div
              role="button"
              tabIndex={0}
              onClick={() => toggleSelectProject(6)}
              onKeyDown={(e) => handleProjectKey(e, 6)}
              className={`project-image project-image--clickable ${
                selectedProject === 6 ? 'project-selected project-selected--6' : ''
              }`}
            >
              <img src={ticTacToe} alt="Tic-Tac-Toe React" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
