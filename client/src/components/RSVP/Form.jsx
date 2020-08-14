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
        this.state.foodOptions,
        this.state.guestNum
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


  {/* Select Food Preference Dropdown */}
      <br /><br />
      <label>
      Please choose a meal:
          <br />
          <select 
          className="textfield"
          onChange={e => this.setState({ foodOptions: e.target.value})}>
              <option value="" disabled selected>Select</option>
              <option value="chicken">Chicken</option>
              <option value="fish">Fish</option>
              <option value="beef">Beef</option>
              <option value="vegan">Vegan</option>
          </select>
      <br /><br />
      </label>


     {/* Number of Guests */}
     <label>
      Number of Guests:
        <br />
        <input
         type="text" name="guestamt"
         className="textfield"
         onChange={e => this.setState({ guestNum: e.target.value})}/>
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