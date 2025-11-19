import React from 'react'

export default function Nav({ activeSection, onNavClick, onAvatarClick, kevinPhoto }) {
  return (
    <nav className="top-nav" aria-label="Navegación principal">
      <div className="top-nav-inner">
        <div className="top-nav-left">
          <div
            className="top-nav-avatar"
            onClick={onAvatarClick}
            title="Acerca de mí"
            role="button"
            tabIndex={0}
          >
            <img src={kevinPhoto} alt="Avatar Kevin González" />
          </div>
          <span className="top-nav-name">Kevin González</span>
        </div>

        <div className="top-nav-links">
          <a
            href="#inicio"
            className={`top-nav-link ${
              activeSection === 'inicio' ? 'top-nav-link--active' : ''
            }`}
            onClick={() => onNavClick('inicio')}
          >
            Inicio
          </a>
          <a
            href="#guias"
            className={`top-nav-link ${
              activeSection === 'guias' ? 'top-nav-link--active' : ''
            }`}
            onClick={() => onNavClick('guias')}
          >
            Guías
          </a>
          <a
            href="#proyectos"
            className={`top-nav-link ${
              activeSection === 'proyectos' ? 'top-nav-link--active' : ''
            }`}
            onClick={() => onNavClick('proyectos')}
          >
            Proyectos
          </a>
        </div>
      </div>
    </nav>
  )
}
