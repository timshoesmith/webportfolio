import React from 'react';
import NavBar from './components/NavBar';
import './App.css';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import Contact from './components/pages/Contact';
import Portfolio from './components/pages/Portfolio';
import About from './components/pages/About';
import ReactPage from './components/pages/ReactPage';

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Switch>
          <Route path='/' exact  component= {Home}/>
          <Route path='/portfolio' component= {Portfolio} />
          <Route path='/contact' component= {Contact} />
          <Route path='/about' component= {About} />
          <Route path='/reactpage' component= {ReactPage} />
        </Switch>
      </Router>
    </>
  );
}

export default App;