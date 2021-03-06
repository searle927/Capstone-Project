import React, { Component } from 'react';


const emailRegex = RegExp(
    /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
  );

  const formValid = ({ formErrors, ...rest }) => {
    let valid = true;
  
    // validate form errors being empty
    Object.values(formErrors).forEach(val => {
      val.length > 0 && (valid = false);
    });
  
    // validate the form was filled out
    Object.values(rest).forEach(val => {
      val === null && (valid = false);
    });
  
    return valid;
  };

class Email extends Component {
    constructor(props) {
        super(props);

    this.state = {
      email: null,
      formErrors: {
        email: "",
      }
    };
  }

  handleSubmit = e => {
    e.preventDefault();

    if (formValid(this.state)) {
      console.log(`
        Email: ${this.state.email}
      `);
    } else {
      console.error("FORM INVALID - DISPLAY ERROR MESSAGE");
    }
  };

  handleChange = e => {
    e.preventDefault();
    const { name, value } = e.target;
    let formErrors = { ...this.state.formErrors };

    switch (name) {
      case "email":
        formErrors.email = emailRegex.test(value)
          ? ""
          : "invalid email address";
        break;
     }

    this.setState({ formErrors, [name]: value }, () => console.log(this.state));
  };

  render() {
    const { formErrors } = this.state;

    return (
      <div className="wrapper">
        <div className="form-wrapper">
          <form onSubmit={this.handleSubmit} noValidate>
            <div className="email">
              <label htmlFor="email">Email:</label><br />
              <input
                className={formErrors.email.length > 0 ? "error" : null}
                type="email"
                name="email"
                noValidate
                onChange={this.handleChange}
              />
              {formErrors.email.length > 0 && (
                <span className="errorMessage">{formErrors.email}</span>
              )}
            </div>
          </form>
        </div>
      </div>
    );
    }
}

export default Email
