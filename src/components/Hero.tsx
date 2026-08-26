import { ArrowDownRight, GitFork, Link } from 'lucide-react'
import { useEffect, useState } from 'react'
import personalPhoto from '../assets/personal/personalPhoto.jpg'
import type { OpeningStage } from '../hooks/useOpeningSequence'
import { Button } from './ui/button'

type HeroProps = {
  openingStage: OpeningStage
}

export function Hero({ openingStage }: HeroProps) {
  const [isPortraitReady, setIsPortraitReady] = useState(false)
  const showTitle = openingStage !== 'empty'
  const showPortrait = !['empty', 'title'].includes(openingStage)
  const showDescription = !['empty', 'title', 'portrait'].includes(openingStage)
  const isComplete = openingStage === 'complete'

  useEffect(() => {
    let isActive = true
    const portrait = new Image()
    const markPortraitAsReady = () => {
      if (isActive) setIsPortraitReady(true)
    }

    portrait.src = personalPhoto

    if (typeof portrait.decode === 'function') {
      void portrait.decode().then(markPortraitAsReady, markPortraitAsReady)
    } else {
      portrait.addEventListener('load', markPortraitAsReady, { once: true })
      portrait.addEventListener('error', markPortraitAsReady, { once: true })
    }

    return () => {
      isActive = false
    }
  }, [])

  return (
    <section className="hero" id="inicio">
      {showTitle && (
        <div className="hero__copy text-backdrop">
          <h1>
            Rodrigo
            <br />
            <em>Vieira Lima.</em>
          </h1>
          {showDescription && (
            <div className="hero__description">
              <p className="hero__role">Desenvolvedor Frontend Sênior</p>
              <p className="hero__intro">
                Atuo na construção e evolução de aplicações web com React,
                TypeScript, arquitetura de microfrontends, integração com APIs e
                desenvolvimento de BFFs.
              </p>
            </div>
          )}
          {isComplete && (
            <div className="hero__actions">
              <Button asChild>
                <a href="#experiencia">
                  Ver experiência profissional <ArrowDownRight size={18} />
                </a>
              </Button>
              <Button asChild variant="ghost">
                <a
                  href="https://github.com/RodrigoVieira06"
                  target="_blank"
                  rel="noreferrer"
                >
                  <GitFork size={18} /> GitHub
                </a>
              </Button>
            </div>
          )}
        </div>
      )}
      {showPortrait && (
        <div className="hero__visual">
          <div className="hero__portrait">
            <img
              className={`hero__portrait-image${isPortraitReady ? ' is-ready' : ''}`}
              src={personalPhoto}
              alt="Rodrigo Vieira Lima"
              width={3264}
              height={4928}
              loading="eager"
            />
          </div>
          <div className="hero__orbit orbit--one" />
          <div className="hero__orbit orbit--two" />
          {isComplete && (
            <a
              href="https://linkedin.com/in/rodrigovieira12"
              target="_blank"
              rel="noreferrer"
              className="hero__social"
            >
              <Link size={18} /> LinkedIn
            </a>
          )}
        </div>
      )}
    </section>
  )
}
