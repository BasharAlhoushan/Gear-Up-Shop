import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import NavBar from './componete/NavBar';
import Home from './pages/Home';
import ShopAll from './pages/ShopAll';
import ContactUs from './pages/ContactUs';
import AboutUs from './componete/AboutUs';

function App() {
  return (
    <>
   <BrowserRouter>
   <NavBar/>
   <Routes>
   <Route path='/' element={<Home />}/>
   <Route path='/shopall' element={<ShopAll />}/>
   <Route path='/contactus' element={<ContactUs />}/>
   <Route path='/about' element={<AboutUs />}/>
   </Routes>
   </BrowserRouter>
    </>
  );
}

export default App;
