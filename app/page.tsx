"use client"

import { Instagram, Linkedin, Github, Mail } from "lucide-react"
import { useEffect } from "react"
import "./styles.css"
import MouseTrail from "../components/mouse-trail"

export default function Portfolio() {
  useEffect(() => {
    const puzzlePieces = document.querySelectorAll(".puzzle-piece")
    let mouseX = 0
    let mouseY = 0

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX
      mouseY = e.clientY

      puzzlePieces.forEach((piece, index) => {
        const rect = piece.getBoundingClientRect()
        const pieceX = rect.left + rect.width / 2
        const pieceY = rect.top + rect.height / 2

        const deltaX = mouseX - pieceX
        const deltaY = mouseY - pieceY
        const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY)

        const maxDistance = 200
        const influence = Math.max(0, 1 - distance / maxDistance)

        if (influence > 0) {
          const pushX = (deltaX / distance) * influence * 50
          const pushY = (deltaY / distance) * influence * 50
          const scale = 1 + influence * 0.5
          const rotation = influence * 180
          const brightness = 1 + influence * 0.8
          ;(piece as HTMLElement).style.transform = `
            translate(${-pushX}px, ${-pushY}px) 
            scale(${scale}) 
            rotate(${rotation}deg)
          `
          ;(piece as HTMLElement).style.filter = `brightness(${brightness})`
          ;(piece as HTMLElement).style.opacity = `${0.15 + influence * 0.4}`
        } else {
          ;(piece as HTMLElement).style.transform = ""
          ;(piece as HTMLElement).style.filter = ""
          ;(piece as HTMLElement).style.opacity = ""
        }
      })
    }

    const handleMouseLeave = () => {
      puzzlePieces.forEach((piece) => {
        ;(piece as HTMLElement).style.transform = ""
        ;(piece as HTMLElement).style.filter = ""
        ;(piece as HTMLElement).style.opacity = ""
      })
    }

    document.addEventListener("mousemove", handleMouseMove)
    document.addEventListener("mouseleave", handleMouseLeave)

    return () => {
      document.removeEventListener("mousemove", handleMouseMove)
      document.removeEventListener("mouseleave", handleMouseLeave)
    }
  }, [])

  return (
    <div className="retro-container">
      {/* Animated puzzle pieces background */}
      <div className="puzzle-background">
        {Array.from({ length: 30 }).map((_, i) => (
          <div key={i} className={`puzzle-piece puzzle-piece-${(i % 4) + 1}`} />
        ))}
      </div>

      <div className="container">
        <header className="profile-header">
          <div className="profile-avatar-container">
            <img className="profile-avatar" src="/placeholder.svg?height=120&width=120" alt="Bruno Dantas Avatar" />
            <div className="pixel-border"></div>
          </div>
          <div className="profile-bio">
            <h1 className="profile-bio-name">Bruno Dantas</h1>
            <h2 className="profile-bio-subtitle">Desenvolvedor front-end</h2>
            <p className="profile-bio-description">
              Olá, meu nome é Bruno Dantas e sou um desenvolvedor front-end apaixonado por criar experiências incríveis
              na web. Com habilidades em HTML, CSS e JavaScript, estou sempre em busca de novos desafios e oportunidades
              para aprender e crescer na área.
            </p>
          </div>
        </header>

        <nav className="social-nav">
          <ul className="social-links">
            <li>
              <a href="#" className="social-link">
                <Instagram size={24} />
                <span>Instagram</span>
              </a>
            </li>
            <li>
              <a href="#" className="social-link">
                <Linkedin size={24} />
                <span>LinkedIn</span>
              </a>
            </li>
            <li>
              <a href="#" className="social-link">
                <Github size={24} />
                <span>GitHub</span>
              </a>
            </li>
            <li>
              <a href="#" className="social-link">
                <Mail size={24} />
                <span>Email</span>
              </a>
            </li>
          </ul>
        </nav>

        <nav className="projects-nav">
          <h3 className="projects-title">{"< PROJETOS />"}</h3>
          <ul className="projects-list">
            <li className="projects-list-item">
              <a href="#" className="project-link">
                <span className="project-icon">🔗</span>
                Visite o projeto "GitHub CV"
              </a>
            </li>
            <li className="projects-list-item">
              <a href="#" className="project-link">
                <span className="project-icon">📺</span>
                Visite o projeto "Clone Youtube"
              </a>
            </li>
            <li className="projects-list-item">
              <a href="#" className="project-link">
                <span className="project-icon">📰</span>
                Visite o projeto "Portal de noticias"
              </a>
            </li>
            <li className="projects-list-item">
              <a href="#" className="project-link">
                <span className="project-icon">🗺️</span>
                Visite o projeto "Guia turistico"
              </a>
            </li>
            <li className="projects-list-item">
              <a href="#" className="project-link">
                <span className="project-icon">👟</span>
                Visite o projeto "Loja de Sapatos"
              </a>
            </li>
            <li className="projects-list-item">
              <a href="#" className="project-link">
                <span className="project-icon">💪</span>
                Visite o projeto "Site de Academia"
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <MouseTrail />
    </div>
  )
}
