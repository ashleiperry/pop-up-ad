import React from 'react';

const Popup = props => {
  let handleExit = () => {
    confirm("Are you sure you don't want to see Tay Sway?")
  }

  let submit = event => {
    event.preventDefault();
    console.log('Form submitted');
  }
  return(
    <div className= "advert">
      <div className="boxed">
        <i className="fa fa-times" aria-hidden="true" onClick={handleExit}></i>
        </div>

      <h2>You have won tickets to see {props.name}!!</h2>
      <h4>Please enter your email so we can send you the tickets</h4>
      <form onSubmit={submit}>
        <input type= "email" className= "email" placeholder= "Your email here" />
        <input type= "submit" className="button" value= "CLAIM YOUR PRIZE" />
      </form>
    </div>
  );
};

export default Popup;
