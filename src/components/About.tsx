import { skills } from '../data/portfolio'
import { SectionHeading } from './SectionHeading'
export function About() {
  return (
    <section className="section about" id="sobre">
      <SectionHeading eyebrow="01 / SOBRE MIM" title="Perfil profissional" />
      <div className="about__content">
        <div className="text-backdrop">
          <p className="lead">
            Minha trajetória na área de tecnologia começou em 2019. Atuo como
            desenvolvedor desde 2022, com experiência em produtos web,
            interfaces e colaboração técnica.
          </p>
          <p>
            Atuo com React, TypeScript e JavaScript na construção de aplicações
            web robustas. Tenho experiência em microfrontends, design systems,
            BFFs e testes, sempre equilibrando excelência técnica, contexto de
            negócio e uma experiência de uso que faça sentido.
          </p>
          <p>
            Também contribuo com padrões de interface, componentes
            reutilizáveis, documentação e troca técnica com o time.
          </p>
        </div>
        <div className="skills-grid">
          {skills.map(({ name, category, iconUrl }) => (
            <article className="skill-card" key={name}>
              <img className="skill-card__icon" src={iconUrl} alt="" />
              <div>
                <strong>{name}</strong>
                <span>{category}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
