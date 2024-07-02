import { Routes, Route, BrowserRouter } from "react-router-dom"
import { Navbar, Home, Watch, Channel } from "../resources"
import "./index.css"
const App = () => {
    return (
        <BrowserRouter >
            <main className="border-y-4 bg-black ">
                <Navbar />
                <Routes>
                    <Route path="/:query" element={<Home />} />
                    <Route path="/watch:id" element={<Watch />} />
                    <Route path="/channel:id" element={<Channel />} />

                </Routes>

            </main>
        </BrowserRouter>
    )
}

export default App
