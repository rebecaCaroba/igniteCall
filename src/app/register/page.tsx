'use client'
import { FaCaretRight } from 'react-icons/fa'
import './style.scss'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

const registerFormSchema = z.object({
  username: z
    .string()
    .min(3, { message: 'Número de caractéres inválido.' })
    .regex(/^([a-z\\-]+)$/i, { message: 'Apenas texto e hifens.' })
    .transform((username) => username.toLowerCase()),
  fullname: z.string().min(3, { message: 'Número de caractéres inválido.' }),
})

type RegisterFormSchema = z.infer<typeof registerFormSchema>

export default function Register() {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = useForm<RegisterFormSchema>({
    resolver: zodResolver(registerFormSchema),
  })

  async function handleRegister(data: RegisterFormSchema) {
    console.log(data)
  }

  return (
    <main>
      <header>
        <h2>Bem-vindo ao Ignite Call!</h2>
        <p>
          Precisamos de algumas informações para criar seu perfil! Ah, você pode
          editar essas informações depois.
        </p>
        <span>Passo 1 de 4</span>
      </header>
      <form onSubmit={handleSubmit(handleRegister)}>
        <label htmlFor="username">Nome de usuário</label>
        <input type="text" {...register('username')} />
        <span>{errors.username?.message ? errors.username.message : ''}</span>
        <label htmlFor="fullname">Nome Completo</label>
        <input type="text" {...register('fullname')} />
        <span>{errors.fullname?.message ? errors.fullname.message : ''}</span>
        <button disabled={isSubmitting}>
          Próximo passo <FaCaretRight />
        </button>
      </form>
    </main>
  )
}
