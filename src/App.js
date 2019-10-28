import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import About from './About';


function App() {

  return (
    <Router>
      <Header />
      <Route exact path="/" component={Home} />
      <Route path="/About" component={About} />
    </Router>
  );
}

export default App;
