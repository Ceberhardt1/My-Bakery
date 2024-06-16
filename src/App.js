import './App.css';
import './bootstrap.min.css';
import NavBar from './Componets/Common/NavBar/NavBar';
import TopBar from './Componets/Common/TopBar/TopBar';
import Header from './Componets/Common/Header/Header';
import AboutUs from './Componets/AboutUs/AboutUs';
import OfferSection from './Componets/OfferSection/OfferSection'
import Footer from './Componets/Common/Footer/Footer';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<> <TopBar/> <NavBar/> <Header/> <AboutUs/> <OfferSection/> <Footer/></>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
