import { useEffect, useState } from 'react'

export type OpeningStage =
  | 'empty'
  | 'title'
  | 'portrait'
  | 'description'
  | 'complete'

const openingStages: OpeningStage[] = [
  'title',
  'portrait',
  'description',
  'complete',
]

export function useOpeningSequence() {
  const [stage, setStage] = useState<OpeningStage>('empty')

  useEffect(() => {
    if (window.matchMedia?.('(prefers-reduced-motion: reduce)').matches) {
      setStage('complete')
      return
    }

    const timers = openingStages.map((nextStage, index) =>
      window.setTimeout(() => setStage(nextStage), (index + 1) * 1000),
    )

    return () => {
      timers.forEach((timer) => {
        window.clearTimeout(timer)
      })
    }
  }, [])

  return stage
}
