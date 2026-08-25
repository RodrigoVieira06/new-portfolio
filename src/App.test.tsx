import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { App } from './App'

describe('App', () => {
  it('apresenta o nome, função e as áreas principais do portfólio', () => {
    render(<App />)
    expect(
      screen.getByRole('heading', {
        name: /rodrigo vieira lima/i,
      }),
    ).toBeInTheDocument()
    expect(screen.getByText('Desenvolvedor Frontend')).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /perfil profissional/i }),
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /experiência profissional/i }),
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /contato/i }),
    ).toBeInTheDocument()
  })

  it('não exibe texto de disponibilidade profissional', () => {
    render(<App />)

    expect(
      screen.queryByText(/disponível para oportunidades/i),
    ).not.toBeInTheDocument()
  })

  it('alterna o tema por um controle acessível', async () => {
    const user = userEvent.setup()
    render(<App />)

    const themeButton = screen.getByRole('button', { name: /ativar tema/i })
    const initialTheme = document.documentElement.dataset.theme

    await user.click(themeButton)

    expect(document.documentElement.dataset.theme).not.toBe(initialTheme)
  })
})
