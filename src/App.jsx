import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Expertise from './components/Expertise'
import Work from './components/Work'
import Contact from './components/Contact'
import Education from './components/Education'
import Footer from './components/Footer'
import LegalPage from './components/LegalPage'
import ScrollToTop from './components/ScrollToTop'

function HomePage() {
return (
<> <Header />


  <main>
    <Hero />
    <About />
    <Expertise />
    <Work />
    <Education />
    <Contact />
  </main>

  <Footer />
</>


)
}

function App() {
return ( <BrowserRouter>       <ScrollToTop />
 <Routes>
<Route path="/" element={<HomePage />} />

    <Route path="/privacy-policy" element={<LegalPage />} />
    <Route path="/terms-of-use" element={<LegalPage />} />
    <Route path="/disclaimer" element={<LegalPage />} />
    <Route path="/cookie-policy" element={<LegalPage />} />
    <Route path="/accessibility" element={<LegalPage />} />
  </Routes>
</BrowserRouter>


)
}

export default App
