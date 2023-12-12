import { FaCaretRight } from 'react-icons/fa'

export function ClaimUsernameForm() {
  return (
    <form>
      <input type="text" placeholder="seu-usuário" />
      <button type="submit">
        <FaCaretRight />
        Reservar usuário
      </button>
    </form>
  )
}
