import React, { Component } from 'react';
import bitmap from '../../assets/images/Bitmap.jpg'
import './LibraryList.css';

class LibraryList extends Component {
  render() {
    return (
      <div className="row libraryWrraper  b">
        <div className="col-12 d-flex  align-items-center justify-content-center ">
          <div className="text-center">
            <img src={bitmap} alt="" />
            <div className="text-center mt-4">
              <span className="lib_text">Your library is <br />
                empty now</span>
            </div>
            <div>
              <span className="lib_subtext">You can find any courses at discover screen</span>
            </div>
            <div>
              <button className="sign_up d-block mx-auto mt-4">
                Discover
              </button>
            </div>
            <div>
              <span className="mt-4 d-block">Search for courses</span>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default LibraryList

