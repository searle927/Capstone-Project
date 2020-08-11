import React from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar';

function App() {
  return (
    <div className="App">
      <NavBar />

      {/* <Switch>
          <Route exact path="/" component={Header} />
          <Route exact path="/details" component={Details} />
          <Route exact path="/destination" component={Destination} />
          <Route exact path="/advice" component={Advice} />
          <Route exact path="/registry" component={Registy} />
          <Route exact path="/RSVP" component={RSVP} />
      </Switch> */}
    </div>
  );
}

export default App;
