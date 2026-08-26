import { ArrowLeft, ArrowRight } from 'lucide-react'
import { type ReactNode, useState } from 'react'

type CarouselProps = {
  label: string
  itemLabels: string[]
  children: ReactNode[]
}

export function Carousel({ label, itemLabels, children }: CarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0)
  const hasMultipleItems = children.length > 1

  const selectPrevious = () => {
    setActiveIndex((current) =>
      current === 0 ? children.length - 1 : current - 1,
    )
  }

  const selectNext = () => {
    setActiveIndex((current) =>
      current === children.length - 1 ? 0 : current + 1,
    )
  }

  return (
    <section
      className="carousel"
      aria-label={label}
      aria-roledescription="carrossel"
      tabIndex={hasMultipleItems ? 0 : undefined}
      onKeyDown={(event) => {
        if (!hasMultipleItems) return
        if (event.key === 'ArrowLeft') selectPrevious()
        if (event.key === 'ArrowRight') selectNext()
      }}
    >
      <div className="carousel__viewport">
        {children.map((child, index) => (
          <section
            className="carousel__slide"
            key={itemLabels[index]}
            aria-label={`${index + 1} de ${children.length}: ${itemLabels[index]}`}
            aria-hidden={index !== activeIndex}
            hidden={index !== activeIndex}
          >
            {child}
          </section>
        ))}
      </div>
      {hasMultipleItems && (
        <div className="carousel__navigation">
          <div className="carousel__buttons">
            <button
              type="button"
              onClick={selectPrevious}
              aria-label="Item anterior"
            >
              <ArrowLeft size={19} />
            </button>
            <button
              type="button"
              onClick={selectNext}
              aria-label="Próximo item"
            >
              <ArrowRight size={19} />
            </button>
          </div>
          <fieldset className="carousel__dots">
            <legend className="sr-only">Selecionar item</legend>
            {itemLabels.map((itemLabel, index) => (
              <button
                type="button"
                key={itemLabel}
                className={activeIndex === index ? 'is-active' : undefined}
                aria-label={`Exibir ${itemLabel}`}
                aria-current={activeIndex === index ? 'true' : undefined}
                onClick={() => setActiveIndex(index)}
              />
            ))}
          </fieldset>
          <span className="carousel__count" aria-live="polite">
            {String(activeIndex + 1).padStart(2, '0')} /{' '}
            {String(children.length).padStart(2, '0')}
          </span>
        </div>
      )}
    </section>
  )
}
