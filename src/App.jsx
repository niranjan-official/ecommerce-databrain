import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Layout from './components/Layout'
import Body from './components/Body'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='w-screen h-screen flex justify-center bg-slate-50'>
      <Layout/>
    </div>
  )
}

export default App
