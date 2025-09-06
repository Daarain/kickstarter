import logo from './logo.svg';
import Contact from './components/contact';
import about from './components/about'
import homepage from './components/homepage';
import { Route } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import Navbar from './components/Navbar'
import Landingpage from './components/landingpage'
import app from './app.css'
function App() {
  return (
     <BrowserRouter>
      <div className="App">
      
        <homepage/>
        <Routes>
          <Route path="/" element={<Landingpage />} />
          <Route path="/about" element={<about_us />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </BrowserRouter>

  );
}

export default App;
