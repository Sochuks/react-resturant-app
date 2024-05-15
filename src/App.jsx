import { useState } from 'react'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import HeadlineCards from './Components/HeadlineCards'
import Food from './Components/Food'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Navbar />
        <Hero />
        <HeadlineCards />
        <Food />
      </div>
    </>
  )
}

export default App
