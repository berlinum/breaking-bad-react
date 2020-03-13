import React from 'react';
import './Button.css';

function Button(props) {
  return (
    <button onClick={props.onClick} className={props.class}>
      {props.title}
    </button>
  );
}

export default Button;
