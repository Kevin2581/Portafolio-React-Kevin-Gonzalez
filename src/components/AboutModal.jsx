import React from 'react'

export default function AboutModal({ onClose }) {
  return (
    <div className="project-modal-backdrop" onClick={onClose}>
      <div className="project-modal about-modal" role="dialog" aria-modal="true" aria-labelledby="about-title" onClick={(e) => e.stopPropagation()}>
        <button className="project-modal-close" onClick={onClose} aria-label="Cerrar">×</button>
        <h3 id="about-title" className="project-modal-title">Kevin González</h3>
        <p className="project-modal-subtitle">Estudiante de la Universidad Autónoma de Campeche</p>
        <p className="about-text">
          Soy estudiante de la Facultad de Ingeniería, me considero una persona autodidacta y curiosa. Me gusta aprender cosas nuevas, experimentar con tecnologías modernas y seguir mejorando mis habilidades en desarrollo web y experiencia de usuario.
        </p>
      </div>
    </div>
  )
}
