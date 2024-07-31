import './App.css';
import Nav from './Nav';
import Home from './Home'
import Product from './Product'
import Error from './Error';
import Contact from './Contact';
import About from './About';
import Blog from './Blog';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Routes> 
          <Route path="/" element={<Home />} /> 
          <Route path="/Home" element={<Home />} />
          <Route path="/Product" element={<Product />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/About" element={<About />} />
          <Route path="/Blog" element={<Blog />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
