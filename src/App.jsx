import { useState, useEffect, useRef } from 'react'
import './App.css'

import kevinPhoto from './assets/kevin-diseno.png'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Professors from './components/Professors'
import ProjectsTimeline from './components/ProjectsTimeline'
import Contact from './components/Contact'
import AboutModal from './components/AboutModal'

function App() {
  const [showAbout, setShowAbout] = useState(false)
  const [activeSection, setActiveSection] = useState('inicio')
  const [selectedProject, setSelectedProject] = useState(null)

  const portfolioRef = useRef(null)
  const inicioRef = useRef(null)
  const guiasRef = useRef(null)
  const proyectosRef = useRef(null)
  const revealElementsRef = useRef([])
  const revealObserverRef = useRef(null)

  const addRevealRef = (el) => {
    if (!el) return
    if (!revealElementsRef.current.includes(el)) {
      revealElementsRef.current.push(el)
      if (revealObserverRef.current) {
        revealObserverRef.current.observe(el)
      }
    }
  }

  const projectLinks = {
    1: {
      page: 'https://kevin2581.github.io/E-Commers/',
      repo: 'https://github.com/Kevin2581/E-Commers.git',
    },
    2: {
      page: 'https://kevin2581.github.io/Red-Social/',
      repo: 'https://github.com/Kevin2581/Red-Social',
    },
    3: {
      page: 'https://kevin2581.github.io/Cheat-Sheet/',
      repo: 'https://github.com/Kevin2581/Cheat-Sheet',
    },
    4: {
      page: 'https://kevin2581.github.io/Escapa-del-Dictador/',
      repo: 'https://github.com/Kevin2581/Escapa-del-Dictador',
    },
    5: {
      page: 'https://kevin2581.github.io/Formulario-CRUD/',
      repo: 'https://github.com/Kevin2581/Formulario-CRUD.git',
    },
    6: {
      page: 'https://kevin2581.github.io/Tic-Tac-Toe-React/',
      repo: 'https://github.com/Kevin2581/Tic-Tac-Toe-React.git',
    },
  }

  useEffect(() => {
    const observador = new IntersectionObserver(
      (entries) => {
        entries.forEach((entrada) => {
          if (entrada.isIntersecting) {
            entrada.target.classList.add('reveal-visible')
            observador.unobserve(entrada.target)
          }
        })
      },
      {
        threshold: 0.2,
      }
    )

    revealObserverRef.current = observador

    revealElementsRef.current.forEach((el) => {
      if (el) observador.observe(el)
    })

    return () => {
      observador.disconnect()
      revealObserverRef.current = null
    }
  }, [])

  useEffect(() => {
    const secciones = [inicioRef.current, guiasRef.current, proyectosRef.current].filter(Boolean)

    if (!secciones.length) return

    let estoyActualizando = false

    const actualizarSeccionActiva = () => {
      const centroPantalla = window.innerHeight / 2
      let seccionMasCercana = { id: null, distancia: Infinity }

      secciones.forEach((seccion) => {
        const rect = seccion.getBoundingClientRect()
        const centroSeccion = rect.top + rect.height / 2
        const distancia = Math.abs(centroSeccion - centroPantalla)

        if (distancia < seccionMasCercana.distancia) {
          seccionMasCercana = { id: seccion.id, distancia }
        }
      })

      if (seccionMasCercana.id) {
        setActiveSection((prev) =>
          prev !== seccionMasCercana.id ? seccionMasCercana.id : prev
        )
      }
    }

    const manejarScroll = () => {
      if (!estoyActualizando) {
        window.requestAnimationFrame(() => {
          actualizarSeccionActiva()
          estoyActualizando = false
        })
        estoyActualizando = true
      }
    }

    actualizarSeccionActiva()
    window.addEventListener('scroll', manejarScroll, { passive: true })
    window.addEventListener('resize', manejarScroll)

    return () => {
      window.removeEventListener('scroll', manejarScroll)
      window.removeEventListener('resize', manejarScroll)
    }
  }, [])

  const handleNavClick = (idSeccion) => {
    setActiveSection(idSeccion)
  }

  const toggleSelectProject = (idProyecto) => {
    setSelectedProject((prev) => (prev === idProyecto ? null : idProyecto))
  }

  const handleProjectKey = (evento, idProyecto) => {
    if (evento.key === 'Enter' || evento.key === ' ') {
      evento.preventDefault()
      toggleSelectProject(idProyecto)
    }
  }

  const isHeroBroken = activeSection !== 'inicio'

  return (
    <div className="portfolio" ref={portfolioRef}>
      <Nav activeSection={activeSection} onNavClick={handleNavClick} onAvatarClick={() => setShowAbout(true)} kevinPhoto={kevinPhoto} />

      <Hero isHeroBroken={isHeroBroken} addRevealRef={addRevealRef} ref={inicioRef} onAvatarClick={() => setShowAbout(true)} />

      <main>
        <Professors addRevealRef={addRevealRef} sectionRef={guiasRef} />
        <ProjectsTimeline
          projectLinks={projectLinks}
          selectedProject={selectedProject}
          toggleSelectProject={toggleSelectProject}
          handleProjectKey={handleProjectKey}
          addRevealRef={addRevealRef}
          sectionRef={proyectosRef}
        />
        <Contact addRevealRef={addRevealRef} />

        <p className="footer">@ 2025 Kevin del Jesús González Maas</p>

        {showAbout && <AboutModal onClose={() => setShowAbout(false)} />}
      </main>
    </div>
  )
}

export default App
