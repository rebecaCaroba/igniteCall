'use client'
import { useForm } from 'react-hook-form'
import { FaCaretRight } from 'react-icons/fa'
import { z } from 'zod'

const claimUsernameFormSchema = z.object({
  username: z.string(),
})

type ClaimUsernameFormSchema = z.infer<typeof claimUsernameFormSchema>

export function ClaimUsernameForm() {
  const { register, handleSubmit } = useForm<ClaimUsernameFormSchema>()

  async function handlePreRegister(data: ClaimUsernameFormSchema) {
    console.log(data)
  }

  return (
    <form onSubmit={handleSubmit(handlePreRegister)}>
      <input type="text" placeholder="seu-usuário" {...register('username')} />
      <button type="submit">
        <FaCaretRight />
        Reservar usuário
      </button>
    </form>
  )
}
