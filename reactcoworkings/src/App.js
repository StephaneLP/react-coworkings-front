import "bootstrap/dist/css/bootstrap.min.css"
import "./assets/css/style.css"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Coworking from "./pages/coworkings/Coworking"
import CoworkingCreate from "./pages/coworkings/CoworkingCreate"
import CoworkingSingle from "./pages/coworkings/CoworkingSingle"
import CoworkingUpdate from "./pages/coworkings/CoworkingUpdate"

function App() {
  return (
    <>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/coworking" element={<Coworking />} />      
                <Route path="/create-coworking" element={<CoworkingCreate />} />
                <Route path="/single-coworking/:id" element={<CoworkingSingle />} />
                <Route path="/update-coworking/:id" element={<CoworkingUpdate />} />
            </Routes>
        </BrowserRouter>
    </>
  )
}

export default App
