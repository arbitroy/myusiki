import Footer from './Footer';
import Hero from './Hero';
import Navbar from './Navbar';
import Events from './CSEvents'; // Import the Events component
import About from './About';

import {  BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router className>
      <div className='relative bg-black'>
        <Navbar/>

        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/events" element={<Events />} />
          <Route path='/about' element={<About/>}/>
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
