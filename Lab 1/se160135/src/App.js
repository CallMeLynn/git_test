import './App.css';
import FilmPresentation from './components/films/FilmPresentation';
import Footer from './components/footer/Footer';
import NavBar from './components/navBar/NavBar';

function App() {
  return (
    <div className="App bg-sky-100">
      <NavBar />
      <FilmPresentation />
      <Footer />
    </div>
  );
}

export default App;
