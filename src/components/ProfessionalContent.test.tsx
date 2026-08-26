import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Education } from './Education'
import { Experience } from './Experience'
import { Portfolio } from './Portfolio'

describe('Conteúdo profissional', () => {
  it('apresenta as empresas no carrossel com suas marcas', async () => {
    const user = userEvent.setup()
    render(<Experience />)

    expect(screen.getByRole('heading', { name: 'Hitss Brasil' })).toBeVisible()
    expect(
      screen.getByRole('img', { name: 'Logo da Hitss Brasil' }),
    ).toBeVisible()

    await user.click(screen.getByRole('button', { name: 'Próximo item' }))
    expect(screen.getByRole('heading', { name: 'Levva' })).toBeVisible()
  })

  it('apresenta LIPCAT como projeto independente sem período', () => {
    render(<Portfolio />)

    expect(screen.getByRole('heading', { name: 'LIPCAT' })).toBeVisible()
    expect(screen.getByText('Projeto independente')).toBeVisible()
    expect(screen.queryByText(/mai\. 2024/i)).not.toBeInTheDocument()
  })

  it('apresenta a formação na FAETERJ-Rio e no IFRJ', () => {
    render(<Education />)

    expect(screen.getByRole('heading', { name: 'FAETERJ-Rio' })).toBeVisible()
    expect(screen.getByRole('heading', { name: 'IFRJ' })).toBeVisible()
    expect(screen.getByText('Ensino médio')).toBeVisible()
  })
})
