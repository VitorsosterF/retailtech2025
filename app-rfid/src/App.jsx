import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Carrinho from './components/carrinho'
import { Route, Routes } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Routes>
      <Route path='/' element={<NFCTrigger />} />
      <Route path='/carrinho' element={<Carrinho />}/>
    </Routes>
  )
}

export default App
