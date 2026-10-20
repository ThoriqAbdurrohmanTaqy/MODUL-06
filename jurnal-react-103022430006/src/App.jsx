// Bersihkan isi bawaan App.jsx dan hapus import yang tidak dipakai (misalnya App.css), lalu 
// tampilkan hal berikut.
// a. Judul Kantin [Nama Panggilan Anda]. Nama panggilan disimpan di sebuah variabel 
// dan ditampilkan dengan JSX expression { }. [2 poin]
// LABORATORIUM PRAKTIKUM INFORMATIKA
// Fakultas Informatika
// Telkom University
// Prodi S1 Rekayasa Perangkat Lunak, Semester Ganjil TA 2026/2027
// b. Judul tersebut memakai className dan atribut style berupa objek JavaScript dengan 
// minimal 2 properti bergaya camelCase. [3 poin]
// c. Satu paragraf bertuliskan "Saldo awal kartu kantin: Rp ..." yang nilainya hasil 
// perhitungan N * 1000, ditulis langsung sebagai ekspresi di dalam JSX. [5 poin]
// d. Sapaan memakai operator ternary. Buat variabel jam bernilai 9. Tampilkan "Selamat 
// pagi" jika jam < 12, selain itu "Selamat siang". [6 poin]
// e. Satu tombol "Bayar" dengan atribut boolean disabled. Tombol ini belum berfungsi 
// pada tahap ini. [2 poin]
// f. Seluruh elemen dibungkus Fragment <>...</>, bukan <div>. [2 points]


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
