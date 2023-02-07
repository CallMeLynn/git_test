import { Route, Routes } from 'react-router-dom';
import './App.css';
import FilmPresentation from './components/films/FilmPresentation';
import Footer from './components/footer/Footer';
import NavBar from './components/navBar/NavBar';
import Contact from './';

function App() {
  return (
    <div className="App bg-sky-100">
      <NavBar />
      <Routes>
        <Route path='/' element = {<FilmPresentation />}></Route>
        <Route path='/contact' element = {<Contact />}></Route>
      </Routes>
      <FilmPresentation />
      <Footer />
    </div>
  );
}

export default App;
