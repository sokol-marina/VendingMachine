import './styles/App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import React from 'react';
import VendingMachine from './components/VendingMachine';
import Cookies from './components/snaks/Cookies';
import Bars from './components/snaks/Bars';
import Chips from './components/snaks/Chips';
import Sodas from './components/snaks/Sodas';
import Home from './components/snaks/Home';
function App() {
  return (
    <div>
      <BrowserRouter>
        <VendingMachine />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/bars" element={<Bars />}></Route>
          <Route path="/cookies" element={<Cookies />}></Route>
          <Route path="/chips" element={<Chips />}></Route>
          <Route path="/sodas" element={<Sodas />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
