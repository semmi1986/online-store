import './App.css';
import Content from './components/Content/Content';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import SortPage from './components/SortPage/SortPage';

function App() {
  return (
    <div className='wrapper'>
      <Header/>
      <main className='main__page'>
        <SortPage/>
        <Content/>
      </main>
      <Footer/>
    </div>
  );
}

export default App;
