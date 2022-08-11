import React from "react";

/*
  Thanks to cluemediator.com.com for the help of implementing this extra feature (not required by udacity).
  I have also asked for permission from my EgFwd Leader if it was okay and I was granted permission since 
  it is an extra feature.
*/

const BookInformationPopup = props => {
  return (
    <div className="popup-box">
      <div className="box">
        <span className="close-icon" onClick={props.handleClose}>x</span>
        {props.content}
      </div>
    </div>
  );
};
 
export default BookInformationPopup;
