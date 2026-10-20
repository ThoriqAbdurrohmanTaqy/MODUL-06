import { useState } from 'react'
import KartuMenu from './components/KartMenu'
import Panel from './components/Panel'

function App() {
  const [count, setCount] = useState(0)
  const nama = "Thoriq"
  const N = 16
  return (
    <>
        <h1 className="judul" style={{ color: 'blue', fontSize: '24px' }}>
            Kantin {nama}
        </h1>
        <p>LABORATORIUM PRAKTIKUM INFORMATIKA</p>
        <p>Fakultas Informatika</p>
        <p>Telkom University</p>
        <p>Prodi S1 Rekayasa Perangkat Lunak, Semester Ganjil TA 2026/2027</p>
        <p>Thoriq</p>
        <p>Saldo awal kartu kantin: Rp {N * 1000}</p>
        <p>{9 < 12 ? "Selamat pagi" : "Selamat siang"}</p>
        <button disabled>Bayar</button>


        <Panel>
            <KartuMenu nama = "nasi ayam gepreek" harga = {100000 + N * 100} kategori = "makanan">
            </KartuMenu>
        </Panel>

         <Panel>
            <KartuMenu nama = "nasi ayam gepreek" harga = {100000} kategori = "makanan">
            </KartuMenu>
        </Panel>

        <Panel>
            <KartuMenu nama = "nasi ayam gepreek" harga = {100000} kategori = "minuman">
            </KartuMenu>
        </Panel>
    </>



  )

}







export default App
