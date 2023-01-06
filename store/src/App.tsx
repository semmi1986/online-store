import React, {useState, useEffect} from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import HomePage from "./pages/HomePage/HomePage";
import BasketPage from "./pages/BasketPage/BasketPage";
import CardPage from "./pages/CardPage/CardPage";
import Header from "./components/Header/Header";
import Form from "./components/Form/Form";
window.React = React;

function App() {

  const [counter1, setCounter1] = useState(0);
  const [totalPrice1, setTotalPrice] = useState(0);

  const [localStore, setLocalStore] = useState([])



  useEffect(() => {
    setCounter1(counter1)
    setTotalPrice(totalPrice1)
  }, [counter1, totalPrice1]);


  const [isShowForm, setIsShowForm] = useState(false)


  return (
    <>
      <Header counter={counter1} totalPrice={totalPrice1}/>
      <div className="wrapper">
        <Routes>
          <Route path="/" element={<HomePage onStore={(i) => setLocalStore(i)} onChanck={(i) => setCounter1(i)} onChanck2={(i) => setTotalPrice(i)} />} />
          <Route path="basket" element={<BasketPage localStore={localStore}  onShowForm={(i) => setIsShowForm(i)} onChanck={(i) => setCounter1(i)} onChanck2={(i) => setTotalPrice(i)}  counter1={counter1} totalPrice1={totalPrice1}/>} />
          <Route path="ProductDetails/:id" element={<CardPage  onShowForm={(i) => setIsShowForm(i)}/>} />
        </Routes>
        
        <Footer />
        {isShowForm && <Form onShowForm={(i) => setIsShowForm(i)}/>}
      </div>
    </>
  );
}

export default App;