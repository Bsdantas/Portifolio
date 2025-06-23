"use client"

import { useEffect, useState } from "react"

export default function MouseTrail() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [trail, setTrail] = useState<Array<{ x: number; y: number; id: number }>>([])

  useEffect(() => {
    let trailId = 0

    const handleMouseMove = (e: MouseEvent) => {
      const newPosition = { x: e.clientX, y: e.clientY }
      setMousePosition(newPosition)

      // Adicionar nova posição ao rastro
      setTrail((prevTrail) => {
        const newTrail = [...prevTrail, { ...newPosition, id: trailId++ }]
        // Manter apenas os últimos 10 pontos
        return newTrail.slice(-10)
      })
    }

    document.addEventListener("mousemove", handleMouseMove)

    // Limpar rastro gradualmente
    const clearTrail = setInterval(() => {
      setTrail((prevTrail) => prevTrail.slice(1))
    }, 100)

    return () => {
      document.removeEventListener("mousemove", handleMouseMove)
      clearInterval(clearTrail)
    }
  }, [])

  return (
    <div className="mouse-trail-container">
      {trail.map((point, index) => (
        <div
          key={point.id}
          className="trail-point"
          style={{
            left: point.x - 5,
            top: point.y - 5,
            opacity: ((index + 1) / trail.length) * 0.5,
            transform: `scale(${(index + 1) / trail.length})`,
          }}
        />
      ))}
    </div>
  )
}
