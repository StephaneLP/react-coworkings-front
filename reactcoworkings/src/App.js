import "bootstrap/dist/css/bootstrap.min.css"
import "./assets/css/style.css"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Coworking from "./pages/Coworking"

function App() {
  return (
    <>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/coworking" element={<Coworking />} />          
            </Routes>
        </BrowserRouter>
    </>
  )
}

export default App
