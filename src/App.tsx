import { useState } from 'react'
import './App.css'
import Content from './components/Content/Content'
import NavBar from './components/NavBar/NavBar'
import Slogan from './components/Slogan/Slogan'

const App: React.FC = () => {
  return (
    <div className='dark:text-white text-black overflow-y-auto overflow-x-hidden font-sora text-13 h-screen px-4 py-8 bg-gradient-to-b dark:from-grayDark dark:to-grayLight from-white to-pink-500 md:px-20'>
      <NavBar />
      <Slogan />
      <Content />
    </div>
  )
}

export default App
