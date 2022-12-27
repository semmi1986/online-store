import React from 'react'
import './App.css';
import { Routes, Route } from "react-router-dom";
import Footer from './components/Footer/Footer';
import HomePage from './pages/HomePage/HomePage';
import BasketPage from './pages/BasketPage/BasketPage';
import CardPage from './pages/CardPage/CardPage';
window.React = React


function App() {
  return (
    <div className='wrapper'>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='basket' element={<BasketPage/>}/>
        <Route path='ProductDetails/:id' element={<CardPage/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
