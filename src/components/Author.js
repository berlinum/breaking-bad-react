import React from 'react';
import './Author.css';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

function Author(props) {
  function getAuthorClassName(author) {
    const authorClassName =
      author === 'Walter White' ? 'autor_white' : 'autor_jesse';
    return authorClassName;
  }

  return (
    <TransitionGroup>
      <CSSTransition key={props.author} timeout={3500} classNames="fade">
        <div className={getAuthorClassName(props.class)}>{props.author}</div>
      </CSSTransition>
    </TransitionGroup>
  );
}

export default Author;
