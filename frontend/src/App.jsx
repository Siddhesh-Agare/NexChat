import { useState } from 'react'
import { Show, SignInButton, SignUpButton, UserButton } from '@clerk/react'
import { ThemeProvider } from './context/ThemeContext'
import { WallpaperProvider } from './context/WallpaperContext'
import { Route } from 'react-router'
import ChatPage from './pages/ChatPage'
import AuthPage from './pages/AuthPage'
import { Routes, Navigate } from 'react-router'
import { useAuth } from '@clerk/react'


function App() {
  
  const { isSignedIn, isLoaded } = useAuth()

  return (
    <ThemeProvider>
    <WallpaperProvider>
      <Routes>
        <Route path="/" element={isSignedIn ? <ChatPage /> : <Navigate to={"/auth"} replace />} />
          <Route path="/auth" element={!isSignedIn ? <AuthPage /> : <Navigate to={"/"} replace />}/>
      </Routes>

    </WallpaperProvider>
    </ThemeProvider>
  )
}

export default App
