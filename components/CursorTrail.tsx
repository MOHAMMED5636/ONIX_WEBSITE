'use client'

import { useEffect, useState } from 'react'

export default function CursorTrail() {
  const [trails, setTrails] = useState<Array<{ x: number; y: number; opacity: number }>>([])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Add new trail point - keep many trails for long effect
      setTrails(prev => [...prev.slice(-40), { x: e.clientX, y: e.clientY, opacity: 1 }])
      
      // Fade out trails slowly for smooth blending
      setTimeout(() => {
        setTrails(prev => prev.map(trail => ({ ...trail, opacity: Math.max(0, trail.opacity - 0.12) })).filter(t => t.opacity > 0))
      }, 35)
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none z-[9999] overflow-hidden">
      {trails.map((trail, index) => {
        const colors = [
          'rgba(255, 0, 150, 0.8)', // Pink
          'rgba(0, 255, 255, 0.8)', // Cyan
          'rgba(255, 200, 0, 0.8)', // Yellow
          'rgba(150, 0, 255, 0.8)', // Purple
          'rgba(0, 255, 150, 0.8)', // Green
          'rgba(255, 100, 0, 0.8)', // Orange
          'rgba(0, 150, 255, 0.8)', // Blue
          'rgba(255, 50, 150, 0.8)', // Magenta
          'rgba(100, 255, 200, 0.8)', // Turquoise
          'rgba(255, 150, 50, 0.8)'  // Golden
        ]
        const color = colors[index % colors.length]
        
        return (
          <div
            key={index}
            className="absolute rounded-full animate-pulse"
            style={{
              left: trail.x - 20,
              top: trail.y - 20,
              width: '40px',
              height: '40px',
              opacity: trail.opacity,
              background: `radial-gradient(circle, ${color} 0%, rgba(255,255,255,0.7) 40%, transparent 100%)`,
              filter: 'blur(10px) drop-shadow(0 0 15px ' + color + ')',
              transition: 'opacity 0.3s ease-out',
              transform: `scale(${1 + index * 0.05})`,
              boxShadow: `0 0 30px ${color}, 0 0 60px ${color}, 0 0 90px ${color}`
            }}
          />
        )
      })}
    </div>
  )
}

