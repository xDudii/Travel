import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Header } from './Components/Header';
import CountrySelector from './Components/CountrySelector';
import CardDetail from './Components/CardDetail'; 
import { Footer } from './Components/Footer';


function App() {




  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<CountrySelector />} />
            <Route path="/:url" element={<CardDetail />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

