import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import { Routes, Route } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import Home from './components/Home';
import JsonFormatter from './components/JsonFormatter';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />

        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/jsonFormat" element={<JsonFormatter />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
