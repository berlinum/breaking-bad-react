import React from 'react';
import './Author.css';

function Author(props) {
  function getAuthorClassName(author) {
    const authorClassName =
      author === 'Walter White' ? 'autor_white' : 'autor_jesse';
    return authorClassName;
  }

  return <div className={getAuthorClassName(props.class)}>{props.author}</div>;
}

export default Author;
