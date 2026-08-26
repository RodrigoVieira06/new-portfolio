import { ArrowDownRight, GitFork, Link } from 'lucide-react'
import personalPhoto from '../assets/personal/personalPhoto.png'
import { Button } from './ui/button'
export function Hero() {
  return (
    <section className="hero" id="inicio">
      <div className="hero__copy text-backdrop">
        <h1>
          Rodrigo
          <br />
          <em>Vieira Lima.</em>
        </h1>
        <p className="hero__role">Desenvolvedor Frontend</p>
        <p className="hero__intro">
          Experiência em React, TypeScript, design systems, microfrontends e
          aplicações web.
        </p>
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
      </div>
      <div className="hero__visual">
        <div className="hero__portrait">
          <img
            className="hero__portrait-image"
            src={personalPhoto}
            alt="Rodrigo Vieira Lima"
          />
        </div>
        <div className="hero__orbit orbit--one" />
        <div className="hero__orbit orbit--two" />
        <a
          href="https://linkedin.com/in/rodrigovieira12"
          target="_blank"
          rel="noreferrer"
          className="hero__social"
        >
          <Link size={18} /> LinkedIn
        </a>
      </div>
    </section>
  )
}
