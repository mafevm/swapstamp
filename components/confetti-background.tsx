"use client"

import { useEffect, useRef } from "react"

interface Particle {
  x: number
  y: number
  radius: number
  color: string
  velocity: { x: number; y: number }
  opacity: number
  rotationSpeed: number
  rotation: number
}

export default function ConfettiBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let animationFrameId: number
    const particles: Particle[] = []

    const colors = ["#FF2E63", "#FF6B6B", "#4ECDC4", "#45B7D1"]

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    const createParticle = (x: number, y: number): Particle => ({
      x,
      y,
      radius: Math.random() * 4 + 1,
      color: colors[Math.floor(Math.random() * colors.length)],
      velocity: {
        x: Math.random() * 6 - 3,
        y: Math.random() * 6 - 3,
      },
      opacity: 1,
      rotationSpeed: Math.random() * 0.2 - 0.1,
      rotation: Math.random() * Math.PI * 2,
    })

    const createConfettiExplosion = (x: number, y: number) => {
      for (let i = 0; i < 50; i++) {
        particles.push(createParticle(x, y))
      }
    }

    const drawParticles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      particles.forEach((particle, index) => {
        ctx.save()
        ctx.translate(particle.x, particle.y)
        ctx.rotate(particle.rotation)
        ctx.globalAlpha = particle.opacity
        ctx.beginPath()

        if (Math.random() > 0.5) {
          ctx.fillStyle = particle.color
          ctx.fillRect(-particle.radius, -particle.radius / 3, particle.radius * 2, particle.radius / 1.5)
        } else {
          ctx.fillStyle = particle.color
          ctx.arc(0, 0, particle.radius, 0, Math.PI * 2)
          ctx.fill()
        }

        ctx.closePath()
        ctx.restore()

        particle.x += particle.velocity.x
        particle.y += particle.velocity.y
        particle.velocity.y += 0.1 // gravity
        particle.opacity -= 0.01
        particle.rotation += particle.rotationSpeed

        if (particle.opacity <= 0) {
          particles.splice(index, 1)
        }
      })

      animationFrameId = requestAnimationFrame(drawParticles)
    }

    const handleClick = (event: MouseEvent) => {
      const rect = canvas.getBoundingClientRect()
      const x = event.clientX - rect.left
      const y = event.clientY - rect.top
      createConfettiExplosion(x, y)
    }

    const handleMouseMove = (event: MouseEvent) => {
      if (Math.random() > 0.95) {
        const rect = canvas.getBoundingClientRect()
        const x = event.clientX - rect.left
        const y = event.clientY - rect.top
        createConfettiExplosion(x, y)
      }
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)
    canvas.addEventListener("click", handleClick)
    canvas.addEventListener("mousemove", handleMouseMove)

    // Crear una explosión inicial
    createConfettiExplosion(canvas.width / 2, canvas.height / 2)

    drawParticles()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
      canvas.removeEventListener("click", handleClick)
      canvas.removeEventListener("mousemove", handleMouseMove)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return (
    <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" style={{ zIndex: 0, pointerEvents: "none" }} />
  )
}

