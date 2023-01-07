import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Services from './components/services/Services';
import About from './components/about/About';
import ContactUs from './components/contact/ContactUs';
import Admin from './components/admin/Admin';
import Forms from './components/home/form/Forms';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <BrowserRouter>
    <Routes>
       <Route path='/' element={<App />} />
     <Route path='/services' element={<Services />} />
    <Route path='/about' element={<About />} />
    <Route path='/contactUs' element={<ContactUs />} />
    <Route path='/admin' element={<Admin />} />
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

