import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Carrinho from './components/carrinho'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Carrinho />
    </>
  )
}

export default App
