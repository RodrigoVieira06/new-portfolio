import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  it('exibe o retrato de Rodrigo sem o conteúdo textual do card anterior', () => {
    render(<Hero openingStage="complete" />)

    expect(
      screen.getByRole('img', { name: 'Rodrigo Vieira Lima' }),
    ).toHaveClass('hero__portrait-image')
    expect(document.querySelector('.hero__description')).toBeInTheDocument()
    expect(screen.queryByText('RV')).not.toBeInTheDocument()
    expect(screen.queryByText(/frontend engineer/i)).not.toBeInTheDocument()
  })

  it('mantém o link do LinkedIn junto ao retrato', () => {
    render(<Hero openingStage="complete" />)

    expect(screen.getByRole('link', { name: /linkedin/i })).toHaveAttribute(
      'href',
      'https://linkedin.com/in/rodrigovieira12',
    )
  })
})
