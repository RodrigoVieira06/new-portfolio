import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { App } from './App'

describe('App', () => {
  it('apresenta as áreas principais do portfólio', () => {
    render(<App />)
    expect(
      screen.getByRole('heading', {
        name: /desenvolvimento frontend para produtos digitais/i,
      }),
    ).toBeInTheDocument()
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

  it('apresenta disponibilidade para oportunidades CLT', () => {
    render(<App />)

    expect(
      screen.getByText(/disponível para oportunidades clt/i),
    ).toBeInTheDocument()
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
