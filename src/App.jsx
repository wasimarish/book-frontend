import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { AuthProvide } from './context/AuthContext'

const App = () => {
  return (
    <>
    <AuthProvide>
    <nav><Navbar/></nav>
    <div className='min-h-screen max-w-screen-2xl mx-auto px-4 py-6 border-8 font-primary'>
    <Outlet/>
    </div>
    <footer><Footer/></footer>
    </AuthProvide>
    </>
  )
}

export default App