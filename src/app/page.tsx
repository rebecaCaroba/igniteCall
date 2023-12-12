import banner from '../assets/banner.svg'
import Image from 'next/image'
import './style.scss'
import { FaGoogle } from "react-icons/fa";


export default function Home() {
  return (
    <div className="Container">
      <div className="text-home">
        <h1>Agendamento descomplicado</h1>
        <p>
          Conecte seu calendário e permita que as pessoas marquem agendamentos
          no seu tempo livre.
        </p>
        <button> 
          <FaGoogle/>
        Criar conta com Google</button>
      </div>
      <Image
        src={banner}
        alt="calendario"
        height={400}
        quality={100}
        priority
      />
    </div>
  )
}
