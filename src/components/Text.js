import React from 'react';
import './Text.css';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

function Text(props) {
  return (
    <TransitionGroup>
      <CSSTransition key={props.currentQuote} timeout={3500} classNames="fade">
        <p className={props.class}>{props.currentQuote}</p>
      </CSSTransition>
    </TransitionGroup>
  );
}

export default Text;
