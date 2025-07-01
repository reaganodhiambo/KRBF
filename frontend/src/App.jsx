import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import './App.css';
import HomePage from './pages/HomePage';
import Contact from './pages/Contact';
import Standings from './components/homePage/Standings';
import { Fixtures } from './components/homePage/Fixtures';
import Teams from './components/homePage/Teams';
import ClubTeamManager from './pages/ClubTeamManager';
import Register from './pages/Register';
import Login from './pages/Login';

function Layout({ children }) {
  const location = useLocation();
  const isRegister = location.pathname === '/register';
  return (
    <div className="min-h-screen bg-sky-50 text-gray-900 flex flex-col">
      {!isRegister && <Navbar />}
      <div className="flex-1">{children}</div>
      {!isRegister && <Footer />}
    </div>
  );
}

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/fixtures" element={<Fixtures />} />
          <Route path="/standings" element={<Standings />} />
          <Route path="/teams" element={<Teams />} />
          <Route path="/manage/clubs-teams" element={<ClubTeamManager />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          {/* Add more routes here as your site grows */}
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
