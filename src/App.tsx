import { useEffect, useState } from 'react'
import { About } from './components/About'
import { Contact } from './components/Contact'
import { Education } from './components/Education'
import { Experience } from './components/Experience'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { ParticleBackground } from './components/ParticleBackground'
import { Portfolio } from './components/Portfolio'
import { useOpeningSequence } from './hooks/useOpeningSequence'
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

  const openingStage = useOpeningSequence()
  const isOpening = openingStage !== 'complete'

  return (
    <div
      className={isOpening ? 'app app--opening' : 'app'}
      data-opening-stage={openingStage}
    >
      <ParticleBackground />
      {!isOpening && (
        <Header
          theme={theme}
          onThemeToggle={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
        />
      )}
      <main>
        <Hero openingStage={openingStage} />
        {!isOpening && (
          <>
            <About />
            <Experience />
            <Portfolio />
            <Education />
            <Contact />
          </>
        )}
      </main>
      {!isOpening && (
        <footer className="text-backdrop">
          <span>© {new Date().getFullYear()} Rodrigo Vieira Lima</span>
          <span>Desenvolvido com React e TypeScript.</span>
        </footer>
      )}
    </div>
  )
}
