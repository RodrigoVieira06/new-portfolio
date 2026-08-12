import { Menu } from 'lucide-react'
import { Button } from './ui/button'

const links = [
  ['Sobre', '#sobre'],
  ['Experiência', '#experiencia'],
  ['Portfólio', '#portfolio'],
  ['Contato', '#contato'],
]
export function Header() {
  return (
    <header className="header">
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
      <Button asChild variant="outline">
        <a href="#contato">Vamos conversar</a>
      </Button>
      <button type="button" className="menu-button" aria-label="Abrir menu">
        <Menu size={20} />
      </button>
    </header>
  )
}
