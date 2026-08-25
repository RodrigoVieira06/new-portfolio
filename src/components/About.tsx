import { skills } from '../data/portfolio'
import { SectionHeading } from './SectionHeading'
export function About() {
  return (
    <section className="section about" id="sobre">
      <SectionHeading eyebrow="01 / SOBRE MIM" title="Perfil profissional" />
      <div className="about__content">
        <div>
          <p className="lead">
            Desenvolvedor Frontend com trajetória iniciada em 2019 e experiência
            em produtos web, interfaces e colaboração técnica.
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
          {skills.map(({ name, category, icon: Icon }) => (
            <article className="skill-card" key={name}>
              <Icon size={23} />
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
