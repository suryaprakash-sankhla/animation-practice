import { Route, Routes } from "react-router-dom"
import Home from "./Pages/Home"
import Agence from "./Pages/Agence"
import Projects from "./Pages/Projects"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { useRef } from "react"

const App = () => {

  

  return (
    <div >
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/agence" element={<Agence />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </div>
  )
}

export default App