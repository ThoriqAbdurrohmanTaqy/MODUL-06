import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  return (
    <>
        <h1 className="judul" style={{ color: 'blue', fontSize: '24px' }}>
            Kantin Thoriq
        </h1>
        <p>LABORATORIUM PRAKTIKUM INFORMATIKA</p>
        <p>Fakultas Informatika</p>
        <p>Telkom University</p>
        <p>Prodi S1 Rekayasa Perangkat Lunak, Semester Ganjil TA 2026/2027</p>
        <p>Thoriq</p>
        <p>Saldo awal kartu kantin: Rp {5 * 1000}</p>
        <p>{9 < 12 ? "Selamat pagi" : "Selamat siang"}</p>
        <button disabled>Bayar</button>

    </>

  )

}



export default App
