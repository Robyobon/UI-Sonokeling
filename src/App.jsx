
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home/Home'
import Layanan from './components/page/RouteLayanan';
import Klien from './components/page/RouteKlien';
import Footer from './components/Footer';
import Tentang from './components/Home/Tentang'
import Contact from "./components/Home/Contact"


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
     
        <Route  exact path="/home" element={<Home />} />
        <Route path="/tentang" element={<Tentang />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/layanan" element={<Layanan />} />
        <Route path="/klien" element={<Klien />} />
     
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
