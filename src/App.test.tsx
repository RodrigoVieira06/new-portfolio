import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { App } from './App'

describe('App', () => {
  it('apresenta as áreas principais do portfólio', () => {
    render(<App />)
    expect(
      screen.getByRole('heading', { name: /interfaces que movem negócios/i }),
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /tecnologia com intenção/i }),
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /uma trajetória em evolução/i }),
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /vamos criar algo relevante/i }),
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
