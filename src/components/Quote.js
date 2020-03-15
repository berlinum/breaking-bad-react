import React from 'react';
import './Quote.css';
import Button from './Button';
import Text from './Text';
import Author from './Author';

function Quote() {
  const [quotes, setQuotes] = React.useState([]);
  const [currentQuote, setCurrentQuote] = React.useState('');
  const [author, setAuthor] = React.useState('Walter White');

  React.useEffect(() => {
    async function getQuotes() {
      const response = await fetch(
        'https://breaking-bad-quotes.herokuapp.com/v1/quotes/300'
      );
      const quotes = await response.json();
      setQuotes(quotes);
    }
    getQuotes();
  }, []);

  function handleClick(name) {
    const filteredQuotes = quotes
      .filter(author => author.author === name)
      .map(filteredQuotes => [filteredQuotes.author, filteredQuotes.quote]);
    const randomQuote =
      filteredQuotes[Math.floor(Math.random() * filteredQuotes.length)];
    setCurrentQuote(randomQuote);
  }

  return (
    <>
      <Text class="quote__text" currentQuote={currentQuote[1]} />
      <Author class={author} author={currentQuote[0]} />
      <div className="btn__container">
        <Button
          class="btn"
          title="White"
          onClick={() => {
            handleClick('Walter White');
            setAuthor('Walter White');
          }}
        />
        <Button
          class="btn"
          title="Jesse"
          onClick={() => {
            handleClick('Jesse Pinkman');
            setAuthor('Jesse Pinkman');
          }}
        />
      </div>
    </>
  );
}

export default Quote;
