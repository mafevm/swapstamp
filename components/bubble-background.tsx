"use client"

import { useEffect, useRef } from "react"

interface Bubble {
  x: number
  y: number
  radius: number
  color: string
  vx: number
  vy: number
}

export default function BubbleBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let animationFrameId: number
    let bubbles: Bubble[] = []
    const mouse = { x: 0, y: 0 }

    const colors = [
      "rgba(255, 46, 99, 0.3)",
      "rgba(255, 107, 107, 0.3)",
      "rgba(199, 0, 57, 0.3)",
      "rgba(144, 12, 63, 0.3)",
    ]

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      initBubbles()
    }

    const initBubbles = () => {
      const bubbleCount = Math.floor((canvas.width * canvas.height) / 10000)
      bubbles = Array.from({ length: bubbleCount }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 20 + 10,
        color: colors[Math.floor(Math.random() * colors.length)],
        vx: Math.random() * 2 - 1,
        vy: Math.random() * 2 - 1,
      }))
    }

    const drawBubbles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      bubbles.forEach((bubble) => {
        // Move towards mouse
        const dx = mouse.x - bubble.x
        const dy = mouse.y - bubble.y
        const distance = Math.sqrt(dx * dx + dy * dy)
        if (distance < 200) {
          bubble.x += dx * 0.01
          bubble.y += dy * 0.01
        }

        // Regular movement
        bubble.x += bubble.vx
        bubble.y += bubble.vy

        // Bounce off walls
        if (bubble.x < 0 || bubble.x > canvas.width) bubble.vx *= -1
        if (bubble.y < 0 || bubble.y > canvas.height) bubble.vy *= -1

        // Draw bubble
        ctx.beginPath()
        ctx.arc(bubble.x, bubble.y, bubble.radius, 0, Math.PI * 2)
        ctx.fillStyle = bubble.color
        ctx.fill()

        // Draw shine
        const gradient = ctx.createRadialGradient(
          bubble.x - bubble.radius * 0.3,
          bubble.y - bubble.radius * 0.3,
          bubble.radius * 0.1,
          bubble.x,
          bubble.y,
          bubble.radius,
        )
        gradient.addColorStop(0, "rgba(255, 255, 255, 0.8)")
        gradient.addColorStop(1, "rgba(255, 255, 255, 0)")
        ctx.beginPath()
        ctx.arc(bubble.x, bubble.y, bubble.radius, 0, Math.PI * 2)
        ctx.fillStyle = gradient
        ctx.fill()
      })

      animationFrameId = requestAnimationFrame(drawBubbles)
    }

    const handleMouseMove = (event: MouseEvent) => {
      const rect = canvas.getBoundingClientRect()
      mouse.x = event.clientX - rect.left
      mouse.y = event.clientY - rect.top
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)
    canvas.addEventListener("mousemove", handleMouseMove)

    drawBubbles()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
      canvas.removeEventListener("mousemove", handleMouseMove)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return (
    <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" style={{ zIndex: 0, pointerEvents: "none" }} />
  )
}

