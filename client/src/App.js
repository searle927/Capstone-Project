import React from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import Details from './components/Details/Details';
import Destination from './components/Destination/Destination';
import Advice from './components/Advice/Advice';
import Registry from './components/Registry/Registry';
import RSVP from './components/RSVP/RSVP';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Footer from './components/Footer/Footer';




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
      <Footer />
    </div>
    </Router>
    
  );
}

const Home = () => (
  <container className="container.">
   <img src="https://i.imgur.com/bZyKATO.png?1" className="banner" alt="engagement-photo" />
        
  <div className="wedding">
    <h1 className="title">Ryan and Shaina's Wedding</h1>
    <h3 className="date">October 23rd, 2021 <br /> The Royalton, Antigua </h3>
    <p className="para">Dear friends and relatives,<br /><br />
    We are delighted to share in our joy with you, this amazingly beautiful and special moment of our lives, the celebration of our love!
    <br /><br />In order to prepare you for the Big Day, we have created this site whereby all information and most important tips will be shared with you. <br />
    <br />We will see you in Antigua!</p>
  </div>
  </container>
)

export default App;
