import { Routes, Route, BrowserRouter } from "react-router-dom"
import { Navbar, Home } from "../resources"
import "./index.css"
const App = () => {
    return (
        <BrowserRouter >
            <main className="border-y-4 bg-black ">
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                </Routes>

            </main>
        </BrowserRouter>
    )
}

export default App
