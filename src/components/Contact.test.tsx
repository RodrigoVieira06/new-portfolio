import { fireEvent, render, screen } from '@testing-library/react'
import { Contact } from './Contact'

describe('Contact', () => {
  it('mostra erros quando o formulário é enviado vazio', async () => {
    render(<Contact />)
    fireEvent.click(screen.getByRole('button', { name: /enviar mensagem/i }))
    expect(
      await screen.findByText('Digite seu nome completo.'),
    ).toBeInTheDocument()
    expect(screen.getByText('Digite um e-mail válido.')).toBeInTheDocument()
    expect(
      screen.getByText('Conte um pouco mais sobre o projeto.'),
    ).toBeInTheDocument()
  })
})
