import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import Home from './Components/Home';
import About from './Components/About';
import Skills from './Components/Skills';
import Projects from './Components/Projects';
import Contact from './Components/Contact'
import Nopage from './Components/Nopage';
import Navbar from './Navbar'
import Alexa from '../src/Components/Alexa'
function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
          <BrowserRouter>
          <Navbar/>
      <Routes>
          <Route index element={<Home />} />
          <Route path='/About' element={<About />} />
          <Route path="Skills" element={<Skills />} />
          <Route path="/Projects" element={<Projects />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="*" element={<Nopage />} />
      </Routes>
      <Alexa/>
    </BrowserRouter>
    </>
  )
}

export default App
