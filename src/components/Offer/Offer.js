import React from 'react';
import bitmap from '../../assets/images/Bitmap.jpg'
import './offer.css'

const offer = () => (
  <div className="col-4 d-flex flex-column  discovery_wrraper">
    <div className="text-center ">
      <img src={bitmap} alt="" />
    </div>
    <div className="text-center">
      <span className="offer_header mt-3 d-block">
        Got something to
        <span className="d-block">offer?</span>
      </span>
      <span className="offer_text  mt-2">
        Become an expert trainer on Vidya and <br/>
        start earning money today
    </span>
      <button className="sign_up d-block mx-auto mt-4">
        Sign up
    </button>
    </div>
  </div>
)

export default offer