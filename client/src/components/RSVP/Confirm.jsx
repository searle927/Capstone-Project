import React from 'react';

const Confirm = ( props ) => {

 return (

<div>

  <h2>Confirm RSVP Details</h2>
  <p>Name: {props.name}</p>
  <p>Status: {props.rsvpAnswer}</p>
  <p>Food Options: {props.foodOptions}</p>

  <button 
     className="secondarybtn"
     onClick={props.onEdit}>Edit
  </button>
 
  <button 
     className="mainbtn"
     onClick={props.onConfirm}>Confirm
  </button>
 
  </div>

  );
};

export default Confirm;