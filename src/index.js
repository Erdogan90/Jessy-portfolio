import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Contact from './routes/contact';
import Projects from './routes/projects';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Routes>
  <Route path="/" element={<App />} />
  <Route path="Home" element={<App />} />
  <Route path="contact" element={<Contact />} />
  <Route path="projects" element={<Projects />} />
    </Routes>
  </BrowserRouter>
 
);
