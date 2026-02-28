import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import './App.css';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import PrayerTimes from './pages/PrayerTimes';
import Programs from './pages/Programs';
import Donate from './pages/Donate';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';

// Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    // Add grain overlay
    const grain = document.createElement('div');
    grain.className = 'grain-overlay';
    document.body.appendChild(grain);
    
    return () => {
      document.body.removeChild(grain);
    };
  }, []);

  return (
    <Router>
      <div className="min-h-screen bg-masjid-cream">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/prayer-times" element={<PrayerTimes />} />
            <Route path="/programs" element={<Programs />} />
            <Route path="/donate" element={<Donate />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
