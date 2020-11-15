import React, { Component } from 'react';
import Form from './Form';
import Confirm from './Confirm'
import './RSVP.css';

//BASE APP COMPONENT

class RSVP extends Component {
  
state = {
  showConfirm: false,
  toggleRsvps: false,
  toggleIcon: "⊕",
  rsvps: [],
  errorMessage: '',
  }


//Saves the users entry as a pending invite,validates
  onSubmit(name, rsvpAnswer, foodOptions) {
    console.log(name)
    if (name === undefined || foodOptions === undefined || rsvpAnswer === undefined) {
      console.log("error")
      this.setState({errorMessage: 'Please fill out all fields'})
    } else {

    let pendingRsvp = []
    pendingRsvp.name = name;
    pendingRsvp.rsvpAnswer = rsvpAnswer;
    pendingRsvp.foodOptions = foodOptions;
    this.setState({ pendingRsvp: pendingRsvp, showConfirm: true });
   }
  };


//Pushes the pending invte data into the RSVP's array on confirm
  onConfirm = () => {
    let rsvps = [...this.state.rsvps]
    let newRsvp = {}
    newRsvp.name = this.state.pendingRsvp.name;
    newRsvp.rsvpAnswer = this.state.pendingRsvp.rsvpAnswer;
    newRsvp.foodOptions = this.state.pendingRsvp.foodOptions;
    rsvps.push(newRsvp);
    this.setState ({ rsvps: rsvps, showConfirm: false, errorMessage: '' })
  }


//Toggles the guestslist, and swutched the icon between + & -
  toggle = (event) => {
    this.state.toggleRsvps === true ? this.setState ({toggleRsvps: false, toggleIcon: "⊕"}) : this.setState ({toggleRsvps: true, toggleIcon: "⊖"}) ;
  }
 

//RENDER
  render() {
//Conditonal rendering to show correct screen
  let view;
  if (this.state.showConfirm === false) {
      view = <Form
      showConfirm={(name, rsvpAnswer, foodOptions) => this.onSubmit(name, rsvpAnswer, foodOptions)}
      errorMessage={this.state.errorMessage}/>
  } else {
      view = <Confirm 
      name={this.state.pendingRsvp.name}
      rsvpAnswer={this.state.pendingRsvp.rsvpAnswer}
      foodOptions={this.state.pendingRsvp.foodOptions}
      onConfirm={this.onConfirm}
      onEdit={() => this.setState ({ showConfirm: false, errorMessage: '' })}/>
  }


//Render and toggle the guest list conditionally
  let rsvps;
  if (this.state.toggleRsvps === true && this.state.rsvps.length <= 0) {
        rsvps = <div><p className="noGuest">No guests so far</p></div>
      } else if (this.state.toggleRsvps === true) {
      rsvps = <div> {this.state.rsvps.map((r) => { return <li> {r.name}, {r.rsvpAnswer}, {r.foodOptions}</li> })} </div>
    } else {
  //else nothing is rendered as section is not toggled
  }


//RETURN
  return (
  <div className="rsvpContainer">
    {/* <div className="gallery"> */}

    {/* This shows the actual rsvp form */}
    {/* <div className="form-section"> */}
      {view}
    {/* </div> */}

     {/* This shows the guestlist toggle */}
     <div className="guests-section">
      <div>
        <p onClick={this.toggle} className="guestList"> Guest List {this.state.toggleIcon}</p>
        <p> {rsvps} </p>
      </div>
    </div>
    </div>
    // </div>

  );
 }
}

export default RSVP;