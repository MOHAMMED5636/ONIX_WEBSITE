'use client'

import { useEffect, useState, useRef } from 'react'

export default function CursorTrail() {
  const [trails, setTrails] = useState<Array<{ x: number; y: number; opacity: number }>>([])
  const [isMoving, setIsMoving] = useState(false)
  const lastMoveTime = useRef<number>(0)
  const fadeInterval = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const now = Date.now()
      lastMoveTime.current = now
      
      // Set moving state to true
      setIsMoving(true)
      
      // Add new trail point only when moving
      setTrails(prev => [...prev.slice(-40), { x: e.clientX, y: e.clientY, opacity: 1 }])
      
      // Clear existing fade interval
      if (fadeInterval.current) {
        clearInterval(fadeInterval.current)
      }
      
      // Start fade interval
      fadeInterval.current = setInterval(() => {
        const timeSinceLastMove = Date.now() - lastMoveTime.current
        
        // If mouse hasn't moved for 100ms, start fading out
        if (timeSinceLastMove > 100) {
          setTrails(prev => {
            const newTrails = prev.map(trail => ({ 
              ...trail, 
              opacity: Math.max(0, trail.opacity - 0.15) 
            })).filter(t => t.opacity > 0)
            
            // If no trails left, stop moving
            if (newTrails.length === 0) {
              setIsMoving(false)
            }
            
            return newTrails
          })
        }
      }, 50)
    }

    window.addEventListener('mousemove', handleMouseMove)
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      if (fadeInterval.current) {
        clearInterval(fadeInterval.current)
      }
    }
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none z-[9999] overflow-hidden">
      {isMoving && trails.map((trail, index) => {
        // Construction-themed particle system
        const particleType = index % 5
        
        if (particleType === 0) {
          // Steel beam/structural element
          return (
            <div
              key={index}
              className="absolute"
              style={{
                left: trail.x - 3,
                top: trail.y - 8,
                width: '6px',
                height: '16px',
                opacity: trail.opacity,
                background: 'linear-gradient(90deg, #374151 0%, #6b7280 50%, #374151 100%)',
                transform: `rotate(${index * 15}deg) scale(${1 - index * 0.1})`,
                transition: 'opacity 0.3s ease-out, transform 0.3s ease-out',
                boxShadow: '0 0 4px rgba(55, 65, 81, 0.6)',
                borderRadius: '1px'
              }}
            />
          )
        } else if (particleType === 1) {
          // Electrical wire/connection
          return (
            <div
              key={index}
              className="absolute"
              style={{
                left: trail.x - 1,
                top: trail.y - 12,
                width: '2px',
                height: '24px',
                opacity: trail.opacity,
                background: 'linear-gradient(to bottom, transparent, #fbbf24, #f59e0b, transparent)',
                transform: `rotate(${index * 20}deg) scale(${1 - index * 0.08})`,
                transition: 'opacity 0.25s ease-out, transform 0.25s ease-out',
                boxShadow: '0 0 6px rgba(251, 191, 36, 0.5)',
                borderRadius: '1px'
              }}
            />
          )
        } else if (particleType === 2) {
          // Concrete block/brick
          return (
            <div
              key={index}
              className="absolute"
              style={{
                left: trail.x - 4,
                top: trail.y - 4,
                width: '8px',
                height: '8px',
                opacity: trail.opacity,
                background: 'linear-gradient(135deg, #9ca3af 0%, #6b7280 50%, #4b5563 100%)',
                transform: `rotate(${index * 10}deg) scale(${1 - index * 0.12})`,
                transition: 'opacity 0.35s ease-out, transform 0.35s ease-out',
                boxShadow: '0 0 3px rgba(75, 85, 99, 0.4)',
                borderRadius: '1px'
              }}
            />
          )
        } else if (particleType === 3) {
          // Pipe/plumbing element
          return (
            <div
              key={index}
              className="absolute rounded-full"
              style={{
                left: trail.x - 5,
                top: trail.y - 5,
                width: '10px',
                height: '10px',
                opacity: trail.opacity,
                background: 'radial-gradient(circle, #3b82f6 0%, #1d4ed8 70%, #1e40af 100%)',
                transform: `scale(${1 - index * 0.1})`,
                transition: 'opacity 0.2s ease-out, transform 0.2s ease-out',
                boxShadow: '0 0 5px rgba(59, 130, 246, 0.6)',
                border: '1px solid rgba(30, 64, 175, 0.8)'
              }}
            />
          )
        } else {
          // Construction dust/particles
          return (
            <div
              key={index}
              className="absolute"
              style={{
                left: trail.x - 1,
                top: trail.y - 1,
                width: '2px',
                height: '2px',
                opacity: trail.opacity * 0.7,
                background: '#d1d5db',
                transform: `translate(${Math.sin(index) * 3}px, ${Math.cos(index) * 3}px) scale(${1 - index * 0.15})`,
                transition: 'opacity 0.4s ease-out, transform 0.4s ease-out',
                borderRadius: '50%',
                boxShadow: '0 0 2px rgba(209, 213, 219, 0.5)'
              }}
            />
          )
        }
      })}
    </div>
  )
}

