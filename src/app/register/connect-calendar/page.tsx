import { FaCaretRight } from 'react-icons/fa'
import '../style.scss'

export default function Register() {
  return (
    <main>
      <header>
        <h2>Conecte sua agenda!</h2>
        <p>
          Conecte o seu calendário para verificar automaticamente as horas
          ocupadas e os novos eventos à medida em que são agendados.
        </p>
        <span>Passo 2 de 4</span>
      </header>
      <form>
        <div className="FormDiv">
          <small>Google Calendar</small>
          <button>
            Conectar <FaCaretRight />
          </button>
        </div>
        <button type="submit" disabled={true}>
          Próximo passo <FaCaretRight />
        </button>
      </form>
    </main>
  )
}
