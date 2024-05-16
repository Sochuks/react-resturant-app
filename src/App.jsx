import { useState } from 'react'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import HeadlineCards from './Components/HeadlineCards'
import Food from './Components/Food'
import Category from './Components/Category'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Navbar />
        <Hero />
        <HeadlineCards />
        <Food />
        <Category/>
      </div>
    </>
  )
}

export default App
