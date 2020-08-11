import React from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import Details from './components/Details/Details';
import Destination from './components/Destination/Destination';
import Advice from './components/Advice/Advice';
import Registry from './components/Registry/Registry';
import RSVP from './components/RSVP/RSVP';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
    <div className="App">
      <NavBar />
      

      <Switch>
          <Route path="/" exact component={Home} />
          <Route exact path="/details" component={Details} />
          <Route exact path="/destination" component={Destination} />
          <Route exact path="/advice" component={Advice} />
          <Route exact path="/registry" component={Registry} />
          <Route exact path="/RSVP" component={RSVP} />
      </Switch>
    </div>
    </Router>
  );
}

const Home = () => (
  <div>
    <h1>Home Page</h1>
  </div>
)

export default App;
