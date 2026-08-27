import { Menu, Moon, Sun } from 'lucide-react'
import { useEffect, useState } from 'react'
import logo from '../assets/logo/logo-rv.png'
import monochromeLogo from '../assets/logo/logo-rv-monochrome.png'
import { Button } from './ui/button'

const links = [
  ['Sobre', '#sobre'],
  ['Experiência', '#experiencia'],
  ['Projetos', '#portfolio'],
  ['Formação', '#formacao'],
  ['Contato', '#contato'],
]
type HeaderProps = {
  theme: 'light' | 'dark'
  onThemeToggle: () => void
}

export function Header({ theme, onThemeToggle }: HeaderProps) {
  const [activeHref, setActiveHref] = useState<string>()

  useEffect(() => {
    if (!('IntersectionObserver' in window)) return

    const observer = new IntersectionObserver(
      (entries) => {
        const activeSection = entries.find((entry) => entry.isIntersecting)
        if (activeSection) setActiveHref(`#${activeSection.target.id}`)
      },
      { rootMargin: '-35% 0px -55%', threshold: 0 },
    )

    const sections = links
      .map(([, href]) => document.querySelector(href))
      .filter((section): section is HTMLElement => section !== null)

    sections.forEach((section) => {
      observer.observe(section)
    })
    return () => observer.disconnect()
  }, [])

  return (
    <header className="header">
      <div className="header__content">
        <a className="brand" href="#inicio" aria-label="Página inicial">
          <img
            className="brand__logo"
            src={theme === 'dark' ? monochromeLogo : logo}
            alt=""
            width="866"
            height="994"
            data-theme-variant={theme}
          />
        </a>
        <nav aria-label="Navegação principal">
          {links.map(([label, href]) => (
            <a
              href={href}
              key={href}
              className={activeHref === href ? 'is-active' : undefined}
              aria-current={activeHref === href ? 'location' : undefined}
            >
              {label}
            </a>
          ))}
        </nav>
        <div className="header__actions">
          <button
            type="button"
            className="theme-toggle"
            onClick={onThemeToggle}
            aria-label={
              theme === 'dark' ? 'Ativar tema claro' : 'Ativar tema escuro'
            }
            title={
              theme === 'dark' ? 'Ativar tema claro' : 'Ativar tema escuro'
            }
          >
            {theme === 'dark' ? <Sun size={17} /> : <Moon size={17} />}
          </button>
          <Button asChild variant="outline">
            <a href="#contato">Entrar em contato</a>
          </Button>
          <button type="button" className="menu-button" aria-label="Abrir menu">
            <Menu size={20} />
          </button>
        </div>
      </div>
    </header>
  )
}
