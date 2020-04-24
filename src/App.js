import React from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import { Route, Switch } from 'react-router-dom';
import About from './pages/About';
import Profile from './pages/Profile';

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <div className="container pt-4">
        <h1>Hello world</h1>
      </div>
      <Switch>
        <Route path="/about" component={About} />
        <Route path="/profile" component={Profile} />
        <Route path="/" component={Home} />
      </Switch>
    </React.Fragment>
  );
}

export default App;
