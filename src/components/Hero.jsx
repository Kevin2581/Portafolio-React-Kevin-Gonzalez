import React, { forwardRef } from 'react'
import kevinPhoto from '../assets/kevin-diseno.png'

const Hero = forwardRef(function Hero(
  { isHeroBroken, addRevealRef, onAvatarClick },
  ref
) {
  return (
    <header
      className="hero reveal reveal-up"
      id="inicio"
      ref={(el) => {
        if (ref) ref.current = el
        if (el && addRevealRef) addRevealRef(el)
      }}
    >
      <div className="hero-grid">
        <div className="hero-copy">
          <p className="hero-kicker">Portafolio 2025 — Desarrollador Web</p>
          <h1 className="hero-name hero-name-cyber" data-text="Kevin González">
            Kevin <span>González</span>
          </h1>
          <p className="hero-role">Front-end en formación · UX curioso</p>
          <p className="hero-summary">
            Construyo interfaces limpias, accesibles y modernas mientras sigo
            aprendiendo nuevas tecnologías. Me gusta experimentar, iterar y
            cuidar los detalles. Agradezco a mis profesores guía; gracias a
            ellos he podido aprender cosas nuevas.
          </p>
        </div>

        <div className="hero-visual">
          <div className="hero-tagline">Front-end · UI · Back-end</div>
          <div className="hero-photo-wrapper">
            <div className="hero-photo-card">
              <div
                className={`hero-photo-layer ${
                  isHeroBroken ? 'hero-photo-layer--broken' : ''
                }`}
              >
                <img
                  src={kevinPhoto}
                  alt="Retrato de Kevin González"
                  className="hero-photo"
                />
                <div
                  className="hero-photo-particles hero-photo-particles-1"
                  style={{ backgroundImage: `url(${kevinPhoto})` }}
                />
                <div
                  className="hero-photo-particles hero-photo-particles-2"
                  style={{ backgroundImage: `url(${kevinPhoto})` }}
                />
                <div
                  className="hero-photo-particles hero-photo-particles-3"
                  style={{ backgroundImage: `url(${kevinPhoto})` }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
})

export default Hero
