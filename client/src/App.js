import React from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import Details from './components/Details/Details';
import Destination from './components/Destination/Destination';
import Advice from './components/Advice/Advice';
import Registry from './components/Registry/Registry';
import RSVP from './components/RSVP/RSVP';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import Beach from './components/Video/beach.mp4'


function App() {
  return (
    <Router>
    <div className="App">
{/*       
    <video autoplay loop muted
    style={{
      position: "absolute",
      width: "100%",
      // left: "50%",
      // top: "50%",
      height: "100%",
      // transform: "-50% -50%",
      zIndex: "-10"
    }}
    >
      <source src={Beach} type="video/mp4" />
    </video> */}

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
  <container className="container.">
  <div className="wedding">
    <h1 className="title">Ryan and Shaina's Wedding</h1>
    <h3 className="date">October 23rd, 2021 <br /> The Royalton, Antigua </h3>
  </div>
  </container>
)

export default App;
