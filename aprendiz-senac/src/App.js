import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';

import Home from './components/pages/home/Home';
import Integrantes from './components/pages/integrantes/Integrantes';
import Podcasts from './components/pages/podcasts/Podcasts';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/integrantes' element={<Integrantes />} />
          <Route path='/podcasts' element={<Podcasts />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
