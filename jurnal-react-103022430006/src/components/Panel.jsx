import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function Panel({ judul, children }) {
  return (
    <>
      {judul && <h2>{judul}</h2>}
      {children}
    </>
  )
}