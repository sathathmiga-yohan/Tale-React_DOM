import { Navigate, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Home from "./Pages/Home";
import Faq from "./Pages/Faq";
import Footer from "./Components/Footer";

function App(){
  return(
    <div className="app-shell">
      <Navbar/>
      <main className="page-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <Footer/>
    </div>
  )
}

export default App