import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar/Navbar"
import Home from "./pages/Home"
import Menu from "./pages/Menu"
import Catering from "./components/Catering/Catering"
import ContactPage from "./pages/Contact/Contact"
import Gallery from "./pages/Gallery/Gallery"
import ScrollToTop from "./components/ScrollToTop"

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Navbar hideOnHero />
              <Home />
            </>
          }
        />
        <Route
          path="/menu"
          element={
            <>
              <Navbar />
              <Menu />
            </>
          }
        />
        <Route
          path="/gallery"
          element={
            <>
              <Navbar />
              <Gallery />
            </>
          }
        />
        <Route
          path="/contact"
          element={
            <>
              <Navbar />
              <ContactPage />
            </>
          }
        />
        <Route
          path="/catering"
          element={
            <>
              <Navbar />
              <Catering />
            </>
          }
        />
      </Routes>
    </Router>
  )
}

export default App
