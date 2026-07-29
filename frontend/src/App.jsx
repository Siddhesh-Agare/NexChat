import { useState } from 'react'
import { Show, SignInButton, SignUpButton, UserButton } from '@clerk/react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <h1>MY APP</h1>
      <header>
        <Show when="signed-out">
          <SignInButton mode='model' />
          <SignUpButton mode='model' />
        </Show>
        <Show when="signed-in">
          <UserButton />
        </Show>
      </header>

    </div>
  )
}

export default App
