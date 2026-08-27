import { act, render, screen } from '@testing-library/react'
import { Header } from './Header'

let observerCallback: IntersectionObserverCallback

class IntersectionObserverMock {
  disconnect = jest.fn()
  observe = jest.fn()
  takeRecords = jest.fn(() => [])
  unobserve = jest.fn()

  constructor(callback: IntersectionObserverCallback) {
    observerCallback = callback
  }
}

describe('Header', () => {
  beforeEach(() => {
    Object.defineProperty(window, 'IntersectionObserver', {
      configurable: true,
      value: IntersectionObserverMock,
      writable: true,
    })
  })

  it('destaca a seção ativa na navegação', () => {
    render(
      <>
        <Header theme="light" onThemeToggle={jest.fn()} />
        <section id="sobre" />
      </>,
    )

    act(() => {
      observerCallback(
        [
          {
            isIntersecting: true,
            target: document.querySelector('#sobre') as Element,
          } as IntersectionObserverEntry,
        ],
        {} as IntersectionObserver,
      )
    })

    expect(screen.getByRole('link', { name: 'Sobre' })).toHaveAttribute(
      'aria-current',
      'location',
    )
  })

  it('usa a variante da nova marca adequada ao tema', () => {
    const { container, rerender } = render(
      <Header theme="light" onThemeToggle={jest.fn()} />,
    )

    const logo = container.querySelector('.brand__logo')

    expect(logo).toHaveAttribute('src', 'test-file-stub')
    expect(logo).toHaveAttribute('data-theme-variant', 'light')
    expect(logo).toHaveAttribute('width', '866')
    expect(logo).toHaveAttribute('height', '994')

    rerender(<Header theme="dark" onThemeToggle={jest.fn()} />)

    expect(logo).toHaveAttribute('data-theme-variant', 'dark')
    expect(logo).toHaveAttribute('src', 'test-file-stub')
  })

  it('mantém a marca decorativa dentro do link acessível', () => {
    render(<Header theme="light" onThemeToggle={jest.fn()} />)

    expect(
      screen.getByRole('link', { name: 'Página inicial' }),
    ).toContainElement(document.querySelector('.brand__logo'))
  })
})
