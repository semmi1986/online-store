
import React from 'react'
import { render } from 'react-dom'
window.React = React
import './App.css';
import { Routes, Route } from "react-router-dom";
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import HomePage from './pages/HomePage/HomePage';
import BasketPage from './pages/BasketPage/BasketPage';
import Card from './pages/Card/Card';


function App() {
  return (
    <div className='wrapper'>
      <Header/>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='basket' element={<BasketPage/>}/>
        <Route path='card' element={<Card/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
