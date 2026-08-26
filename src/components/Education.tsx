import { education } from '../data/portfolio'
import { SectionHeading } from './SectionHeading'

export function Education() {
  return (
    <section className="section education" id="formacao">
      <SectionHeading
        eyebrow="04 / FORMAÇÃO"
        title="Formação acadêmica"
        description="A base acadêmica que acompanha minha trajetória em tecnologia."
      />
      <div className="education__grid">
        {education.map((item, index) => (
          <article className="education-card" key={item.institution}>
            <div className="education-card__logo">
              <img src={item.image} alt={`Logo da ${item.institution}`} />
            </div>
            <div className="education-card__content text-backdrop">
              <span>0{index + 1}</span>
              <h3>{item.institution}</h3>
              <p>{item.course}</p>
              {item.period && <time>{item.period}</time>}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
