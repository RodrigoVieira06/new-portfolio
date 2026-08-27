import { act, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { App } from './App'

describe('App', () => {
  beforeEach(() => {
    jest.useFakeTimers()
    window.matchMedia = jest.fn().mockReturnValue({ matches: false })
  })

  afterEach(() => {
    jest.runOnlyPendingTimers()
    jest.useRealTimers()
  })

  const completeOpening = () => {
    act(() => {
      jest.advanceTimersByTime(4000)
    })
  }

  it('revela a página em quatro etapas e libera a rolagem ao final', () => {
    render(<App />)

    expect(screen.queryByRole('heading', { level: 1 })).not.toBeInTheDocument()
    expect(screen.queryByRole('navigation')).not.toBeInTheDocument()
    expect(document.querySelector('.app')).toHaveClass('app--opening')

    act(() => {
      jest.advanceTimersByTime(1000)
    })
    expect(
      screen.getByRole('heading', { name: /rodrigo vieira lima/i }),
    ).toBeInTheDocument()
    expect(
      screen.queryByRole('img', { name: /rodrigo vieira lima/i }),
    ).not.toBeInTheDocument()

    act(() => {
      jest.advanceTimersByTime(1000)
    })
    expect(
      screen.getByRole('img', { name: /rodrigo vieira lima/i }),
    ).toBeInTheDocument()
    expect(
      screen.queryByText('Desenvolvedor Frontend Sênior'),
    ).not.toBeInTheDocument()

    act(() => {
      jest.advanceTimersByTime(1000)
    })
    expect(
      screen.getByText('Desenvolvedor Frontend Sênior'),
    ).toBeInTheDocument()
    expect(screen.queryByRole('navigation')).not.toBeInTheDocument()

    act(() => {
      jest.advanceTimersByTime(1000)
    })
    expect(document.querySelector('.app')).not.toHaveClass('app--opening')
    expect(screen.getByRole('navigation')).toBeInTheDocument()
    expect(
      screen.getByRole('heading', {
        name: /rodrigo vieira lima/i,
      }),
    ).toBeInTheDocument()
    expect(screen.getAllByText('Desenvolvedor Frontend Sênior')).toHaveLength(2)
    expect(
      screen.getByRole('heading', { name: /perfil profissional/i }),
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /trajetória profissional/i }),
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /formação acadêmica/i }),
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /vamos conversar/i }),
    ).toBeInTheDocument()
  })

  it('apresenta o trabalho sem explicitar modalidade de contratação', () => {
    render(<App />)
    completeOpening()

    expect(screen.queryByText(/CLT/i)).not.toBeInTheDocument()
    expect(screen.queryByText(/disponível para/i)).not.toBeInTheDocument()
    expect(
      screen.getByText(/para conversar sobre meu trabalho, minha trajetória/i),
    ).toBeVisible()
  })

  it('alterna o tema por um controle acessível', async () => {
    const user = userEvent.setup({ advanceTimers: jest.advanceTimersByTime })
    render(<App />)
    completeOpening()

    const themeButton = screen.getByRole('button', { name: /ativar tema/i })
    const initialTheme = document.documentElement.dataset.theme

    await user.click(themeButton)

    expect(document.documentElement.dataset.theme).not.toBe(initialTheme)
  })

  it('não aguarda a abertura quando a pessoa prefere reduzir movimento', () => {
    window.matchMedia = jest.fn().mockReturnValue({ matches: true })
    render(<App />)

    expect(screen.getByRole('navigation')).toBeInTheDocument()
    expect(document.querySelector('.app')).not.toHaveClass('app--opening')
  })
})
