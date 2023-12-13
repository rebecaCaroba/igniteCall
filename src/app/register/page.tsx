import { FaCaretRight } from 'react-icons/fa'
import './style.scss'

export default function Register() {
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
      <form>
        <label htmlFor="username">Nome de usuário</label>
        <input type="text" name="username" />
        <label htmlFor="fullname">Nome Completo</label>
        <input type="text" name="fullname" />
        <button>
          Próximo passo <FaCaretRight />
        </button>
      </form>
    </main>
  )
}
