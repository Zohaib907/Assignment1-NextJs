import React from 'react';

const ContactPage = () => {
      return (
        <div>
            <h2>Contact Us</h2>
        <form>
            <div>
            <label htmlFor='name'>Name</label>
            <input type='text' name='name' />
            </div>
            <div>
            <label htmlFor='email'>Email</label>
            <input type='email' name='email' />
            </div>
            <div>
            <label htmlFor='message'>Message</label>
            <input type='text' name='message' />
            </div>
            <input type='submit' />
        </form>
        </div>

      );
  };
  
  export default ContactPage;