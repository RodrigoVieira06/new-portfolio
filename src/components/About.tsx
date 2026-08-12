import { skills } from '../data/portfolio'
import { SectionHeading } from './SectionHeading'
export function About() {
  return (
    <section className="section about" id="sobre">
      <SectionHeading
        eyebrow="01 / SOBRE MIM"
        title="Tecnologia com intenção."
      />
      <div className="about__content">
        <div>
          <p className="lead">
            Minha trajetória em tecnologia começou em 2019 e é guiada por
            curiosidade, colaboração e atenção aos detalhes.
          </p>
          <p>
            Atuo com React, TypeScript e JavaScript na construção de aplicações
            web robustas. Tenho experiência em microfrontends, design systems,
            BFFs e testes, sempre equilibrando excelência técnica, contexto de
            negócio e uma experiência de uso que faça sentido.
          </p>
          <p>
            Além de desenvolver, gosto de criar fundações que ajudam o time:
            padrões claros, componentes reaproveitáveis e conversas técnicas que
            fazem a solução avançar.
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
