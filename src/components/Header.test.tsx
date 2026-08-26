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

  it('usa a logo transparente da marca', () => {
    const { container } = render(
      <Header theme="light" onThemeToggle={jest.fn()} />,
    )

    expect(container.querySelector('.brand__logo')).toHaveAttribute(
      'src',
      'test-file-stub',
    )
  })
})
