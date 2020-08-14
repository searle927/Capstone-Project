import React, { Component } from 'react';
import Form from './Form';
import Confirm from './Confirm'
import './RSVP.css';

//BASE APP COMPONENT

class RSVP extends Component {
  
state = {
  showConfirmScreen: false,
  toggleRsvps: false,
  toggleIcon: "⊕",
  rsvps: [],
  errorMessage: '',
  }


//Saves the users entry as a pending invite,validates
  onSubmit(name, foodOptions) {
    console.log(name)
    if (name === undefined || foodOptions === undefined) {
      console.log("error")
      this.setState({errorMessage: 'Please fill all fields'})
    } else {

    let pendingRsvp = []
    pendingRsvp.name = name;
    pendingRsvp.foodOptions = foodOptions;
    this.setState({ pendingRsvp: pendingRsvp, showConfirmScreen: true });
   }
  };


//Pushes the pending invte data into the RSVP's array on confirm
  onConfirm = () => {
    let rsvps = [...this.state.rsvps]
    let newRsvp = {}
    newRsvp.name = this.state.pendingRsvp.name;
    newRsvp.foodOptions = this.state.pendingRsvp.foodOptions;
    rsvps.push(newRsvp);
    this.setState ({ rsvps: rsvps, showConfirmScreen: false, errorMessage: '' })
  }


//Toggles the guestslist, and swutched the icon between + & -
  toggle = (event) => {
    this.state.toggleRsvps === true ? this.setState ({toggleRsvps: false, toggleIcon: "⊕"}) : this.setState ({toggleRsvps: true, toggleIcon: "⊖"}) ;
  }
 

//RENDER
  render() {
//Conditonal rendering to show correct screen
  let view;
  if (this.state.showConfirmScreen === false) {
      view = <Form
      showConfirmScreen={(name, foodOptions) => this.onSubmit(name, foodOptions)}
      errorMessage={this.state.errorMessage}/>
  } else {
      view = <Confirm 
      name={this.state.pendingRsvp.name}
      foodOptions={this.state.pendingRsvp.foodOptions}
      onConfirm={this.onConfirm}
      onEdit={() => this.setState ({ showConfirmScreen: false, errorMessage: '' })}/>
  }

//Note: The following should really be its own component!!! Refractor
//Render and toggle the guest list conditionally
  let rsvps;
  if (this.state.toggleRsvps === true && this.state.rsvps.length <= 0) {
        rsvps = <div><p>No guests so far</p></div>
      } else if (this.state.toggleRsvps === true) {
        rsvps = <div> {this.state.rsvps.map((r) => { return <li>{r.name}, {r.foodOptions}</li> })} </div>
    } else {
  //else nothing is rendered as section is not toggled
  }


//RETURN
  return (
  <div className="App">
     
    {/* <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h1>30 days of React</h1>
      <h2>Day Nineteen / Party RSVP</h2>
    </header> */}

    <div className="guests-section">
      <div>
        <p onClick={this.toggle}> Guest List {this.state.toggleIcon}</p>
        <p> {rsvps} </p>
      </div>
    </div>

    <div className="colour-section">
      {view}
    </div>

    </div>

  );
 }
}

export default RSVP;