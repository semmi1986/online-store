import React, {useState} from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import HomePage from "./pages/HomePage/HomePage";
import BasketPage from "./pages/BasketPage/BasketPage";
import CardPage from "./pages/CardPage/CardPage";
import Header from "./components/Header/Header";
window.React = React;

function App() {
  const [counter, setCounter] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  return (
    <>
      <Header counter={counter} totalPrice={totalPrice}/>
      <div className="wrapper">
        <Routes>
          <Route path="/" element={<HomePage  onChanck={(i) => setCounter(i)} onChanck2={(i) => setTotalPrice(i)}/>} />
          <Route path="basket" element={<BasketPage />} />
          <Route path="ProductDetails/:id" element={<CardPage />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
