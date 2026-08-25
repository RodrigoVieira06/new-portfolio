import { ArrowUpRight, FolderOpen } from 'lucide-react'
import { SectionHeading } from './SectionHeading'
export function Portfolio() {
  return (
    <section className="section work" id="portfolio">
      <SectionHeading
        eyebrow="03 / PORTFÓLIO"
        title="Projetos e estudos de caso"
        description="Esta seção receberá projetos que possam ser compartilhados publicamente."
      />
      <div className="work__empty">
        <FolderOpen size={32} />
        <div>
          <h3>Projetos em preparação</h3>
          <p>
            Novos estudos de caso serão incluídos quando estiverem disponíveis.
          </p>
        </div>
        <ArrowUpRight size={24} />
      </div>
    </section>
  )
}
