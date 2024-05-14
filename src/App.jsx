import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <p className="text-2xl">
        Click on the Vite and React logos to learn more
      </p>
      <button>Open secret</button>
    </>
  )
}

export default App
