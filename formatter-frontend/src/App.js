import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import {Switch, Route } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import Home from './components/Home';
import JsonFormatter from './components/JsonFormatter';

function App() {
  return (
    <div className="App">
      <Header/>
      <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/jsonFormat" component={JsonFormatter} />
      </Switch>
      </Router>
      {/* <Home/> */}
      <Footer />
    </div>
  );
}

export default App;
