import { useState } from 'react'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import HeadlineCards from './Components/HeadlineCards'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Navbar />
        <Hero />
        <HeadlineCards />
      </div>
    </>
  )
}

export default App
