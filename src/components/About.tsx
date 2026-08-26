import { skills } from '../data/portfolio'
import { SectionHeading } from './SectionHeading'
export function About() {
  return (
    <section className="section about" id="sobre">
      <SectionHeading eyebrow="01 / SOBRE MIM" title="Perfil profissional" />
      <div className="about__content">
        <div className="text-backdrop">
          <p className="lead">
            Iniciei minha jornada em tecnologia em 2019 e atuo profissionalmente
            no desenvolvimento de software desde 2022, hoje como Desenvolvedor
            Frontend Sênior.
          </p>
          <p>
            Minha atuação é concentrada em React, TypeScript e JavaScript, com
            experiência em arquitetura de microfrontends, componentização,
            gerenciamento de estado, integração com APIs e manutenção de BFFs em
            NestJS e FastAPI.
          </p>
          <p>
            Também defino padrões técnicos, construo bibliotecas de componentes,
            escrevo testes unitários e compartilho conhecimento com equipes de
            desenvolvimento, considerando qualidade técnica, experiência de uso
            e necessidades do produto.
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
