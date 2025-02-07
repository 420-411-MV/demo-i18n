import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './i18n'
import Header from './components/Header'
import PlayButton from './components/PlayButton'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <PlayButton />
      
    </>
  )
}

export default App
