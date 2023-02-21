import { Route, Routes } from 'react-router-dom';
import './App.css';
import FilmPresentation from './components/films/FilmPresentation';
import Footer from './components/footer/Footer';
import NavBar from './components/navBar/NavBar';
import Contact from './components/contact/Contact';
import Detail from './components/films/Detail';

function App() {
  return (
    <div className="App bg-sky-100">
      <NavBar />
      <Routes>
        <Route path='/home' element={<FilmPresentation />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
        <Route path='/detail/:id' element={<Detail />}></Route>
        <Route path='*' element={<FilmPresentation />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
