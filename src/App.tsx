import { useEffect, useState } from 'react'
import { About } from './components/About'
import { Contact } from './components/Contact'
import { Experience } from './components/Experience'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { ParticleBackground } from './components/ParticleBackground'
import { Portfolio } from './components/Portfolio'
export function App() {
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    const savedTheme = localStorage.getItem('theme')
    if (savedTheme === 'light' || savedTheme === 'dark') return savedTheme
    return window.matchMedia?.('(prefers-color-scheme: dark)').matches
      ? 'dark'
      : 'light'
  })

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    localStorage.setItem('theme', theme)
  }, [theme])

  return (
    <div className="app">
      <ParticleBackground />
      <Header
        theme={theme}
        onThemeToggle={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      />
      <main>
        <Hero />
        <About />
        <Experience />
        <Portfolio />
        <Contact />
      </main>
      <footer>
        <span>© {new Date().getFullYear()} Rodrigo Vieira Lima</span>
        <span>Feito com intenção e React.</span>
      </footer>
    </div>
  )
}
