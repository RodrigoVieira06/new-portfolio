import type { CSSProperties } from 'react'

type Particle = {
  delay: string
  duration: string
  size: string
  x: string
  y: string
}

const particles: Particle[] = [
  { x: '8%', y: '14%', size: '9px', delay: '-2s', duration: '18s' },
  { x: '24%', y: '68%', size: '5px', delay: '-11s', duration: '22s' },
  { x: '42%', y: '28%', size: '12px', delay: '-7s', duration: '26s' },
  { x: '62%', y: '76%', size: '7px', delay: '-15s', duration: '20s' },
  { x: '81%', y: '19%', size: '6px', delay: '-4s', duration: '24s' },
  { x: '93%', y: '56%', size: '11px', delay: '-18s', duration: '28s' },
  { x: '16%', y: '42%', size: '4px', delay: '-9s', duration: '19s' },
  { x: '53%', y: '54%', size: '8px', delay: '-21s', duration: '25s' },
  { x: '72%', y: '8%', size: '5px', delay: '-13s', duration: '21s' },
  { x: '4%', y: '84%', size: '6px', delay: '-5s', duration: '23s' },
  { x: '31%', y: '7%', size: '4px', delay: '-17s', duration: '27s' },
  { x: '37%', y: '88%', size: '10px', delay: '-8s', duration: '19s' },
  { x: '57%', y: '12%', size: '5px', delay: '-20s', duration: '24s' },
  { x: '68%', y: '39%', size: '9px', delay: '-3s', duration: '29s' },
  { x: '88%', y: '82%', size: '4px', delay: '-14s', duration: '22s' },
  { x: '12%', y: '26%', size: '7px', delay: '-23s', duration: '26s' },
  { x: '47%', y: '67%', size: '6px', delay: '-10s', duration: '20s' },
  { x: '78%', y: '63%', size: '8px', delay: '-16s', duration: '25s' },
  { x: '98%', y: '34%', size: '5px', delay: '-6s', duration: '18s' },
  { x: '21%', y: '53%', size: '4px', delay: '-19s', duration: '28s' },
  { x: '59%', y: '91%', size: '7px', delay: '-12s', duration: '21s' },
]

export function ParticleBackground() {
  return (
    <div className="particle-background" aria-hidden="true">
      {particles.map((particle) => {
        const style = {
          '--particle-delay': particle.delay,
          '--particle-duration': particle.duration,
          '--particle-size': particle.size,
          '--particle-x': particle.x,
          '--particle-y': particle.y,
        } as CSSProperties

        return <span className="particle" key={particle.x} style={style} />
      })}
    </div>
  )
}
