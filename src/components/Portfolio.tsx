import { projects } from '../data/portfolio'
import { Carousel } from './Carousel'
import { SectionHeading } from './SectionHeading'

export function Portfolio() {
  return (
    <section className="section work" id="portfolio">
      <SectionHeading
        eyebrow="03 / PROJETOS"
        title="Projetos selecionados"
        description="Trabalhos desenvolvidos fora da trajetória em empresas, apresentados pelo contexto e pelas decisões técnicas."
      />
      <Carousel
        label="Projetos selecionados"
        itemLabels={projects.map(({ name }) => name)}
      >
        {projects.map((project) => (
          <article className="project-card" key={project.name}>
            <div className="project-card__visual">
              <img
                src={project.image}
                alt={`Logo do projeto ${project.name}`}
              />
              <span>{project.context}</span>
            </div>
            <div className="project-card__content text-backdrop">
              <p>Projeto / Desenvolvimento web</p>
              <h3>{project.name}</h3>
              <p className="project-card__summary">{project.summary}</p>
              <ul>
                {project.highlights.map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </Carousel>
    </section>
  )
}
