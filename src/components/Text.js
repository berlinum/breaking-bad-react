import React from 'react';
import './Text.css';

function Text(props) {
  return <p className={props.class}>{props.currentQuote}</p>;
}

export default Text;
