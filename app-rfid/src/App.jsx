import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Carrinho from './pages/carrinho'
import { Route, Routes } from 'react-router-dom'
import WebhookPage from './pages/webhook'

function App() {
  const [count, setCount] = useState(0);

  return (
    <Routes>

      <Route path='/carrinho' element={<Carrinho />}/>
      <Route path='/webhook' element={<WebhookPage />}/>
      <Route path='/webhook2' element={<WebhookPage2 />}/>
      <Route path='/finalizada' element={<Finalizada />} />
    </Routes>
  );
}

export default App;
