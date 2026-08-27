import { GitFork, Mail, Phone, Send } from 'lucide-react'
import { useContactForm } from '../hooks/useContactForm'
import { SectionHeading } from './SectionHeading'
import { Button } from './ui/button'
import { Input } from './ui/input'
import { Textarea } from './ui/textarea'
export function Contact() {
  const {
    register,
    formState: { errors },
    onSubmit,
    sent,
  } = useContactForm()
  return (
    <section className="section contact" id="contato">
      <SectionHeading eyebrow="05 / CONTATO" title="Vamos conversar" />
      <div className="contact__layout">
        <div className="text-backdrop">
          <p className="lead">
            Para conversar sobre meu trabalho, minha trajetória e
            desenvolvimento frontend, use o formulário ou o e-mail abaixo.
          </p>
          <div className="contact__links">
            <a href="mailto:rodrigovlima06@gmail.com">
              <Mail size={19} /> rodrigovlima06@gmail.com
            </a>
            <a href="tel:+5521990012455">
              <Phone size={19} /> (21) 99001-2455
            </a>
            <a
              href="https://github.com/RodrigoVieira06"
              target="_blank"
              rel="noreferrer"
            >
              <GitFork size={19} /> github.com/RodrigoVieira06
            </a>
          </div>
        </div>
        <form onSubmit={onSubmit} noValidate>
          <label htmlFor="contact-name">
            Seu nome
            <Input
              {...register('name')}
              id="contact-name"
              aria-invalid={!!errors.name}
              placeholder="Como posso te chamar?"
            />
          </label>
          {errors.name && <p className="field-error">{errors.name.message}</p>}
          <label htmlFor="contact-email">
            Seu e-mail
            <Input
              {...register('email')}
              id="contact-email"
              aria-invalid={!!errors.email}
              placeholder="voce@empresa.com"
            />
          </label>
          {errors.email && (
            <p className="field-error">{errors.email.message}</p>
          )}
          <label htmlFor="contact-message">
            Sua mensagem
            <Textarea
              {...register('message')}
              id="contact-message"
              aria-invalid={!!errors.message}
              placeholder="Me conte sobre o desafio..."
              rows={4}
            />
          </label>
          {errors.message && (
            <p className="field-error">{errors.message.message}</p>
          )}
          <Button type="submit">
            Enviar mensagem <Send size={17} />
          </Button>
          {sent && (
            <p className="success-message" role="status">
              Seu cliente de e-mail foi aberto. Até breve!
            </p>
          )}
        </form>
      </div>
    </section>
  )
}
