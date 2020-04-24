import React from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import About from './pages/About';
import Profile from './pages/Profile';

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Switch>
        <div className="container">
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/profile/:name" component={Profile} />
        </div>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
