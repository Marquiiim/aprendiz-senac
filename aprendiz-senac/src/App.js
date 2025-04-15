import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';

import Home from './components/pages/home/Home';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
