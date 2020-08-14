import React from 'react';

class Form extends React.Component {
  
  state = {
  }

 //This func is called when you click the button
 // has been passed in from from the parent via props
  nextCicked = e => {
    e.preventDefault();
    this.props.showConfirm(
        this.state.name, 
        this.state.rsvpAnswer,
        this.state.foodOptions
        );
  }

  render() {

  return (
  <div>
  <p>{this.props.errorMessage}</p>

  {/* Form */}
   <form
    className="form">    

  {/* Enter Name Textfield */}
      <label>
      Name:
        <br />
        <input
         type="text" name="name"
         className="textfield"
         onChange={e => this.setState({ name: e.target.value})}/>
      </label>
        <br /><br />

     {/* RSVP */}
     <label>
      RSVP:
          <br />
          <select 
          className="textfield"
          onChange={e => this.setState({ rsvpAnswer: e.target.value})}>
              <option value="" disabled selected>Select</option>
              <option value="Accepted">Delightfully Accepts</option>
              <option value="Declined">Regretfully Declines</option>
          </select>
      </label>




       {/* Select Food Preference Dropdown */}
       <br /><br />
      <label>
      Please choose a meal:
          <br />
          <select 
          className="textfield"
          onChange={e => this.setState({ foodOptions: e.target.value})}>
              <option value="" disabled selected>Select</option>
              <option value="Chicken">Chicken</option>
              <option value="Fish">Fish</option>
              <option value="Beef">Beef</option>
              <option value="Vegan">Vegan</option>
              <option value="Cannot Make It">Cannot Make It</option>
          </select>
      <br /><br />
      </label>

          <button 
          className="mainbtn"
          onClick={e => this.nextCicked(e)}>Next</button>
     </form>
    </div>

    );
  }
  }

export default Form;