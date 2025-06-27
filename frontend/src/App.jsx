import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import './App.css';
import HomePage from './pages/HomePage';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-sky-50 text-gray-900 flex flex-col">
        <Navbar />
        <div className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/contact" element={<Contact />} />
            {/* Add more routes here as your site grows */}
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
