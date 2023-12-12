'use client'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { FaCaretRight } from 'react-icons/fa'
import { z } from 'zod'
import '../../app/(home)/style.scss'

const claimUsernameFormSchema = z.object({
  username: z
    .string()
    .min(1, { message: 'Número de caractéres inválido.' })
    .regex(/^([a-z\\-]+)$/i, { message: 'Apenas texto e hifens.' })
    .transform((username) => username.toLowerCase()),
})

type ClaimUsernameFormSchema = z.infer<typeof claimUsernameFormSchema>

export function ClaimUsernameForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ClaimUsernameFormSchema>({
    resolver: zodResolver(claimUsernameFormSchema),
  })

  async function handlePreRegister(data: ClaimUsernameFormSchema) {
    console.log(data.username)
  }

  return (
    <>
      <form onSubmit={handleSubmit(handlePreRegister)}>
        <input
          type="text"
          placeholder="seu-usuário"
          {...register('username')}
          required
        />
        <button type="submit">
          <FaCaretRight />
          Reservar usuário
        </button>
      </form>
      <div className="form-annotation">
        {errors.username?.message
          ? errors.username.message
          : 'Digite o nome de usuário'}
      </div>
    </>
  )
}
