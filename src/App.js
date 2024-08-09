import './App.css';
import Nav from './Nav';
import Home from './Home'
import Product from './Product'
import Error from './Error';
import Contact from './Contact';
import About from './About';
import Blog from './Blog'
import ProductOne from './ProductOne'
import ProductTwo from './ProductTwo';
import ProductThree from './ProductThree';
import ProductFour from './ProductFour';
import ProductFive from './ProductFive';
import ProductSix from './ProductSix';
import ProductSeven from './ProductSeven';
import ProductHeight from './ProductHeight';
import ProductNine from './ProductNine';
import ProductTen from './ProductTen';
import ProductEleven from './ProductEleven';
import ProductTwelve from './ProductTwelve';
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
          <Route path="/ProductOne" element={<ProductOne />} />
          <Route path="/ProductTwo" element={<ProductTwo />} />
          <Route path="/ProductThree" element={<ProductThree />} />
          <Route path="/ProductFour" element={<ProductFour />} />
          <Route path="/ProductFive" element={<ProductFive />} />
        <Route path="/ProductSix" element={<ProductSix />} />
        <Route path="/ProductSeven" element={<ProductSeven />} />
        <Route path="/ProductHeight" element={<ProductHeight />} />
        <Route path="/ProductNine" element={<ProductNine />} />
        <Route path="/ProductTen" element={<ProductTen />} />
        <Route path="/ProductEleven" element={<ProductEleven />} />
        <Route path="/ProductTwelve" element={<ProductTwelve />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
