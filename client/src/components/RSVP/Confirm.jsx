import React from 'react';

const Confirm = ( props ) => {

 return (

<div>

  <h2 className="rsvpConfirmation">Confirm RSVP Details</h2>
  <p className="infoConf">Name: {props.name}</p>
  <p className="infoConf">Status: {props.rsvpAnswer}</p>
  <p className="infoConf">Food Options: {props.foodOptions}</p>

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