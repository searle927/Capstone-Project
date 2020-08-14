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

  return (
    <form className="contact-form" onSubmit={sendEmail}>
      <input type="hidden" name="contact_number" />
      <label>Name</label>
      <input type="text" name="user_name" />
      <label>RSVP</label>
      <input type="rsvpAnswer" name="rsvpAnswer" />
      <label>Food Option</label>
      <textarea name="foodOption" />
      <input type="foodOption" value="foodOption" />
    </form>
  );
}

