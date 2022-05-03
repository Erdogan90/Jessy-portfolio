import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Contact from './routes/contact';
import RokaPdf from './routes/rokapdf';
import RokaEuro from './routes/rokaEuro';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Routes>
  <Route path="/" element={<App />} />
  <Route path="Home" element={<App />} />
  <Route path="contact" element={<Contact />} />
  <Route path="rokapdf" element={<RokaPdf/>}/>
  <Route path="rokaEuro" element={<RokaEuro/>}/>
    </Routes>
  </BrowserRouter>
 
);
