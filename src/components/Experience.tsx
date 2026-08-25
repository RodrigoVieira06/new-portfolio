import { experiences } from '../data/portfolio'
import { SectionHeading } from './SectionHeading'
export function Experience() {
  return (
    <section className="section experience" id="experiencia">
      <SectionHeading
        eyebrow="02 / EXPERIÊNCIA"
        title="Experiência profissional"
        description="Histórico de atuação, responsabilidades e tecnologias utilizadas."
      />
      <div className="timeline">
        {experiences.map((experience, index) => (
          <article className="experience-card" key={experience.company}>
            <div className="experience-card__mark">{experience.accent}</div>
            <div className="experience-card__meta">
              <span>{experience.period}</span>
              <b>0{index + 1}</b>
            </div>
            <div className="experience-card__body text-backdrop">
              <h3>{experience.company}</h3>
              <p className="experience-card__role">{experience.role}</p>
              <p>{experience.summary}</p>
              <ul>
                {experience.highlights.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
