import LoginSignup from "./user-credentials/LoginSignup";
import Popup from "../popup/popup";
import React, { useState, useEffect } from 'react';

const PopupSignInUp = ({promo}) => {

  return (
    <div
      className={`sign_up_modal modal fade bd-example-modal-lg`}
      tabIndex="-1"
      role="dialog"
      aria-hidden="true"
     
    >
      <div
        className="modal-dialog modal-dialog-centered modal-lg"
        role="document"
      >
        {/* <LoginSignup /> */}
        <Popup name={promo?.promo_name} description={promo?.promo_description} id={promo?.id}/>
      </div>
    </div>
  );
};

export default PopupSignInUp;
