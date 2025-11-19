import React from 'react'

export default function Contact({ addRevealRef }) {
  return (
    <section className="section contacto" id="contacto">
      <div className="section-header reveal reveal-up" ref={addRevealRef}>
        <h2>Contacto</h2>
      </div>

      <div className="contact-card reveal reveal-up" ref={addRevealRef}>
        <div className="contact-main">
          <p className="contact-name">
            Kevin del Jesús González Maas
            <span className="contact-flag" aria-label="México">
              🇲🇽
            </span>
          </p>
          <p className="contact-phone">
            <i className="fa-solid fa-mobile-screen-button contact-icon" aria-hidden="true"></i>
            <a href="tel:+5219813991081">981-399-1081</a>
          </p>
          <p className="contact-email">
            <i className="fa-solid fa-envelope contact-icon" aria-hidden="true"></i>
            <a href="mailto:kevingon697@gmail.com">kevingon697@gmail.com</a>
          </p>
        </div>

        <div className="contact-links">
          <a href="https://github.com/Kevin2581" target="_blank" rel="noopener noreferrer" className="contact-pill">
            <i className="fa-brands fa-github contact-pill-icon" aria-hidden="true"></i>
            <span>GitHub</span>
          </a>
          <a href="mailto:kevingon697@gmail.com" className="contact-pill">
            <i className="fa-solid fa-paper-plane contact-pill-icon" aria-hidden="true"></i>
            <span>Enviar correo</span>
          </a>
        </div>
      </div>
    </section>
  )
}
