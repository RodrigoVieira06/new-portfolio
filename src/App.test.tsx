import { render, screen } from '@testing-library/react'
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
})
