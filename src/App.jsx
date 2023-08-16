
import { HashRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home/Home'
import Layanan from './components/page/RouteLayanan';
import Klien from './components/page/RouteKlien';
import Footer from './components/Footer';
import Tentang from './components/Home/Tentang'
import Contact from "./components/Home/Contact"


function App() {
  return (
    <HashRouter>
      <Navbar />
      <Routes>
     
        <Route  exact path="/" element={<Home />} />
        <Route  exact path="/home" element={<Home />} />
        <Route path="/tentang" element={<Tentang />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/layanan" element={<Layanan />} />
        <Route path="/klien" element={<Klien />} />
     
      </Routes>
      <Footer />
    </HashRouter>
  );
}

export default App;
