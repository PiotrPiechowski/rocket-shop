import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { HomePage } from './Pages/HomePage';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { ProductPage } from './Pages/ProductPage';
import { AboutMePage } from './Pages/AboutPageMe';
import { Contact } from './Pages/Contact';
import { Faq } from './Pages/Faq';
import { Cart } from './Pages/Cart';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>

    <BrowserRouter>
        <Routes>
          <Route path="/products" element = { <ProductPage /> } /> {/* 👈 Renders at /app/ */}
          <Route path="/o-mnie" element= { <AboutMePage /> } /> {/* 👈 Renders at /app/ */}
          <Route path="/kontakt" element = { < Contact/> } /> {/* 👈 Renders at /app/ */}
          <Route path="/faq" element = { <Faq/> } /> {/* 👈 Renders at /app/ */}
          <Route path="/koszyk" element = { <Cart /> } /> {/* 👈 Renders at /app/ */}
          <Route path="/" element = { <HomePage/> } /> {/* 👈 Renders at /app/ */}

        </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
