import './App.css';
import { Routes, Route } from "react-router-dom";
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import HomePage from './pages/HomePage/HomePage';
import BasketPage from './pages/BasketPage/BasketPage';
import Card from './pages/Card/Card';
import { useEffect, useState } from 'react';

function App() {

  const [product, setProduct] = useState([]);

  useEffect(() => {
    fetch('https://63a042fa24d74f9fe832fb1e.mockapi.io/items')
    .then(res => {return res.json()})
    .then(data => {
      setProduct(data);
    })
  },[])



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
