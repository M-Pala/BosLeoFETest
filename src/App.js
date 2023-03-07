import './App.css';
import { AllMovies } from './components/AllMovies';
import Footer from './components/Footer';
import { InterestTracking } from './components/InterestTracking';
import { MovieMainDetails } from './components/MovieMainDetails';
import { MovieProperties } from './components/MovieProperties';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <MovieMainDetails/>
      <MovieProperties/>
      <InterestTracking/>
      <AllMovies/>
      <Footer/>
    </div>
  );
}

export default App;
