import React from 'react';
import './ButtonHome.css';
const ButtonHome = (props) => {
  return (
    <>
      <button className="btn btn-primary bg-button btn-log" type="submit">
        {props.title}
      </button>
    </>
  );
}

export default ButtonHome