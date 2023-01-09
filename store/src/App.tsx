import React, {useState, useEffect} from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import HomePage from "./pages/HomePage/HomePage";
import BasketPage from "./pages/BasketPage/BasketPage";
import CardPage from "./pages/CardPage/CardPage";
import Header from "./components/Header/Header";
import Form from "./components/Form/Form";
import Page404 from "./pages/404Page/Page404";
window.React = React;



function App() {

  const [counter1, setCounter1] = useState(null);
  const [totalPrice1, setTotalPrice] = useState(null);

  const [localStore, setLocalStore] = useState([])



  useEffect(() => {
    setCounter1(counter1)
    setTotalPrice(totalPrice1)
  }, [counter1, totalPrice1]);

  useEffect(() => {
    localStorage.getItem("Basket")
      ? setLocalStore(JSON.parse(localStorage.getItem("Basket")))
      : setLocalStore([]);
    localStorage.getItem("Count")
      ? setCounter1(JSON.parse(localStorage.getItem("Count")))
      : setCounter1(null);
    localStorage.getItem("Summary")
      ? setTotalPrice(JSON.parse(localStorage.getItem("Summary")))
      : setTotalPrice(null);
  },[]);

  const [isShowForm, setIsShowForm] = useState(false)


  return (
    <>
      <Header counter={counter1} totalPrice={totalPrice1}/>
      <div className="wrapper">
        <Routes>
          <Route path="/" element={<HomePage onStore={(i) => setLocalStore(i)} onChanck={(i) => setCounter1(i)} onChanck2={(i) => setTotalPrice(i)} />} />
          <Route path="basket" element={<BasketPage localStore={localStore}  onShowForm={(i) => setIsShowForm(i)} onChanck={(i) => setCounter1(i)} onChanck2={(i) => setTotalPrice(i)}  counter1={counter1} totalPrice1={totalPrice1}/>} />
          <Route path="ProductDetails/:id" element={<CardPage onChanck={(i) => setCounter1(i)} onChanck2={(i) => setTotalPrice(i)} onShowForm={(i) => setIsShowForm(i)}  onStore={(i) => setLocalStore(i)} counter1={counter1} totalPrice1={totalPrice1}/>} />
          <Route path ="*" element ={ <Page404/>}/>
        </Routes>
        <Footer />
        {isShowForm && <Form onShowForm={(i) => setIsShowForm(i)}/>}
      </div>
    </>
  );
}

export default App;