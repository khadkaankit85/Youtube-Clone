import { Routes, Route, BrowserRouter } from "react-router-dom"
import { Navbar, Home, Watch, Channel } from "../resources"
import "./index.css"
const App = () => {
    return (
        <BrowserRouter >
            <main className="border-y-4  ">
                <Navbar />
                <Routes>
                    <Route path="/home/*" element={<Home />} />
                    <Route path="/watch/:id" element={<Watch />} />
                    <Route path="/channel/:id" element={<Channel />} />
                    <Route path="*" element={<h1 className="text-black text-lg w-full h-screen flex items-center justify-center" >sorry this page is unavailable</h1>} />

                </Routes>

            </main>
        </BrowserRouter>
    )
}

export default App
