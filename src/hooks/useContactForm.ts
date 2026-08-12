import { zodResolver } from '@hookform/resolvers/zod'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

export const contactSchema = z.object({
  name: z.string().min(2, 'Digite seu nome completo.'),
  email: z.string().email('Digite um e-mail válido.'),
  message: z.string().min(10, 'Conte um pouco mais sobre o projeto.'),
})
export type ContactValues = z.infer<typeof contactSchema>
export function useContactForm() {
  const [sent, setSent] = useState(false)
  const form = useForm<ContactValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: { name: '', email: '', message: '' },
  })
  const onSubmit = (values: ContactValues) => {
    const subject = encodeURIComponent(`Contato do portfólio - ${values.name}`)
    const body = encodeURIComponent(
      `Nome: ${values.name}\nE-mail: ${values.email}\n\n${values.message}`,
    )
    window.location.href = `mailto:rodrigovlima06@gmail.com?subject=${subject}&body=${body}`
    setSent(true)
  }
  return { ...form, onSubmit: form.handleSubmit(onSubmit), sent }
}
