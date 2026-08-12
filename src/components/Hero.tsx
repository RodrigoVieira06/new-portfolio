import { ArrowDownRight, GitFork, Link } from 'lucide-react'
import { Button } from './ui/button'
export function Hero() {
  return (
    <section className="hero" id="inicio">
      <div className="hero__copy">
        <p className="eyebrow">Disponível para novos desafios</p>
        <h1>
          Interfaces que
          <br />
          <em>movem negócios.</em>
        </h1>
        <p className="hero__intro">
          Sou Rodrigo Vieira, Desenvolvedor Frontend Sênior. Transformo
          problemas complexos em produtos digitais claros, escaláveis e
          agradáveis de usar.
        </p>
        <div className="hero__actions">
          <Button asChild>
            <a href="#experiencia">
              Conheça minha trajetória <ArrowDownRight size={18} />
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
      <div
        className="hero__visual"
        role="img"
        aria-label="Retrato de Rodrigo Vieira"
      >
        <div className="hero__portrait">
          <span>RV</span>
          <small>
            Frontend
            <br />
            Engineer
          </small>
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
