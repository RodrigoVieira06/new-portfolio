import { About } from './components/About'
import { Contact } from './components/Contact'
import { Experience } from './components/Experience'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Portfolio } from './components/Portfolio'
export function App() {
  return (
    <>
      <Header />
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
    </>
  )
}
