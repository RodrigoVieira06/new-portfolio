import { experiences } from '../data/portfolio'
import { Carousel } from './Carousel'
import { SectionHeading } from './SectionHeading'

export function Experience() {
  return (
    <section className="section experience" id="experiencia">
      <SectionHeading
        eyebrow="02 / EXPERIÊNCIA"
        title="Trajetória profissional"
        description="Empresas, responsabilidades e tecnologias que marcaram minha atuação desde 2022."
      />
      <Carousel
        label="Experiências profissionais"
        itemLabels={experiences.map(({ company }) => company)}
      >
        {experiences.map((experience, index) => (
          <article className="experience-card" key={experience.company}>
            <div className="experience-card__visual">
              <span>0{index + 1}</span>
              <img
                src={experience.image}
                alt={`Logo da ${experience.company}`}
              />
            </div>
            <div className="experience-card__body text-backdrop">
              <p className="experience-card__period">{experience.period}</p>
              <h3>{experience.company}</h3>
              <p className="experience-card__role">{experience.role}</p>
              <p className="experience-card__summary">{experience.summary}</p>
              <ul>
                {experience.highlights.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </Carousel>
    </section>
  )
}
