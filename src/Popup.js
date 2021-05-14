import React from 'react';

const Popup = (props) => {
  return(props.trigger) ? (
    <div className="popup-box">
      <div className="box">
        <button className="close-icon" onClick={()=> props.setTrigger(false)}>x</button>
        {props.children}
      </div>

    </div>
   ):"";
}

export default Popup;
