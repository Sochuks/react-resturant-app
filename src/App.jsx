import { useState } from 'react'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import HeadlineCards from './Components/HeadlineCards'
import Food from './Components/Food'
import Category from './Components/Category'
import Steps from './Components/Steps'
import About from './Components/About'
import Features from './Components/Features'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <div className='bg-hero-one bg-no-repeat bg-cover -mr-4'>
          <Navbar />
          <Hero />
        </div>
          <Features/>
          <HeadlineCards />
        <About/>
        
        <Steps/>
        
        <Food />
        <Category/>
      </div>
    </>
  )
}

export default App
