import './App.css';
import Nav from './Nav';
import Header from './Header';
import Foter from './Foter';
import Error from './Error';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
function App() {
  return (
    <div className="App">
       < Nav />
           <BrowserRouter>
           <Routes>
           <Route path="/Header" element={ <Header/>}/>
           <Route path="/" element={ <Header />}/>
           <Route path="/Foter" element={ <Foter />}/>
           <Route path="*" element={ <Error/>}/>
           </Routes>
           </BrowserRouter>
     
     
     
    </div>
  );
}

export default App;
