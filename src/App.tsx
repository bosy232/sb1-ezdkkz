import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Documents from './pages/Documents';
import Payment from './pages/Payment';
import Login from './pages/Login';
import Meetings from './pages/Meetings';
import Journal from './pages/Journal';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/meetings" element={<Meetings />} />
            <Route path="/meetings/:year" element={<Meetings />} />
            <Route path="/documents" element={<Documents />} />
            <Route path="/payment" element={<Payment />} />
            <Route path="/journal/*" element={<Journal />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;