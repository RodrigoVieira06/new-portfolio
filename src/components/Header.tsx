import { Menu, Moon, Sun } from 'lucide-react'
import { Button } from './ui/button'

const links = [
  ['Sobre', '#sobre'],
  ['Experiência', '#experiencia'],
  ['Portfólio', '#portfolio'],
  ['Contato', '#contato'],
]
type HeaderProps = {
  theme: 'light' | 'dark'
  onThemeToggle: () => void
}

export function Header({ theme, onThemeToggle }: HeaderProps) {
  return (
    <header className="header">
      <div className="header__content">
        <a className="brand" href="#inicio" aria-label="Página inicial">
          RV<span>.</span>
        </a>
        <nav aria-label="Navegação principal">
          {links.map(([label, href]) => (
            <a href={href} key={href}>
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
            <a href="#contato">Vamos conversar</a>
          </Button>
          <button type="button" className="menu-button" aria-label="Abrir menu">
            <Menu size={20} />
          </button>
        </div>
      </div>
    </header>
  )
}
