import { ArrowUpRight, FolderOpen } from 'lucide-react'
import { SectionHeading } from './SectionHeading'
export function Portfolio() {
  return (
    <section className="section work" id="portfolio">
      <SectionHeading
        eyebrow="03 / PORTFÓLIO"
        title="Em breve, casos que contam histórias."
        description="Este espaço está sendo preparado para receber produtos e aprendizados selecionados."
      />
      <div className="work__empty">
        <FolderOpen size={32} />
        <div>
          <h3>Projetos em curadoria</h3>
          <p>Novos estudos de caso serão publicados aqui em breve.</p>
        </div>
        <ArrowUpRight size={24} />
      </div>
    </section>
  )
}
