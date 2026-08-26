import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Carousel } from './Carousel'

describe('Carousel', () => {
  it('navega entre itens pelos controles e pelo teclado', async () => {
    const user = userEvent.setup()
    render(
      <Carousel label="Trajetória" itemLabels={['Primeira', 'Segunda']}>
        {[
          <article key="first">Conteúdo inicial</article>,
          <article key="second">Conteúdo seguinte</article>,
        ]}
      </Carousel>,
    )

    expect(screen.getByText('Conteúdo inicial')).toBeVisible()
    expect(screen.queryByText('Conteúdo seguinte')).not.toBeVisible()

    await user.click(screen.getByRole('button', { name: 'Próximo item' }))
    expect(screen.getByText('Conteúdo seguinte')).toBeVisible()

    const carousel = screen.getByRole('region', { name: 'Trajetória' })
    carousel.focus()
    await user.keyboard('{ArrowLeft}')
    expect(screen.getByText('Conteúdo inicial')).toBeVisible()
  })

  it('omite controles quando há somente um item', () => {
    render(
      <Carousel label="Projetos" itemLabels={['LIPCAT']}>
        {[<article key="lipcat">LIPCAT</article>]}
      </Carousel>,
    )

    expect(screen.queryByRole('button')).not.toBeInTheDocument()
    expect(screen.getByText('LIPCAT')).toBeVisible()
  })
})
