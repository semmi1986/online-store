import React, { useState } from 'react'
import './App.css';
import { Routes, Route } from "react-router-dom";
import Footer from './components/Footer/Footer';
import HomePage from './pages/HomePage/HomePage';
import BasketPage from './pages/BasketPage/BasketPage';
import CardPage from './pages/CardPage/CardPage';
import Form from './components/Form/Form';
import Copy from "./Copy"
window.React = React


interface MyProps{
  isShowForm: boolean
  setIsShowForm: () => void
}

const App: React.FC<MyProps> = () => {

  const [isShowForm, setIsShowForm] = useState<boolean>(false)

  return (
    <div className='wrapper'>
      <Header/>
      <Copy isShowForm ={isShowForm} setIsShowForm={setIsShowForm}/>
      {/* {isShowForm && <Form isShowForm ={isShowForm}/>} */}
      {/* <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='basket' element={<BasketPage/>}/>
        <Route path='ProductDetails/:id' element={<CardPage/>}/>
      </Routes>
      <Footer/> */}
    </div>
  );
}

export default App;
