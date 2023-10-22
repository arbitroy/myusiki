import Footer from './Footer';
import Hero from './Hero';
import Navbar from './Navbar';
import Events from './CSEvents'; // Import the Events component

import {  BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Navbar />

        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/events" element={<Events />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
