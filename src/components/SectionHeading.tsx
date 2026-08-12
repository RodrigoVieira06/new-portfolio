type Props = { eyebrow: string; title: string; description?: string }
export function SectionHeading({ eyebrow, title, description }: Props) {
  return (
    <div className="section-heading">
      <p>{eyebrow}</p>
      <h2>{title}</h2>
      {description && <span>{description}</span>}
    </div>
  )
}
