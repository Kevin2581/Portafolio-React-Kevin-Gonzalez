import React from 'react'
import canepita from '../assets/canepita.jpg'
import chuc from '../assets/chuc.jpg'
import cosgaya from '../assets/cosgaya.jpeg'

export default function Professors({ addRevealRef, sectionRef }) {
  return (
    <section className="section profesores" id="guias" ref={sectionRef}>
      <div className="section-header reveal reveal-up" ref={addRevealRef}>
        <h2>Profesores guía</h2>
      </div>

      <div className="profesores-inner">
        <div className="profesores-grid">
          <article className="profesor-card reveal reveal-left" ref={addRevealRef}>
            <div className="profesor-image-wrapper">
              <img src={canepita} alt="José Aguilar Canepa" className="profesor-image" />
            </div>
            <div className="profesor-info">
              <h3>Ingeniero Dr. José Aguilar Canepa</h3>
              <p>
                José Aguilar Canepa ha sido mi profesor guía principal. Su enfoque
                claro y su dedicación al aprendizaje práctico me han permitido
                comprender mejor los fundamentos y aplicarlos en proyectos reales.
              </p>
            </div>
          </article>

          <article
            className="profesor-card profesor-card--reverse reveal reveal-right"
            ref={addRevealRef}
          >
            <div className="profesor-info">
              <h3>Ingeniero Juan Antonio Chuc Méndez</h3>
              <p>
                Juan Antonio Chuc Méndez. Gracias a él he podido comprender mucho
                mejor el desarrollo móvil y el diseño de interfaces; aprendí a
                crear experiencias visuales más agradables e intuitivas para el usuario.
              </p>
            </div>
            <div className="profesor-image-wrapper">
              <img src={chuc} alt="Juan Antonio Chuc Méndez" className="profesor-image" />
            </div>
          </article>

          <article className="profesor-card reveal reveal-left" ref={addRevealRef}>
            <div className="profesor-image-wrapper">
              <img src={cosgaya} alt="Héctor Quej Cosgaya" className="profesor-image" />
            </div>
            <div className="profesor-info">
              <h3>Ingeniero Dr. Héctor Quej Cosgaya</h3>
              <p>
                Héctor Quej Cosgaya fue uno de los maestros más exigentes durante mi
                formación; su estilo me enseñó a cuidar los detalles y la mantenibilidad del código.
              </p>
            </div>
          </article>
        </div>
      </div>
    </section>
  )
}
