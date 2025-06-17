import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Navbar'
import Hero from './Hero'
import Fruit from './Fruit'

function App() {
  return (
    <>
    <Navbar />
    <Hero />
    <Fruit />
    </>
  )
}

export default App
