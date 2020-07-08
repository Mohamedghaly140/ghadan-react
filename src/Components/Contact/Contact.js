import React, { Fragment } from 'react';
import './Contact.css'

const Contact = () => {
  return (
    <Fragment>
      <div className='contact-us my-title'>
        <div className='container'>
          <div className='title'>
            <h2>Contact Us</h2>
            <div className='line'></div>
          </div>
          <form>
            <div className='name'>
              <input type='text' name='name' id='name' placeholder='Name' />
              <input type='email' name='email' id='email' placeholder='Email' />
            </div>
            <input
              type='text'
              name='subject'
              id='subject'
              placeholder='Subject'
            />
            <textarea
              name='message'
              id=''
              placeholder='Message for me'
            ></textarea>
          </form>
        </div>
      </div>
    </Fragment>
  );
};

export default Contact;
