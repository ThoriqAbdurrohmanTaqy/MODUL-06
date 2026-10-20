import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function LabelHarga({ nilai }) {
  return (
    <p>Harga: Rp {nilai}</p>
  )
}

export default LabelHarga