import './App.css';
import { Routes, Route } from "react-router-dom";
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import HomePage from './pages/HomePage/HomePage';

function App() {
  return (
    <div className='wrapper'>
      <Header/>
      <HomePage/>
      <Footer/>
    </div>
  );
}

export default App;
