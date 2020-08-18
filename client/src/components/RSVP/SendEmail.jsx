import React from 'react'
import emailjs from 'emailjs-com';

export default function SendEmail() {

function SendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('gmail', 'rsvp_template', e.target, 'user_wmCofciMoExJ8lhZagefO')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  }

  
  return(
    <div>
      <div className="container">
        <form onSubmit={sendEmail}>
          <div className="row pt-5 ax-auto">
            <div className="col-8 form-group ex-auto">
              <input type="text" className="form-control" placeholder="Name" name="name"/>
            </div>
            <div className="col-8 form-group pt-2 ex-auto">
              <input type="text" className="form-control" placeholder="Email Address" name="email"/>
            </div>
            <div className="col-8 form-group ex-auto">
              <input type="text" className="form-control" placeholder="Name" name="name"/>
            </div>
            <div className="col-8 form-group ex-auto">
              <input type="text" className="form-control" placeholder="Name" name="name"/>
            </div>
            <div className="col-8 form-group ex-auto">
              <input type="text" className="form-control" placeholder="Name" name="name"/>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

