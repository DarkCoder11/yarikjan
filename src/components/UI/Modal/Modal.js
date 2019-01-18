import React, { Component } from 'react';
import './Modal.css';

class Modal extends Component {

  state = {
    email: '',
    number: '',
    password: ''
  }

  render() {
    return (
      <div className="myModal">
        <div className="modal_content d-flex justify-content-center">
          <span className="create_title">
            Create an account or <br />
            sign in to view library
          </span>
          <div>
            <span>Your email</span>
            <input name="email" type="text" />
            <span>Your phone number</span>
            <input name="number" type="text" />
            <span>Create a password</span>
            <input name="password" type="password" />
          </div>
        </div>
      </div>
    )
  }
}

export default Modal